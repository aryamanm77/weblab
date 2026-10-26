import { CatalogExample } from '../types';
import { CHAPTER_1_EXAMPLES } from './chapter1';
import { CHAPTER_2_EXAMPLES } from './chapter2';
import { ALL_REFERENCE_TABLES } from './referenceTables';

export const ALL_CATALOG_EXAMPLES: CatalogExample[] = [
  ...CHAPTER_1_EXAMPLES,
  ...CHAPTER_2_EXAMPLES
];

export const CATALOG_STATS = {
  totalPagesAudited: 44,
  totalPagesInPDF: 44,
  totalExamples: ALL_CATALOG_EXAMPLES.length,
  chapter1Count: CHAPTER_1_EXAMPLES.length,
  chapter2Count: CHAPTER_2_EXAMPLES.length,
  totalTables: ALL_REFERENCE_TABLES.length,
  verifiedCount: ALL_CATALOG_EXAMPLES.filter(e => e.verificationStatus === 'verified').length,
  unresolvedCount: ALL_CATALOG_EXAMPLES.filter(e => e.verificationStatus === 'unresolved').length,
  supplementaryCount: ALL_CATALOG_EXAMPLES.filter(e => e.supplementaryExample).length
};

export function getExampleById(id: string): CatalogExample | undefined {
  return ALL_CATALOG_EXAMPLES.find(ex => ex.id === id);
}

export function getAdjacentExamples(currentId: string): { prev: CatalogExample | null; next: CatalogExample | null } {
  const index = ALL_CATALOG_EXAMPLES.findIndex(ex => ex.id === currentId);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? ALL_CATALOG_EXAMPLES[index - 1] : null,
    next: index < ALL_CATALOG_EXAMPLES.length - 1 ? ALL_CATALOG_EXAMPLES[index + 1] : null
  };
}

export interface SearchFilters {
  chapter?: number;
  hasTable?: boolean;
  tag?: string;
  query?: string;
  completedOnly?: boolean;
  bookmarkedOnly?: boolean;
  isMistake?: boolean;
}

export function filterCatalog(
  examples: CatalogExample[],
  filters: SearchFilters,
  completedIds: string[] = [],
  bookmarkedIds: string[] = []
): CatalogExample[] {
  return examples.filter(ex => {
    if (filters.chapter && ex.chapter !== filters.chapter) {
      return false;
    }
    if (filters.hasTable !== undefined) {
      const has = !!ex.referenceTable;
      if (filters.hasTable !== has) return false;
    }
    if (filters.isMistake) {
      const isMis = ex.tags.some(t => t.includes('mistake') || t.includes('bug') || t.includes('pitfall'));
      if (!isMis) return false;
    }
    if (filters.tag && !ex.tags.includes(filters.tag.toLowerCase())) {
      return false;
    }
    if (filters.completedOnly && !completedIds.includes(ex.id)) {
      return false;
    }
    if (filters.bookmarkedOnly && !bookmarkedIds.includes(ex.id)) {
      return false;
    }
    if (filters.query && filters.query.trim() !== '') {
      const q = filters.query.toLowerCase().trim();
      const matchTitle = ex.title.toLowerCase().includes(q);
      const matchSection = ex.sectionTitle.toLowerCase().includes(q) || ex.section.includes(q);
      const matchTopic = ex.topic.toLowerCase().includes(q);
      const matchListing = ex.sourceListingOrFigure.toLowerCase().includes(q);
      const matchCode = ex.originalCode.toLowerCase().includes(q);
      const matchTags = ex.tags.some(t => t.toLowerCase().includes(q));
      const matchPage = `page ${ex.sourcePage}`.includes(q) || `p. ${ex.sourcePage}`.includes(q) || `${ex.sourcePage}` === q;

      if (!matchTitle && !matchSection && !matchTopic && !matchListing && !matchCode && !matchTags && !matchPage) {
        return false;
      }
    }
    return true;
  });
}
