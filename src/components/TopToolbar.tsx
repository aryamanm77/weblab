import React from 'react';
import {
  Play,
  RotateCcw,
  Save,
  Moon,
  Sun,
  Settings,
  HelpCircle,
  Download,
  Smartphone,
  Tablet,
  Laptop,
  Maximize2,
  FileCode,
  CheckCircle2,
  BookOpen,
  Check
} from 'lucide-react';
import { CatalogExample, EditorSettings, PreviewDevice } from '../types';

interface TopToolbarProps {
  currentExample?: CatalogExample;
  settings: EditorSettings;
  previewDevice: PreviewDevice;
  hasUnsavedChanges: boolean;
  isAutoRunning: boolean;
  isFullscreen: boolean;
  onRun: () => void;
  onReset: () => void;
  onSave: () => void;
  onToggleTheme: () => void;
  onToggleAutoRun: () => void;
  onChangeDevice: (device: PreviewDevice) => void;
  onToggleFullscreen: () => void;
  onOpenSettings: () => void;
  onOpenShortcuts: () => void;
  onOpenCoverage: () => void;
  onExportZip: () => void;
  onToggleExplanation: () => void;
  showExplanation: boolean;
  canInstallPwa?: boolean;
  onInstallPwa?: () => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  currentExample,
  settings,
  previewDevice,
  hasUnsavedChanges,
  isAutoRunning,
  isFullscreen,
  onRun,
  onReset,
  onSave,
  onToggleTheme,
  onToggleAutoRun,
  onChangeDevice,
  onToggleFullscreen,
  onOpenSettings,
  onOpenShortcuts,
  onOpenCoverage,
  onExportZip,
  onToggleExplanation,
  showExplanation,
  canInstallPwa,
  onInstallPwa
}) => {
  return (
    <header className="h-12 bg-[#252526] border-b border-[#3e3e42] flex items-center justify-between px-3 text-[#cccccc] select-none text-xs">
      {/* Left: Brand + Breadcrumb */}
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex items-center gap-2 font-bold text-white tracking-wide shrink-0">
          <div className="w-6 h-6 rounded bg-[#0e639c] flex items-center justify-center text-white shadow-sm">
            <FileCode size={15} />
          </div>
          <span className="hidden sm:inline text-sm bg-gradient-to-r from-blue-400 to-sky-200 bg-clip-text text-transparent font-semibold">
            WebLab Explorer
          </span>
        </div>

        <div className="h-4 w-[1px] bg-[#3e3e42] shrink-0" />

        {currentExample ? (
          <div className="flex items-center gap-1.5 truncate text-[11px] text-[#969696]">
            <span className="bg-[#333333] px-2 py-0.5 rounded text-blue-300 font-medium shrink-0">
              Ch {currentExample.chapter} (p. {currentExample.sourcePage})
            </span>
            <span className="truncate text-[#e5e5e5] font-medium hidden md:inline">
              {currentExample.sourceListingOrFigure} — {currentExample.title}
            </span>
          </div>
        ) : (
          <span className="text-[#888888]">No Example Selected</span>
        )}
      </div>

      {/* Middle: Run & Reset controls */}
      <div className="flex items-center gap-1.5 shrink-0 mx-2">
        <button
          onClick={onRun}
          title="Run Code in Preview (Ctrl+Enter)"
          className="flex items-center gap-1.5 bg-[#0e639c] hover:bg-[#1177bb] text-white px-3 py-1.5 rounded font-medium shadow-sm transition-colors cursor-pointer"
        >
          <Play size={13} className="fill-white" />
          <span>Run</span>
        </button>

        <button
          onClick={onToggleAutoRun}
          title={`Auto-run on code edit: ${isAutoRunning ? 'ON' : 'OFF'}`}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded border transition-colors cursor-pointer ${
            isAutoRunning
              ? 'bg-[#1b3a2a] border-[#22c55e] text-[#4ade80]'
              : 'bg-[#2d2d2d] border-[#444444] text-[#888888] hover:text-[#cccccc]'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isAutoRunning ? 'bg-[#22c55e]' : 'bg-[#666666]'}`} />
          <span className="text-[11px]">Auto</span>
        </button>

        <button
          onClick={onReset}
          title="Reset Example to Original Code from PDF"
          className="p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw size={14} />
        </button>

        <button
          onClick={onSave}
          title="Save Draft (Ctrl+S)"
          className={`flex items-center gap-1 p-1.5 rounded hover:bg-[#333333] transition-colors cursor-pointer ${
            hasUnsavedChanges ? 'text-amber-400 font-medium' : 'text-[#888888]'
          }`}
        >
          <Save size={14} />
          {hasUnsavedChanges && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
        </button>
      </div>

      {/* Right: Viewport, Theme, Coverage, Settings, Export */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Device Viewport Selector (hidden on small phones) */}
        <div className="hidden lg:flex items-center bg-[#1e1e1e] rounded p-0.5 border border-[#3e3e42]">
          <button
            onClick={() => onChangeDevice('responsive')}
            title="Fluid 100% Viewport"
            className={`px-2 py-1 rounded text-[11px] cursor-pointer ${
              previewDevice === 'responsive' ? 'bg-[#37373d] text-white font-semibold' : 'text-[#888888] hover:text-white'
            }`}
          >
            Fluid
          </button>
          <button
            onClick={() => onChangeDevice('mobile')}
            title="Mobile (375px)"
            className={`p-1 rounded cursor-pointer ${
              previewDevice === 'mobile' ? 'bg-[#37373d] text-white' : 'text-[#888888] hover:text-white'
            }`}
          >
            <Smartphone size={13} />
          </button>
          <button
            onClick={() => onChangeDevice('tablet')}
            title="Tablet (768px)"
            className={`p-1 rounded cursor-pointer ${
              previewDevice === 'tablet' ? 'bg-[#37373d] text-white' : 'text-[#888888] hover:text-white'
            }`}
          >
            <Tablet size={13} />
          </button>
          <button
            onClick={() => onChangeDevice('laptop')}
            title="Laptop (1024px)"
            className={`p-1 rounded cursor-pointer ${
              previewDevice === 'laptop' ? 'bg-[#37373d] text-white' : 'text-[#888888] hover:text-white'
            }`}
          >
            <Laptop size={13} />
          </button>
        </div>

        {/* Toggle Explanation View */}
        <button
          onClick={onToggleExplanation}
          title={showExplanation ? 'Hide Lesson Guide' : 'Show Lesson Guide & Table Data'}
          className={`flex items-center gap-1 px-2 py-1.5 rounded transition-colors cursor-pointer ${
            showExplanation ? 'bg-[#094771] text-white' : 'hover:bg-[#333333] text-[#cccccc]'
          }`}
        >
          <BookOpen size={14} />
          <span className="hidden xl:inline text-[11px]">Lesson</span>
        </button>

        {/* 44-Page PDF Coverage Report Modal trigger */}
        <button
          onClick={onOpenCoverage}
          title="View 44-Page PDF Coverage Audit & Verification Status"
          className="flex items-center gap-1 px-2 py-1.5 rounded bg-[#134e4a] hover:bg-[#115e59] text-[#2dd4bf] font-medium transition-colors cursor-pointer"
        >
          <CheckCircle2 size={13} />
          <span className="hidden sm:inline text-[11px]">44/44 Pages Audit</span>
        </button>

        {/* PWA Install Button */}
        {canInstallPwa && (
          <button
            onClick={onInstallPwa}
            title="Install WebLab Explorer as Desktop or Mobile PWA App"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors cursor-pointer animate-pulse"
          >
            <Download size={13} />
            <span className="text-[11px]">Install App</span>
          </button>
        )}

        {/* Export ZIP */}
        <button
          onClick={onExportZip}
          title="Download Project ZIP (index.html, style.css, script.js, README)"
          className="flex items-center gap-1 p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white transition-colors cursor-pointer"
        >
          <Download size={14} />
          <span className="hidden 2xl:inline text-[11px]">Export</span>
        </button>

        {/* Fullscreen */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Preview'}
          className="p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white transition-colors cursor-pointer hidden md:block"
        >
          <Maximize2 size={14} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          title={`Switch Theme (Current: ${settings.theme === 'vs-dark' ? 'Dark' : 'Light'})`}
          className="p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white transition-colors cursor-pointer"
        >
          {settings.theme === 'vs-dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {/* Keyboard Shortcuts */}
        <button
          onClick={onOpenShortcuts}
          title="Keyboard Shortcuts & Help"
          className="p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white transition-colors cursor-pointer"
        >
          <HelpCircle size={14} />
        </button>

        {/* Settings */}
        <button
          onClick={onOpenSettings}
          title="Editor Settings"
          className="p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white transition-colors cursor-pointer"
        >
          <Settings size={14} />
        </button>
      </div>
    </header>
  );
};
