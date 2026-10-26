export type ActiveFile = 'index.html' | 'style.css' | 'script.js';

export interface LabFiles {
  'index.html': string;
  'style.css': string;
  'script.js': string;
}

export interface TableItem {
  name: string;
  syntax?: string;
  description: string;
  exampleSnippet?: string;
  category?: string;
  type?: string;
}

export interface ReferenceTableData {
  tableNumber: string;
  title: string;
  pageNumber: number;
  columns: string[];
  items: TableItem[];
}

export interface CatalogExample {
  id: string;
  title: string;
  chapter: 1 | 2;
  chapterTitle: string;
  section: string;
  sectionTitle: string;
  topic: string;
  sourcePage: number;
  sourceListingOrFigure: string;
  originalCode: string;
  html: string;
  css: string;
  javascript: string;
  expectedBehavior: string;
  explanation: string;
  tags: string[];
  verificationStatus: 'verified' | 'unresolved';
  supplementaryExample: boolean;
  referenceTable?: ReferenceTableData;
  adaptationNotes?: string;
}

export interface ConsoleMessage {
  id: string;
  type: 'log' | 'info' | 'warn' | 'error';
  text: string;
  timestamp: string;
}

export type PreviewDevice = 'responsive' | 'mobile' | 'tablet' | 'laptop' | 'desktop';

export interface EditorSettings {
  fontSize: number;
  wordWrap: 'on' | 'off';
  lineNumbers: 'on' | 'off';
  autoRun: boolean;
  autoRunDelay: number;
  theme: 'vs-dark' | 'vs-light';
  layout: 'split' | 'tabs' | 'preview-only' | 'editor-only';
}

export interface UserProgress {
  completedIds: string[];
  bookmarkedIds: string[];
  notes: Record<string, string>;
  customDrafts: Record<string, LabFiles>;
  activeExampleId: string;
}
