import JSZip from 'jszip';
import { CatalogExample, LabFiles } from '../types';

export function downloadIndividualFile(filename: string, content: string, mimeType: string = 'text/plain') {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function exportProjectAsZip(files: LabFiles, example?: CatalogExample): Promise<void> {
  const zip = new JSZip();

  // Root project files
  zip.file('index.html', files['index.html']);
  zip.file('style.css', files['style.css']);
  zip.file('script.js', files['script.js']);

  // Informative README
  const readmeContent = `# WebLab Explorer Export

Generated from **WebLab Explorer** — Interactive Web Technology Learning IDE
Source: *WEB Mod1AzDOCUMENTS.in.pdf* (Web Technology Module 1)

${example ? `## Active Example: ${example.title}
- **Chapter:** ${example.chapterTitle}
- **Section:** ${example.section} ${example.sectionTitle}
- **Original PDF Page:** Page ${example.sourcePage}
- **Source Reference:** ${example.sourceListingOrFigure}

### Explanation
${example.explanation}
` : ''}

## How to Run Locally
1. Double-click \`index.html\` to open it in any modern browser (Chrome, Firefox, Safari, Edge).
2. Or use any local development server (e.g., Live Server in VS Code or \`npx serve\`).
`;

  zip.file('README.md', readmeContent);

  const content = await zip.generateAsync({ type: 'blob' });
  const zipName = example ? `weblab-${example.id}.zip` : 'weblab-project.zip';

  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = zipName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
