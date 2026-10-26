import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FolderTree,
  BookOpen,
  Play,
  RotateCcw,
  Save,
  Download,
  Terminal,
  Columns,
  Eye,
  Code2,
  Menu,
  X,
  Sparkles,
  Info
} from 'lucide-react';
import {
  ActiveFile,
  CatalogExample,
  ConsoleMessage,
  EditorSettings,
  LabFiles,
  PreviewDevice,
  UserProgress
} from './types';
import {
  ALL_CATALOG_EXAMPLES,
  getAdjacentExamples,
  getExampleById
} from './data/catalog';
import {
  clearDraftForExample,
  getDraftForExample,
  loadProgress,
  loadSettings,
  saveDraftForExample,
  saveProgress,
  saveSettings
} from './services/storage';
import { downloadIndividualFile, exportProjectAsZip } from './services/exporter';
import { TopToolbar } from './components/TopToolbar';
import { FileExplorer } from './components/FileExplorer';
import { CurriculumNavigator } from './components/CurriculumNavigator';
import { CodeEditorPane } from './components/CodeEditorPane';
import { BrowserPreview } from './components/BrowserPreview';
import { ConsolePanel } from './components/ConsolePanel';
import { ExampleDetails } from './components/ExampleDetails';
import { CoverageModal, ShortcutsModal, SettingsModal } from './components/Modals';

export const App: React.FC = () => {
  // Load initial settings and progress from localStorage
  const [settings, setSettings] = useState<EditorSettings>(() => loadSettings());
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());

  // Current example
  const [currentExampleId, setCurrentExampleId] = useState<string>(() => {
    return progress.activeExampleId || 'ch1-fig1-7-sample-doc';
  });

  const currentExample: CatalogExample =
    getExampleById(currentExampleId) || ALL_CATALOG_EXAMPLES[0];

  // Files state
  const [activeFile, setActiveFile] = useState<ActiveFile>('index.html');
  const [files, setFiles] = useState<LabFiles>(() => {
    return getDraftForExample(currentExampleId, {
      'index.html': currentExample.html,
      'style.css': currentExample.css,
      'script.js': currentExample.javascript
    });
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // View & UI states
  const [activeSidebarTab, setActiveSidebarTab] = useState<'explorer' | 'curriculum'>('curriculum');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showExplanation, setShowExplanation] = useState(true);
  const [previewDevice, setPreviewDevice] = useState<PreviewDevice>('responsive');
  const [zoom, setZoom] = useState(100);
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [showConsole, setShowConsole] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mobile navigation tabs ('editor' | 'preview' | 'curriculum' | 'lesson')
  const [mobileTab, setMobileTab] = useState<'editor' | 'preview' | 'curriculum' | 'lesson'>('editor');

  // Modals
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isCoverageOpen, setIsCoverageOpen] = useState(false);

  // PWA install prompt state
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallPwa = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  // Auto-run debounce timer
  const autoRunTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Listen to postMessage from sandboxed iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.source === 'weblab-sandbox' && event.data.action === 'console') {
        const newMsg: ConsoleMessage = {
          id: Math.random().toString(36).substring(2, 9),
          type: event.data.level || 'log',
          text: event.data.text || '',
          timestamp: event.data.timestamp || new Date().toLocaleTimeString()
        };
        setConsoleMessages((prev) => [...prev.slice(-99), newMsg]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Save settings when modified
  const handleUpdateSettings = (newSettings: EditorSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  // Switch Example
  const handleSelectExample = useCallback((id: string) => {
    const target = getExampleById(id);
    if (!target) return;

    // Auto-save current working draft before switching
    if (hasUnsavedChanges) {
      saveDraftForExample(currentExampleId, files);
    }

    setCurrentExampleId(id);

    // Load draft or default for target
    const loadedFiles = getDraftForExample(id, {
      'index.html': target.html,
      'style.css': target.css,
      'script.js': target.javascript
    });

    setFiles(loadedFiles);
    setHasUnsavedChanges(false);
    setConsoleMessages([]);
    setRefreshTrigger((prev) => prev + 1);

    // Update activeExampleId in progress
    setProgress((prev) => {
      const updated = { ...prev, activeExampleId: id };
      saveProgress(updated);
      return updated;
    });
  }, [currentExampleId, files, hasUnsavedChanges]);

  // Code edit handler with Auto-run debouncing
  const handleFileContentChange = (file: ActiveFile, content: string) => {
    const updated = { ...files, [file]: content };
    setFiles(updated);
    setHasUnsavedChanges(true);

    if (settings.autoRun) {
      if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
      autoRunTimerRef.current = setTimeout(() => {
        setRefreshTrigger((prev) => prev + 1);
      }, settings.autoRunDelay);
    }
  };

  // Manual Run
  const handleManualRun = () => {
    if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
    setRefreshTrigger((prev) => prev + 1);
  };

  // Save draft
  const handleSaveDraft = () => {
    saveDraftForExample(currentExampleId, files);
    setHasUnsavedChanges(false);
  };

  // Reset example to original source
  const handleResetExample = () => {
    if (window.confirm('Reset this example back to its original code from the PDF?')) {
      clearDraftForExample(currentExampleId);
      setFiles({
        'index.html': currentExample.html,
        'style.css': currentExample.css,
        'script.js': currentExample.javascript
      });
      setHasUnsavedChanges(false);
      setRefreshTrigger((prev) => prev + 1);
      setConsoleMessages([]);
    }
  };

  // Download individual file
  const handleDownloadFile = (fileName: ActiveFile) => {
    const mimeMap: Record<ActiveFile, string> = {
      'index.html': 'text/html',
      'style.css': 'text/css',
      'script.js': 'application/javascript'
    };
    downloadIndividualFile(fileName, files[fileName], mimeMap[fileName]);
  };

  // Reset single file
  const handleResetSingleFile = (fileName: ActiveFile) => {
    const defaults = {
      'index.html': currentExample.html,
      'style.css': currentExample.css,
      'script.js': currentExample.javascript
    };
    setFiles((prev) => ({ ...prev, [fileName]: defaults[fileName] }));
    setHasUnsavedChanges(true);
    setRefreshTrigger((prev) => prev + 1);
  };

  // Export full project ZIP
  const handleExportZip = async () => {
    await exportProjectAsZip(files, currentExample);
  };

  // Bookmarking & Completion
  const handleToggleComplete = (id: string) => {
    setProgress((prev) => {
      const isCompleted = prev.completedIds.includes(id);
      const nextCompleted = isCompleted
        ? prev.completedIds.filter((item) => item !== id)
        : [...prev.completedIds, id];
      const updated = { ...prev, completedIds: nextCompleted };
      saveProgress(updated);
      return updated;
    });
  };

  const handleToggleBookmark = (id: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedIds.includes(id);
      const nextBookmarked = isBookmarked
        ? prev.bookmarkedIds.filter((item) => item !== id)
        : [...prev.bookmarkedIds, id];
      const updated = { ...prev, bookmarkedIds: nextBookmarked };
      saveProgress(updated);
      return updated;
    });
  };

  const handleSaveNote = (note: string) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        notes: { ...prev.notes, [currentExampleId]: note }
      };
      saveProgress(updated);
      return updated;
    });
  };

  // Adjacent navigation
  const { prev: prevExample, next: nextExample } = getAdjacentExamples(currentExampleId);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleManualRun();
      } else if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSaveDraft();
      } else if (e.altKey && e.key.toLowerCase() === 'n' && nextExample) {
        e.preventDefault();
        handleSelectExample(nextExample.id);
      } else if (e.altKey && e.key.toLowerCase() === 'p' && prevExample) {
        e.preventDefault();
        handleSelectExample(prevExample.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextExample, prevExample, handleSelectExample]);

  return (
    <div className={`h-screen w-screen flex flex-col overflow-hidden bg-[#1e1e1e] text-[#cccccc] ${settings.theme === 'vs-light' ? 'theme-light' : ''}`}>
      {/* 1. TOP TOOLBAR */}
      <TopToolbar
        currentExample={currentExample}
        settings={settings}
        previewDevice={previewDevice}
        hasUnsavedChanges={hasUnsavedChanges}
        isAutoRunning={settings.autoRun}
        isFullscreen={isFullscreen}
        onRun={handleManualRun}
        onReset={handleResetExample}
        onSave={handleSaveDraft}
        onToggleTheme={() =>
          handleUpdateSettings({
            ...settings,
            theme: settings.theme === 'vs-dark' ? 'vs-light' : 'vs-dark'
          })
        }
        onToggleAutoRun={() =>
          handleUpdateSettings({
            ...settings,
            autoRun: !settings.autoRun
          })
        }
        onChangeDevice={setPreviewDevice}
        onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        onOpenCoverage={() => setIsCoverageOpen(true)}
        onExportZip={handleExportZip}
        onToggleExplanation={() => setShowExplanation(!showExplanation)}
        showExplanation={showExplanation}
        canInstallPwa={!!deferredPrompt}
        onInstallPwa={handleInstallPwa}
      />

      {/* 2. MOBILE NAVIGATION TABS (visible only on mobile) */}
      <div className="flex md:hidden bg-[#252526] border-b border-[#333333] text-xs">
        <button
          onClick={() => setMobileTab('editor')}
          className={`flex-1 py-2 text-center font-medium ${
            mobileTab === 'editor' ? 'text-white border-b-2 border-[#007acc] bg-[#1e1e1e]' : 'text-[#888888]'
          }`}
        >
          Code Editor
        </button>
        <button
          onClick={() => setMobileTab('preview')}
          className={`flex-1 py-2 text-center font-medium ${
            mobileTab === 'preview' ? 'text-white border-b-2 border-[#007acc] bg-[#1e1e1e]' : 'text-[#888888]'
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setMobileTab('curriculum')}
          className={`flex-1 py-2 text-center font-medium ${
            mobileTab === 'curriculum' ? 'text-white border-b-2 border-[#007acc] bg-[#1e1e1e]' : 'text-[#888888]'
          }`}
        >
          Curriculum
        </button>
        <button
          onClick={() => setMobileTab('lesson')}
          className={`flex-1 py-2 text-center font-medium ${
            mobileTab === 'lesson' ? 'text-white border-b-2 border-[#007acc] bg-[#1e1e1e]' : 'text-[#888888]'
          }`}
        >
          Lesson
        </button>
      </div>

      {/* 3. MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* LEFT ACTIVITY BAR & SIDEBAR (Explorer & Curriculum) */}
        <aside
          className={`${
            isSidebarOpen ? 'w-72 xl:w-80' : 'w-12'
          } bg-[#252526] border-r border-[#3e3e42] flex flex-row shrink-0 transition-all duration-200 z-20 ${
            mobileTab !== 'curriculum' ? 'hidden md:flex' : 'w-full flex'
          }`}
        >
          {/* Vertical Activity Icons Bar */}
          <div className="w-12 bg-[#333333] flex flex-col items-center py-2 space-y-2 select-none border-r border-[#252526] shrink-0">
            <button
              onClick={() => {
                if (isSidebarOpen && activeSidebarTab === 'curriculum') {
                  setIsSidebarOpen(false);
                } else {
                  setIsSidebarOpen(true);
                  setActiveSidebarTab('curriculum');
                }
              }}
              title="Curriculum Navigator (44-Page PDF Modules)"
              className={`p-2.5 rounded cursor-pointer transition-colors ${
                isSidebarOpen && activeSidebarTab === 'curriculum'
                  ? 'bg-[#1e1e1e] text-white border-l-2 border-[#007acc]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              <BookOpen size={18} />
            </button>

            <button
              onClick={() => {
                if (isSidebarOpen && activeSidebarTab === 'explorer') {
                  setIsSidebarOpen(false);
                } else {
                  setIsSidebarOpen(true);
                  setActiveSidebarTab('explorer');
                }
              }}
              title="Project File Explorer (index.html, style.css, script.js)"
              className={`p-2.5 rounded cursor-pointer transition-colors ${
                isSidebarOpen && activeSidebarTab === 'explorer'
                  ? 'bg-[#1e1e1e] text-white border-l-2 border-[#007acc]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              <FolderTree size={18} />
            </button>
          </div>

          {/* Expanded Sidebar Body */}
          {isSidebarOpen && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {activeSidebarTab === 'curriculum' ? (
                <CurriculumNavigator
                  currentExampleId={currentExampleId}
                  onSelectExample={(id) => {
                    handleSelectExample(id);
                    setMobileTab('editor');
                  }}
                  completedIds={progress.completedIds}
                  bookmarkedIds={progress.bookmarkedIds}
                  onToggleComplete={handleToggleComplete}
                  onToggleBookmark={handleToggleBookmark}
                />
              ) : (
                <FileExplorer
                  activeFile={activeFile}
                  onSelectFile={(file) => {
                    setActiveFile(file);
                    setMobileTab('editor');
                  }}
                  files={files}
                  onDownloadFile={handleDownloadFile}
                  onResetFile={handleResetSingleFile}
                  hasFileModifications={{
                    'index.html': files['index.html'] !== currentExample.html,
                    'style.css': files['style.css'] !== currentExample.css,
                    'script.js': files['script.js'] !== currentExample.javascript
                  }}
                />
              )}
            </div>
          )}
        </aside>

        {/* CENTER & RIGHT: EDITORS + PREVIEW WORKSPACE */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
          {/* CODE EDITOR PANE */}
          <section
            className={`flex-1 flex flex-col overflow-hidden min-h-0 ${
              mobileTab !== 'editor' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <CodeEditorPane
              activeFile={activeFile}
              onSelectFile={setActiveFile}
              files={files}
              onChangeFileContent={handleFileContentChange}
              settings={settings}
              onRun={handleManualRun}
              onSave={handleSaveDraft}
            />
          </section>

          {/* BROWSER PREVIEW & CONSOLE PANE */}
          <section
            className={`flex-1 flex flex-col overflow-hidden min-h-0 ${
              mobileTab !== 'preview' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <div className="flex-1 overflow-hidden min-h-0 flex flex-col">
              <BrowserPreview
                files={files}
                device={previewDevice}
                onChangeDevice={setPreviewDevice}
                zoom={zoom}
                onChangeZoom={setZoom}
                consoleMessages={consoleMessages}
                showConsole={showConsole}
                onToggleConsole={() => setShowConsole(!showConsole)}
                onClearConsole={() => setConsoleMessages([])}
                refreshTrigger={refreshTrigger}
                onManualRefresh={handleManualRun}
              />
            </div>

            {/* Bottom Console Terminal */}
            {showConsole && (
              <ConsolePanel
                messages={consoleMessages}
                onClear={() => setConsoleMessages([])}
                onClose={() => setShowConsole(false)}
              />
            )}
          </section>

          {/* RIGHT DRAWER: LESSON GUIDE & SOURCE CITATION */}
          {showExplanation && (
            <aside
              className={`w-full md:w-80 lg:w-96 shrink-0 flex flex-col z-10 ${
                mobileTab !== 'lesson' ? 'hidden xl:flex' : 'flex'
              }`}
            >
              <ExampleDetails
                example={currentExample}
                onPrev={() => prevExample && handleSelectExample(prevExample.id)}
                onNext={() => nextExample && handleSelectExample(nextExample.id)}
                hasPrev={!!prevExample}
                hasNext={!!nextExample}
                isCompleted={progress.completedIds.includes(currentExampleId)}
                isBookmarked={progress.bookmarkedIds.includes(currentExampleId)}
                onToggleComplete={() => handleToggleComplete(currentExampleId)}
                onToggleBookmark={() => handleToggleBookmark(currentExampleId)}
                onResetToOriginal={handleResetExample}
                userNote={progress.notes[currentExampleId] || ''}
                onSaveNote={handleSaveNote}
              />
            </aside>
          )}
        </div>
      </div>

      {/* 4. MODALS */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <CoverageModal
        isOpen={isCoverageOpen}
        onClose={() => setIsCoverageOpen(false)}
        onSelectExample={handleSelectExample}
      />
    </div>
  );
};

export default App;
