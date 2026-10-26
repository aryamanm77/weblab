import React, { useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  FileText,
  RotateCcw,
  Sparkles,
  Table as TableIcon,
  Tag,
  StickyNote
} from 'lucide-react';
import { CatalogExample, ReferenceTableData } from '../types';

interface ExampleDetailsProps {
  example: CatalogExample;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: () => void;
  onToggleBookmark: () => void;
  onResetToOriginal: () => void;
  onInjectSnippet?: (snippet: string) => void;
  userNote: string;
  onSaveNote: (note: string) => void;
}

export const ExampleDetails: React.FC<ExampleDetailsProps> = ({
  example,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onResetToOriginal,
  onInjectSnippet,
  userNote,
  onSaveNote
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'original' | 'table' | 'notes'>('guide');
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [currentNote, setCurrentNote] = useState(userNote);

  const handleCopyOriginal = () => {
    navigator.clipboard.writeText(example.originalCode);
    setCopiedOriginal(true);
    setTimeout(() => setCopiedOriginal(false), 2000);
  };

  const handleNoteBlur = () => {
    onSaveNote(currentNote);
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] border-l border-[#3e3e42] select-none text-xs text-[#cccccc] overflow-hidden">
      {/* Top Header */}
      <div className="p-3 bg-[#252526] border-b border-[#333333] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={15} className="text-blue-400" />
          <span className="font-semibold text-white">Lesson Guide &amp; Source Reference</span>
        </div>

        {/* Prev / Next Example Nav Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            title="Previous Example (Alt+P)"
            className="p-1 rounded hover:bg-[#333333] disabled:opacity-30 disabled:hover:bg-transparent text-[#cccccc] cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            title="Next Example (Alt+N)"
            className="p-1 rounded hover:bg-[#333333] disabled:opacity-30 disabled:hover:bg-transparent text-[#cccccc] cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Breadcrumb & Metadata Banner */}
      <div className="px-3 py-2 bg-[#1b2533] border-b border-[#2b3a4e] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] text-blue-300 font-semibold">
            <span>{example.chapterTitle}</span>
            <span>&bull;</span>
            <span>Section {example.section}</span>
          </div>
          <h3 className="text-white font-bold text-sm mt-0.5">{example.title}</h3>
        </div>

        <div className="text-right shrink-0 ml-2">
          <span className="inline-block bg-[#0e639c] text-white px-2 py-0.5 rounded text-[11px] font-bold">
            PDF Page {example.sourcePage}
          </span>
          <div className="text-[10px] text-sky-200 mt-0.5">{example.sourceListingOrFigure}</div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center border-b border-[#333333] bg-[#252526] px-2">
        <button
          onClick={() => setActiveTab('guide')}
          className={`px-3 py-2 text-xs font-medium border-b-2 cursor-pointer transition-colors ${
            activeTab === 'guide'
              ? 'border-[#007acc] text-white'
              : 'border-transparent text-[#888888] hover:text-[#cccccc]'
          }`}
        >
          Explanation
        </button>
        <button
          onClick={() => setActiveTab('original')}
          className={`px-3 py-2 text-xs font-medium border-b-2 cursor-pointer transition-colors ${
            activeTab === 'original'
              ? 'border-[#007acc] text-white'
              : 'border-transparent text-[#888888] hover:text-[#cccccc]'
          }`}
        >
          Original PDF Code
        </button>
        {example.referenceTable && (
          <button
            onClick={() => setActiveTab('table')}
            className={`px-3 py-2 text-xs font-medium border-b-2 cursor-pointer transition-colors flex items-center gap-1 ${
              activeTab === 'table'
                ? 'border-[#007acc] text-white'
                : 'border-transparent text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            <TableIcon size={12} className="text-purple-400" />
            <span>Table Reference</span>
          </button>
        )}
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-3 py-2 text-xs font-medium border-b-2 cursor-pointer transition-colors flex items-center gap-1 ${
            activeTab === 'notes'
              ? 'border-[#007acc] text-white'
              : 'border-transparent text-[#888888] hover:text-[#cccccc]'
          }`}
        >
          <StickyNote size={12} />
          <span>My Notes</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 select-text">
        {activeTab === 'guide' && (
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-semibold mb-1 text-xs uppercase tracking-wider text-[#999999]">
                Core Concept
              </h4>
              <p className="text-[#dddddd] leading-relaxed text-xs">
                {example.explanation}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-1 text-xs uppercase tracking-wider text-[#999999]">
                Expected Behavior in Browser
              </h4>
              <div className="bg-[#252526] p-2.5 rounded border border-[#333333] text-xs text-emerald-300 font-mono">
                {example.expectedBehavior}
              </div>
            </div>

            {example.adaptationNotes && (
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs uppercase tracking-wider text-[#999999]">
                  Runnable Adaptation Notes
                </h4>
                <p className="text-[#aaaaaa] text-xs leading-relaxed">
                  {example.adaptationNotes}
                </p>
              </div>
            )}

            {/* Tags */}
            <div>
              <h4 className="text-white font-semibold mb-1 text-xs uppercase tracking-wider text-[#999999]">
                Index Tags
              </h4>
              <div className="flex flex-wrap gap-1">
                {example.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#2d2d2d] text-blue-300 border border-[#3e3e42] px-2 py-0.5 rounded text-[11px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'original' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#888888]">
                Transcribed directly from {example.sourceListingOrFigure} (Page {example.sourcePage})
              </span>
              <button
                onClick={handleCopyOriginal}
                className="flex items-center gap-1 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-[#cccccc] px-2 py-1 rounded text-[11px] cursor-pointer"
              >
                {copiedOriginal ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                <span>{copiedOriginal ? 'Copied' : 'Copy Source'}</span>
              </button>
            </div>

            <pre className="bg-[#141414] border border-[#333333] rounded p-3 text-xs font-mono text-[#4ade80] overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {example.originalCode}
            </pre>

            <button
              onClick={onResetToOriginal}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded text-amber-300 font-medium text-xs cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Reset Editor Files to This Original Source</span>
            </button>
          </div>
        )}

        {activeTab === 'table' && example.referenceTable && (
          <div className="space-y-3">
            <div className="bg-[#252526] p-2 rounded border border-[#3e3e42]">
              <h4 className="font-semibold text-white text-xs">
                {example.referenceTable.tableNumber}: {example.referenceTable.title} (Page {example.referenceTable.pageNumber})
              </h4>
            </div>

            <div className="space-y-2">
              {example.referenceTable.items.map((item, idx) => (
                <div key={idx} className="bg-[#252526] border border-[#333333] rounded p-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-amber-300 font-mono text-xs">{item.name}</span>
                    {item.type && (
                      <span className="bg-[#1e1e1e] text-[#aaaaaa] px-1.5 py-0.2 rounded text-[10px]">
                        {item.type}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-[#cccccc] mb-1.5 leading-snug">
                    {item.description}
                  </p>

                  <pre className="bg-[#181818] p-1.5 rounded font-mono text-[10px] text-sky-300 overflow-x-auto whitespace-pre-wrap">
                    {item.exampleSnippet}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="space-y-2">
            <label className="text-[11px] text-[#aaaaaa] font-medium block">
              Personal Study Notes for This Example:
            </label>
            <textarea
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              onBlur={handleNoteBlur}
              placeholder="Type your notes or experiment findings here (automatically saved)..."
              className="w-full h-40 bg-[#141414] border border-[#3e3e42] rounded p-2 text-xs text-[#dddddd] focus:outline-none focus:border-[#0e639c] resize-none"
            />
            <p className="text-[10px] text-[#666666]">
              Notes are saved locally in your browser storage.
            </p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-3 bg-[#252526] border-t border-[#333333] flex items-center justify-between">
        <button
          onClick={onToggleBookmark}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded border text-xs cursor-pointer transition-colors ${
            isBookmarked
              ? 'bg-[#3b2a1a] border-amber-500 text-amber-300'
              : 'bg-[#2d2d2d] border-[#444444] text-[#aaaaaa] hover:text-white'
          }`}
        >
          <Bookmark size={13} className={isBookmarked ? 'fill-amber-400' : ''} />
          <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>

        <button
          onClick={onToggleComplete}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
            isCompleted
              ? 'bg-emerald-600 text-white'
              : 'bg-[#0e639c] hover:bg-[#1177bb] text-white'
          }`}
        >
          <CheckCircle2 size={14} className={isCompleted ? 'fill-white/20' : ''} />
          <span>{isCompleted ? 'Completed ✓' : 'Mark Completed'}</span>
        </button>
      </div>
    </div>
  );
};
