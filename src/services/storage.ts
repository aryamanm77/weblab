import { EditorSettings, LabFiles, UserProgress } from '../types';

const STORAGE_KEY_PROGRESS = 'weblab_explorer_progress_v1';
const STORAGE_KEY_SETTINGS = 'weblab_explorer_settings_v1';

export const DEFAULT_SETTINGS: EditorSettings = {
  fontSize: 14,
  wordWrap: 'on',
  lineNumbers: 'on',
  autoRun: true,
  autoRunDelay: 600,
  theme: 'vs-dark',
  layout: 'split'
};

export const DEFAULT_PROGRESS: UserProgress = {
  completedIds: [],
  bookmarkedIds: [],
  notes: {},
  customDrafts: {},
  activeExampleId: 'ch1-fig1-7-sample-doc'
};

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch (err) {
    console.error('Failed to load progress from localStorage:', err);
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
}

export function loadSettings(): EditorSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (err) {
    console.error('Failed to load settings from localStorage:', err);
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: EditorSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save settings to localStorage:', err);
  }
}

export function getDraftForExample(exampleId: string, fallback: LabFiles): LabFiles {
  const progress = loadProgress();
  return progress.customDrafts[exampleId] || fallback;
}

export function saveDraftForExample(exampleId: string, files: LabFiles): void {
  const progress = loadProgress();
  progress.customDrafts[exampleId] = files;
  saveProgress(progress);
}

export function clearDraftForExample(exampleId: string): void {
  const progress = loadProgress();
  delete progress.customDrafts[exampleId];
  saveProgress(progress);
}
