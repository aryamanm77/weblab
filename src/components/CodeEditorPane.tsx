import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import {
  FileCode,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  Code2
} from 'lucide-react';
import { ActiveFile, EditorSettings, LabFiles } from '../types';

interface CodeEditorPaneProps {
  activeFile: ActiveFile;
  onSelectFile: (file: ActiveFile) => void;
  files: LabFiles;
  onChangeFileContent: (file: ActiveFile, content: string) => void;
  settings: EditorSettings;
  onRun: () => void;
  onSave: () => void;
}

export const CodeEditorPane: React.FC<CodeEditorPaneProps> = ({
  activeFile,
  onSelectFile,
  files,
  onChangeFileContent,
  settings,
  onRun,
  onSave
}) => {
  const [copied, setCopied] = useState(false);

  const fileTabs: { name: ActiveFile; ext: string; color: string; lang: string }[] = [
    { name: 'index.html', ext: 'HTML', color: 'text-amber-500', lang: 'html' },
    { name: 'style.css', ext: 'CSS', color: 'text-sky-400', lang: 'css' },
    { name: 'script.js', ext: 'JS', color: 'text-yellow-400', lang: 'javascript' }
  ];

  const currentTab = fileTabs.find((t) => t.name === activeFile) || fileTabs[0];
  const currentContent = files[activeFile] || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lineCount = currentContent.split('\n').length;
  const charCount = currentContent.length;

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] border-r border-[#3e3e42] overflow-hidden">
      {/* File Tabs Header */}
      <div className="flex items-center justify-between bg-[#252526] border-b border-[#333333] h-9 px-1 select-none">
        <div className="flex items-center space-x-0.5 overflow-x-auto no-scrollbar">
          {fileTabs.map((tab) => {
            const isActive = activeFile === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => onSelectFile(tab.name)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium border-t-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#1e1e1e] text-white border-[#0e639c]'
                    : 'bg-[#2d2d2d] text-[#888888] hover:text-[#cccccc] border-transparent'
                }`}
              >
                <FileCode size={13} className={tab.color} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Editor Actions Toolbar */}
        <div className="flex items-center gap-1 pr-2">
          <button
            onClick={handleCopy}
            title="Copy Current File Code"
            className="flex items-center gap-1 px-2 py-1 rounded bg-[#333333] hover:bg-[#444444] text-[#cccccc] text-[11px] cursor-pointer"
          >
            {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 relative overflow-hidden">
        <Editor
          height="100%"
          language={currentTab.lang}
          value={currentContent}
          theme={settings.theme}
          onChange={(value) => onChangeFileContent(activeFile, value || '')}
          options={{
            fontSize: settings.fontSize,
            lineNumbers: settings.lineNumbers,
            wordWrap: settings.wordWrap,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            fontFamily: "Consolas, 'Courier New', monospace",
            renderWhitespace: 'selection',
            smoothScrolling: true,
            cursorBlinking: 'smooth'
          }}
          loading={
            <div className="h-full flex items-center justify-center text-[#888888] text-xs">
              Loading Monaco Editor...
            </div>
          }
        />
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] select-none">
        <div className="flex items-center gap-4">
          <span className="font-semibold">{currentTab.name}</span>
          <span>{lineCount} lines, {charCount} chars</span>
          <span className="hidden sm:inline">UTF-8</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sky-200">Spaces: 2</span>
          <span className="capitalize">{currentTab.lang}</span>
        </div>
      </div>
    </div>
  );
};
