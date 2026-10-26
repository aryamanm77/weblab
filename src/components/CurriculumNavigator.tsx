import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Bookmark,
  CheckCircle2,
  Table as TableIcon,
  Code2,
  FileCheck,
  Filter,
  Sparkles
} from 'lucide-react';
import { CatalogExample } from '../types';
import { ALL_CATALOG_EXAMPLES, filterCatalog } from '../data/catalog';

interface CurriculumNavigatorProps {
  currentExampleId: string;
  onSelectExample: (id: string) => void;
  completedIds: string[];
  bookmarkedIds: string[];
  onToggleComplete: (id: string) => void;
  onToggleBookmark: (id: string) => void;
}

export const CurriculumNavigator: React.FC<CurriculumNavigatorProps> = ({
  currentExampleId,
  onSelectExample,
  completedIds,
  bookmarkedIds,
  onToggleComplete,
  onToggleBookmark
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<number | undefined>(undefined);
  const [filterType, setFilterType] = useState<'all' | 'tables' | 'mistakes' | 'bookmarked' | 'completed'>('all');

  // Chapter collapse state
  const [openChapters, setOpenChapters] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true
  });

  const toggleChapter = (chapterNum: number) => {
    setOpenChapters((prev) => ({ ...prev, [chapterNum]: !prev[chapterNum] }));
  };

  const filteredExamples = useMemo(() => {
    return filterCatalog(
      ALL_CATALOG_EXAMPLES,
      {
        query: searchQuery,
        chapter: selectedChapter,
        hasTable: filterType === 'tables' ? true : undefined,
        isMistake: filterType === 'mistakes' ? true : undefined,
        bookmarkedOnly: filterType === 'bookmarked',
        completedOnly: filterType === 'completed'
      },
      completedIds,
      bookmarkedIds
    );
  }, [searchQuery, selectedChapter, filterType, completedIds, bookmarkedIds]);

  // Group filtered examples by chapter & section
  const chapter1List = useMemo(() => filteredExamples.filter((e) => e.chapter === 1), [filteredExamples]);
  const chapter2List = useMemo(() => filteredExamples.filter((e) => e.chapter === 2), [filteredExamples]);

  const completionPct = Math.round((completedIds.length / ALL_CATALOG_EXAMPLES.length) * 100);

  return (
    <div className="flex flex-col h-full text-xs select-none bg-[#252526]">
      {/* Search Header */}
      <div className="p-2 border-b border-[#333333] space-y-2">
        <div className="relative">
          <Search size={13} className="absolute left-2.5 top-2.5 text-[#888888]" />
          <input
            type="text"
            placeholder="Search topics, code, pages (e.g. p. 14, overflow)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1e1e1e] border border-[#3e3e42] rounded pl-8 pr-2 py-1.5 text-xs text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#0e639c]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] no-scrollbar">
          <button
            onClick={() => { setSelectedChapter(undefined); setFilterType('all'); }}
            className={`px-2 py-0.5 rounded cursor-pointer shrink-0 transition-colors ${
              !selectedChapter && filterType === 'all'
                ? 'bg-[#0e639c] text-white font-medium'
                : 'bg-[#333333] text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            All ({ALL_CATALOG_EXAMPLES.length})
          </button>
          <button
            onClick={() => { setSelectedChapter(1); setFilterType('all'); }}
            className={`px-2 py-0.5 rounded cursor-pointer shrink-0 transition-colors ${
              selectedChapter === 1 && filterType === 'all'
                ? 'bg-[#0e639c] text-white font-medium'
                : 'bg-[#333333] text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            Ch 1 (HTML)
          </button>
          <button
            onClick={() => { setSelectedChapter(2); setFilterType('all'); }}
            className={`px-2 py-0.5 rounded cursor-pointer shrink-0 transition-colors ${
              selectedChapter === 2 && filterType === 'all'
                ? 'bg-[#0e639c] text-white font-medium'
                : 'bg-[#333333] text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            Ch 2 (CSS)
          </button>
          <button
            onClick={() => { setFilterType('tables'); setSelectedChapter(undefined); }}
            className={`px-2 py-0.5 rounded cursor-pointer shrink-0 flex items-center gap-1 transition-colors ${
              filterType === 'tables'
                ? 'bg-[#0e639c] text-white font-medium'
                : 'bg-[#333333] text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            <TableIcon size={11} />
            <span>Tables</span>
          </button>
          <button
            onClick={() => { setFilterType('mistakes'); setSelectedChapter(undefined); }}
            className={`px-2 py-0.5 rounded cursor-pointer shrink-0 flex items-center gap-1 transition-colors ${
              filterType === 'mistakes'
                ? 'bg-amber-600 text-white font-medium'
                : 'bg-[#333333] text-[#888888] hover:text-amber-300'
            }`}
          >
            <span>⚠️</span>
            <span>Mistakes &amp; Fixes</span>
          </button>
          <button
            onClick={() => { setFilterType('bookmarked'); setSelectedChapter(undefined); }}
            className={`px-2 py-0.5 rounded cursor-pointer shrink-0 flex items-center gap-1 transition-colors ${
              filterType === 'bookmarked'
                ? 'bg-[#0e639c] text-white font-medium'
                : 'bg-[#333333] text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            <Bookmark size={11} />
            <span>Saved ({bookmarkedIds.length})</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#1e1e1e] p-2 rounded border border-[#333333]">
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-[#aaaaaa] font-medium">Curriculum Progress</span>
            <span className="text-emerald-400 font-semibold">{completionPct}% ({completedIds.length}/{ALL_CATALOG_EXAMPLES.length})</span>
          </div>
          <div className="w-full bg-[#333333] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${completionPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Curriculum Tree List */}
      <div className="flex-1 overflow-y-auto p-1 space-y-2">
        {/* CHAPTER 1 */}
        {chapter1List.length > 0 && (
          <div>
            <div
              onClick={() => toggleChapter(1)}
              className="flex items-center justify-between px-2 py-1.5 rounded cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] font-semibold sticky top-0 bg-[#252526] z-10"
            >
              <div className="flex items-center gap-1.5 truncate">
                {openChapters[1] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                <span className="text-amber-400">Chapter 1:</span>
                <span className="truncate">Introduction to HTML</span>
              </div>
              <span className="text-[10px] text-[#888888] bg-[#333333] px-1.5 py-0.5 rounded">
                {chapter1List.length} items
              </span>
            </div>

            {openChapters[1] && (
              <div className="pl-3 mt-1 space-y-1">
                {chapter1List.map((ex) => renderExampleItem(ex))}
              </div>
            )}
          </div>
        )}

        {/* CHAPTER 2 */}
        {chapter2List.length > 0 && (
          <div>
            <div
              onClick={() => toggleChapter(2)}
              className="flex items-center justify-between px-2 py-1.5 rounded cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] font-semibold sticky top-0 bg-[#252526] z-10"
            >
              <div className="flex items-center gap-1.5 truncate">
                {openChapters[2] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                <span className="text-sky-400">Chapter 2:</span>
                <span className="truncate">Introduction to CSS</span>
              </div>
              <span className="text-[10px] text-[#888888] bg-[#333333] px-1.5 py-0.5 rounded">
                {chapter2List.length} items
              </span>
            </div>

            {openChapters[2] && (
              <div className="pl-3 mt-1 space-y-1">
                {chapter2List.map((ex) => renderExampleItem(ex))}
              </div>
            )}
          </div>
        )}

        {filteredExamples.length === 0 && (
          <div className="p-4 text-center text-[#888888]">
            <p>No matching examples found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </div>
  );

  function renderExampleItem(ex: CatalogExample) {
    const isSelected = currentExampleId === ex.id;
    const isCompleted = completedIds.includes(ex.id);
    const isBookmarked = bookmarkedIds.includes(ex.id);

    return (
      <div
        key={ex.id}
        onClick={() => onSelectExample(ex.id)}
        className={`group flex items-start justify-between p-2 rounded cursor-pointer transition-colors ${
          isSelected
            ? 'bg-[#094771] text-white font-medium border-l-2 border-white'
            : 'hover:bg-[#2a2d2e] text-[#cccccc]'
        }`}
      >
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1.5 text-[11px] mb-0.5">
            <span className="font-semibold text-blue-300">
              {ex.sourceListingOrFigure}
            </span>
            <span className="bg-[#333333] text-[#aaaaaa] px-1.5 py-0.2 rounded text-[10px]">
              p. {ex.sourcePage}
            </span>
            {ex.referenceTable && (
              <span className="bg-purple-900/50 text-purple-300 px-1 rounded text-[9px] font-bold">
                TABLE
              </span>
            )}
          </div>

          <div className="truncate text-xs font-normal group-hover:text-white">
            {ex.title}
          </div>

          <div className="text-[10px] text-[#888888] truncate mt-0.5">
            {ex.section} {ex.sectionTitle}
          </div>
        </div>

        {/* Quick Checkbox & Bookmark Actions */}
        <div className="flex items-center gap-1 pt-0.5 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(ex.id);
            }}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this Example'}
            className={`p-1 rounded hover:bg-[#444444] transition-colors ${
              isBookmarked ? 'text-amber-400' : 'text-[#666666] opacity-0 group-hover:opacity-100'
            }`}
          >
            <Bookmark size={12} className={isBookmarked ? 'fill-amber-400' : ''} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete(ex.id);
            }}
            title={isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
            className={`p-1 rounded hover:bg-[#444444] transition-colors ${
              isCompleted ? 'text-emerald-400' : 'text-[#666666] hover:text-[#aaaaaa]'
            }`}
          >
            <CheckCircle2 size={13} className={isCompleted ? 'fill-emerald-400/20' : ''} />
          </button>
        </div>
      </div>
    );
  }
};
