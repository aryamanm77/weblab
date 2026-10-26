import React, { useState } from 'react';
import {
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  ChevronDown,
  ChevronRight,
  Download,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { ActiveFile, LabFiles } from '../types';

interface FileExplorerProps {
  activeFile: ActiveFile;
  onSelectFile: (file: ActiveFile) => void;
  files: LabFiles;
  onDownloadFile: (fileName: ActiveFile) => void;
  onResetFile: (fileName: ActiveFile) => void;
  hasFileModifications?: {
    'index.html': boolean;
    'style.css': boolean;
    'script.js': boolean;
  };
}

export const FileExplorer: React.FC<FileExplorerProps> = ({
  activeFile,
  onSelectFile,
  files,
  onDownloadFile,
  onResetFile,
  hasFileModifications = { 'index.html': false, 'style.css': false, 'script.js': false }
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const fileList: { name: ActiveFile; iconColor: string; ext: string; label: string }[] = [
    { name: 'index.html', iconColor: 'text-amber-500', ext: 'HTML', label: 'HTML Structure' },
    { name: 'style.css', iconColor: 'text-sky-400', ext: 'CSS', label: 'Cascading Styles' },
    { name: 'script.js', iconColor: 'text-yellow-400', ext: 'JS', label: 'JavaScript Script' }
  ];

  return (
    <div className="flex flex-col select-none text-xs">
      <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#969696] flex items-center justify-between border-b border-[#333333]">
        <span>Project Files</span>
        <span className="text-[10px] text-[#666666]">3 files</span>
      </div>

      <div className="p-1">
        {/* Main Workspace Directory Header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] font-medium"
        >
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          {isOpen ? (
            <FolderOpen size={14} className="text-amber-400" />
          ) : (
            <Folder size={14} className="text-amber-400" />
          )}
          <span className="tracking-tight text-white font-semibold">web-technology-lab</span>
        </div>

        {/* Tree Files */}
        {isOpen && (
          <div className="pl-4 mt-0.5 space-y-0.5">
            {fileList.map((item) => {
              const isSelected = activeFile === item.name;
              const hasMod = hasFileModifications[item.name];

              return (
                <div
                  key={item.name}
                  onClick={() => onSelectFile(item.name)}
                  className={`group flex items-center justify-between px-2.5 py-1.5 rounded cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-[#37373d] text-white font-medium border-l-2 border-[#007acc]'
                      : 'hover:bg-[#2a2d2e] text-[#cccccc]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileCode size={14} className={item.iconColor} />
                    <span className="truncate">{item.name}</span>
                    {hasMod && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Modified for this example" />
                    )}
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDownloadFile(item.name);
                      }}
                      title={`Download ${item.name}`}
                      className="p-1 hover:bg-[#444444] rounded text-[#aaaaaa] hover:text-white"
                    >
                      <Download size={11} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onResetFile(item.name);
                      }}
                      title={`Reset ${item.name}`}
                      className="p-1 hover:bg-[#444444] rounded text-[#aaaaaa] hover:text-white"
                    >
                      <RotateCcw size={11} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-4 px-3 py-2 bg-[#1e1e1e] border-t border-[#333333] text-[11px] text-[#888888]">
        <div className="flex items-center gap-1.5 mb-1 text-[#cccccc] font-medium">
          <Sparkles size={12} className="text-yellow-400" />
          <span>Live Synchronized Lab</span>
        </div>
        <p className="leading-relaxed">
          Edits across <code className="text-amber-300">index.html</code>, <code className="text-sky-300">style.css</code>, and <code className="text-yellow-300">script.js</code> combine instantly inside the isolated preview frame.
        </p>
      </div>
    </div>
  );
};
