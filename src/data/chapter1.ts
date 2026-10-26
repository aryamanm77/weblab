import { CatalogExample } from '../types';
import { TABLE_1_1, TABLE_1_2, TABLE_1_3 } from './referenceTables';

export const CHAPTER_1_EXAMPLES: CatalogExample[] = [
  {
    id: 'ch1-xml-sample',
    title: 'Simple XML Document Example',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.1',
    sectionTitle: 'What Is HTML and Where Did It Come From?',
    topic: 'XML Syntax and Data Representation',
    sourcePage: 2,
    sourceListingOrFigure: 'Page 2 Code Listing (XML Document)',
    originalCode: `<?xml version="1.0" encoding="ISO-8859-1"?>
<art>
  <painting id="290">
    <title>Balcony</title>
    <artist>
      <name>Manet</name>
      <nationality>France</nationality>
    </artist>
    <year>1868</year>
    <medium>Oil on canvas</medium>
  </painting>
</art>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>XML Data Example - Page 2</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <header class="header">
      <h2>XML Data Representation in Web Technology</h2>
      <p class="subtitle">Source: Page 2 - Simple XML Document & XHTML rules</p>
    </header>

    <div class="xml-viewer">
      <h3>Art Collection Record (Parsed from XML)</h3>
      <table class="data-table">
        <tr><th>Tag / Attribute</th><th>Value</th><th>XML Rule Verified</th></tr>
        <tr><td><code>&lt;painting id="290"&gt;</code></td><td>ID #290</td><td>Attribute values must be in quotes</td></tr>
        <tr><td><code>&lt;title&gt;</code></td><td>Balcony</td><td>Case-sensitive closing tag</td></tr>
        <tr><td><code>&lt;artist&gt; &gt; &lt;name&gt;</code></td><td>Édouard Manet</td><td>Strict parent-child nesting</td></tr>
        <tr><td><code>&lt;artist&gt; &gt; &lt;nationality&gt;</code></td><td>France</td><td>No overlapping tags allowed</td></tr>
        <tr><td><code>&lt;year&gt;</code></td><td>1868</td><td>Well-formed text node</td></tr>
        <tr><td><code>&lt;medium&gt;</code></td><td>Oil on canvas</td><td>Closed before parent &lt;/painting&gt;</td></tr>
      </table>
    </div>

    <div class="rules-box">
      <h4>Key XML / XHTML Rules (Page 2):</h4>
      <ul>
        <li>Single root element (<code>&lt;art&gt;</code>)</li>
        <li>Element & attribute names are case sensitive</li>
        <li>Attributes must always be within quotes</li>
        <li>All elements must have a closing tag or be self-closing</li>
      </ul>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  background-color: #f8fafc;
  color: #1e293b;
  margin: 0;
}
.card {
  max-width: 650px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}
.header h2 {
  margin: 0 0 4px;
  color: #0f172a;
}
.subtitle {
  color: #64748b;
  margin: 0 0 16px;
  font-size: 14px;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;
}
.data-table th, .data-table td {
  border: 1px solid #cbd5e1;
  padding: 10px 12px;
  text-align: left;
}
.data-table th {
  background-color: #f1f5f9;
  font-weight: 600;
}
.rules-box {
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 12px 16px;
  border-radius: 4px;
}
.rules-box h4 {
  margin: 0 0 8px;
  color: #1d4ed8;
}
.rules-box ul {
  margin: 0;
  padding-left: 20px;
  font-size: 13.5px;
  color: #1e40af;
}`,
    javascript: `// Safe execution demonstrating XML Parsing
console.log("Parsing XML document from Page 2...");
const xmlString = \`<?xml version="1.0" encoding="ISO-8859-1"?>
<art>
  <painting id="290">
    <title>Balcony</title>
    <artist>
      <name>Manet</name>
      <nationality>France</nationality>
    </artist>
    <year>1868</year>
    <medium>Oil on canvas</medium>
  </painting>
</art>\`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const title = xmlDoc.getElementsByTagName("title")[0]?.textContent;
const artist = xmlDoc.getElementsByTagName("name")[0]?.textContent;
console.log("Successfully parsed XML -> Title: " + title + " | Artist: " + artist);`,
    expectedBehavior: 'Renders the art record in a structured HTML table with verified XML syntax rules and demonstrates DOM XML parsing in the console.',
    explanation: 'Illustrates the simple XML document on Page 2 used to explain the heritage of XHTML and strict markup syntax rules.',
    tags: ['xml', 'xhtml', 'syntax', 'history'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-2-parts',
    title: 'The Parts of an HTML Element',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.2',
    sectionTitle: 'HTML Syntax',
    topic: 'Elements and Attributes',
    sourcePage: 4,
    sourceListingOrFigure: 'Figure 1.2: The parts of an HTML element',
    originalCode: `<a href="http://www.centralpark.com">Central Park</a>

Example empty element:
<img src="file.gif" />`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.2 - Parts of an HTML Element</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Figure 1.2: The Parts of an HTML Element</h1>
  
  <div class="diagram-box">
    <h3>Standard Element Anatomy:</h3>
    <p>Below is the link element from Figure 1.2:</p>
    <div class="interactive-preview">
      <a href="http://www.centralpark.com" target="_blank">Central Park</a>
    </div>

    <div class="breakdown">
      <div class="part"><span class="badge tag">&lt;a&gt;</span> Opening Tag</div>
      <div class="part"><span class="badge name">a</span> Element Name</div>
      <div class="part"><span class="badge attr">href="..."</span> Attribute (name=value)</div>
      <div class="part"><span class="badge content">Central Park</span> Content</div>
      <div class="part"><span class="badge close">&lt;/a&gt;</span> Closing Tag</div>
    </div>
  </div>

  <div class="diagram-box">
    <h3>Empty Element Anatomy:</h3>
    <p>Empty elements have no closing tag and cannot contain text content:</p>
    <div class="interactive-preview">
      <!-- Image demonstration using an inline SVG badge for file.gif -->
      <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='36' viewBox='0 0 120 36'><rect width='100%' height='100%' fill='%230284c7'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='12' font-weight='bold'>file.gif (image)</text></svg>" alt="file.gif demonstration" />
    </div>
    <p>Code: <code>&lt;img src="file.gif" /&gt;</code> (Trailing slash optional in HTML5, mandatory in XHTML)</p>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  background-color: #fafafa;
  color: #333;
}
.diagram-box {
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
}
.interactive-preview {
  padding: 16px;
  background: #f0fdf4;
  border: 1px dashed #22c55e;
  border-radius: 4px;
  margin: 12px 0;
  display: inline-block;
}
.interactive-preview a {
  color: #0369a1;
  font-size: 18px;
  font-weight: bold;
}
.breakdown {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}
.part {
  background: #f1f5f9;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 12px;
  font-weight: bold;
}
.badge.tag { background: #fee2e2; color: #991b1b; }
.badge.name { background: #e0e7ff; color: #3730a3; }
.badge.attr { background: #fef3c7; color: #92400e; }
.badge.content { background: #dcfce7; color: #166534; }
.badge.close { background: #f3e8ff; color: #6b21a8; }`,
    javascript: `console.log("Figure 1.2 loaded: Inspected standard vs empty HTML elements.");`,
    expectedBehavior: 'Displays the clickable "Central Park" anchor link and the empty <img> element with visual element breakdown.',
    explanation: 'Demonstrates the anatomy of HTML elements: tag name, start tag, attribute name/value, element content, end tag, and empty elements.',
    tags: ['elements', 'attributes', 'syntax', 'empty-elements'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-3-outline',
    title: 'HTML Document Outline & Hierarchy Tree',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.2',
    sectionTitle: 'HTML Syntax',
    topic: 'Nesting and Document Outline',
    sourcePage: 5,
    sourceListingOrFigure: 'Figure 1.3: HTML document outline',
    originalCode: `<body>
  <p>
    This is some <strong>text</strong>
  </p>
  <h1>Title goes here</h1>
  <div>
    <p>
      This is <span>important</span>
    </p>
  </div>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.3 - HTML Document Outline</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>This is some <strong>text</strong></p>
  <h1>Title goes here</h1>
  <div>
    <p>This is <span>important</span></p>
  </div>

  <section class="explanation-card">
    <h3>Document Hierarchy Analysis (Figure 1.3)</h3>
    <ul>
      <li><strong>Parent & Child:</strong> <code>&lt;body&gt;</code> is parent to <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;div&gt;</code>.</li>
      <li><strong>Siblings:</strong> The top <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;div&gt;</code> share the same parent and are siblings.</li>
      <li><strong>Descendants:</strong> <code>&lt;strong&gt;</code> is a descendant of <code>&lt;p&gt;</code> and <code>&lt;body&gt;</code>.</li>
      <li><strong>Ancestors:</strong> <code>&lt;body&gt;</code> is an ancestor to <code>&lt;span&gt;</code>.</li>
    </ul>
  </section>
</body>
</html>`,
    css: `body {
  font-family: Georgia, serif;
  padding: 24px;
  line-height: 1.6;
  color: #222;
}
h1 {
  color: #1e3a8a;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
}
strong {
  color: #b91c1c;
}
span {
  background-color: #fef08a;
  padding: 2px 4px;
  font-weight: bold;
}
.explanation-card {
  margin-top: 30px;
  padding: 16px 20px;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 14px;
}`,
    javascript: `// Traverse DOM tree and log relationships
console.log("DOM Tree Root:", document.body.tagName);
console.log("Children of Body:", Array.from(document.body.children).map(c => c.tagName));`,
    expectedBehavior: 'Renders the nested document hierarchy: paragraph with strong tag, h1 heading, and division with styled span.',
    explanation: 'Shows parent, child, sibling, descendant, and ancestor relationships in the DOM hierarchy as diagrammed in Figure 1.3.',
    tags: ['dom', 'hierarchy', 'nesting', 'parent-child'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-4-nesting',
    title: 'Proper Nesting of HTML Elements',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.2',
    sectionTitle: 'HTML Syntax',
    topic: 'Correct vs Incorrect Nesting',
    sourcePage: 5,
    sourceListingOrFigure: 'Figure 1.4: The proper nesting of HTML elements',
    originalCode: `<!-- Correct nesting -->
<h1>Share Your <strong>Travels</strong></h1>

<!-- Incorrect nesting -->
<h1>Share Your <strong>Travels</h1></strong>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.4 - Proper Nesting</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 1.4: Proper vs Incorrect Nesting</h2>

  <div class="example correct">
    <div class="status-badge check">✓ Correct Nesting</div>
    <h1>Share Your <strong>Travels</strong></h1>
    <p class="code-ref"><code>&lt;h1&gt;Share Your &lt;strong&gt;Travels&lt;/strong&gt;&lt;/h1&gt;</code></p>
    <p class="note">A child element's closing tag must occur BEFORE its parent's closing tag.</p>
  </div>

  <div class="example incorrect">
    <div class="status-badge cross">✗ Incorrect Nesting (Syntax Error)</div>
    <div class="broken-code">
      <code>&lt;h1&gt;Share Your &lt;strong&gt;Travels&lt;/h1&gt;&lt;/strong&gt;</code>
    </div>
    <p class="note">Overlapping tags violate XML/XHTML syntax and force HTML5 browsers into error-recovery mode.</p>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.example {
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
.example.correct {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
}
.example.incorrect {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
}
.status-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
}
.status-badge.check { background: #dcfce7; color: #15803d; }
.status-badge.cross { background: #fee2e2; color: #b91c1c; }
h1 { margin: 8px 0; font-size: 24px; }
h1 strong { color: #2563eb; }
.code-ref { font-size: 14px; margin: 8px 0; }
.note { font-size: 13px; color: #64748b; margin: 4px 0 0; }`,
    javascript: `console.log("Proper Nesting Demonstration: Clean hierarchy verified.");`,
    expectedBehavior: 'Displays side-by-side comparison of valid nested tags versus overlapping tag syntax error.',
    explanation: 'Demonstrates the Golden Rule of HTML Nesting: child elements must close before their parent element closes.',
    tags: ['syntax', 'nesting', 'xhtml', 'rules'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-5-simplest',
    title: 'One of the Simplest Possible HTML5 Documents',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.4',
    sectionTitle: 'Structure of HTML Documents',
    topic: 'Minimal HTML5 Document Structure',
    sourcePage: 7,
    sourceListingOrFigure: 'Figure 1.5: One of the simplest possible HTML5 documents',
    originalCode: `<!DOCTYPE html>
<title>A Very Small Document</title>
<p>This is a simple document with not much content</p>`,
    html: `<!DOCTYPE html>
<title>A Very Small Document</title>
<p>This is a simple document with not much content</p>`,
    css: `/* Minimal document default browser styles */
body {
  font-family: serif;
  margin: 16px;
  color: black;
}
p {
  font-size: 16px;
  line-height: 1.5;
}`,
    javascript: `console.log("Document Title:", document.title);
console.log("Number of child elements in DOM:", document.body ? document.body.children.length : 1);`,
    expectedBehavior: 'Renders the exact 3-line document from Figure 1.5 showing how HTML5 allows omitting <html>, <head>, and <body>.',
    explanation: 'In HTML5, unlike XHTML, <html>, <head>, and <body> are optional in the specification, though recommended in professional practice.',
    tags: ['html5', 'doctype', 'minimal', 'title'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-xhtml-vs-html5-doctype',
    title: 'DOCTYPE Comparison: XHTML vs HTML5',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.4',
    sectionTitle: 'Structure of HTML Documents',
    topic: 'Document Type Definitions (DTD)',
    sourcePage: 7,
    sourceListingOrFigure: 'Page 7 DOCTYPE comparison',
    originalCode: `<!-- XHTML 1.0 Transitional DOCTYPE -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- HTML5 DOCTYPE -->
<!DOCTYPE html>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DOCTYPE Comparison - Page 7</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Document Type Definition (DTD) Evolution</h2>

  <div class="doctype-card old">
    <h3>XHTML 1.0 Transitional DTD</h3>
    <pre><code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</code></pre>
    <p>Required a lengthy URI reference so XML parsers could validate tags against the DTD.</p>
  </div>

  <div class="doctype-card new">
    <h3>HTML5 Modern DOCTYPE</h3>
    <pre><code>&lt;!DOCTYPE html&gt;</code></pre>
    <p>Case-insensitive, short, and required primarily to trigger modern <em>standard mode</em> rendering in all browsers.</p>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.doctype-card {
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.doctype-card.old {
  background: #fffbeb;
  border: 1px solid #fde68a;
}
.doctype-card.new {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}
pre {
  background: #1e293b;
  color: #f8fafc;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
}`,
    javascript: `console.log("Current document.compatMode:", document.compatMode); // Should be "CSS1Compat" (Standards Mode)`,
    expectedBehavior: 'Displays direct comparison between verbose XHTML DOCTYPE and concise HTML5 DOCTYPE, confirming standards mode.',
    explanation: 'Examines Item 1 in Figure 1.6 and contrasts the complex XHTML 1.0 Transitional declaration with HTML5.',
    tags: ['doctype', 'standards-mode', 'xhtml', 'html5'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-6-structure',
    title: 'Structure Elements of an HTML5 Document',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.4',
    sectionTitle: 'Structure of HTML Documents',
    topic: 'Complete Standard HTML5 Skeleton',
    sourcePage: 7,
    sourceListingOrFigure: 'Figure 1.6: Structure elements of an HTML5 document',
    originalCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Share Your Travels -- New York - Central Park</title>
    <link rel="stylesheet" href="css/main.css" />
    <script src="js/html5shiv.js"></script>
  </head>
  <body>
    <h1>Main heading goes here</h1>
    ...
  </body>
</html>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Share Your Travels -- New York - Central Park</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Main heading goes here</h1>
  <p>This is the standard, complete structural skeleton for modern HTML5 documents.</p>
  
  <div class="anatomy-list">
    <div><strong>Item 1:</strong> <code>&lt;!DOCTYPE html&gt;</code> Document Type Declaration</div>
    <div><strong>Item 2:</strong> <code>&lt;html lang="en"&gt;</code> Root element with natural language attribute</div>
    <div><strong>Item 3:</strong> <code>&lt;head&gt;</code> &amp; <code>&lt;title&gt;</code> Document metadata &amp; window/tab title</div>
    <div><strong>Item 4:</strong> <code>&lt;body&gt;</code> Visible page content</div>
    <div><strong>Item 5:</strong> <code>&lt;meta charset="utf-8" /&gt;</code> Universal character encoding</div>
    <div><strong>Item 6:</strong> <code>&lt;link rel="stylesheet" ... /&gt;</code> External CSS reference</div>
    <div><strong>Item 7:</strong> <code>&lt;script src="..."&gt;</code> External JavaScript reference</div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  background-color: #f8fafc;
  color: #334155;
}
h1 {
  color: #0f172a;
  border-bottom: 2px solid #cbd5e1;
  padding-bottom: 8px;
}
.anatomy-list {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}`,
    javascript: `console.log("Document charset:", document.characterSet);
console.log("Document lang:", document.documentElement.lang);`,
    expectedBehavior: 'Renders full HTML5 document skeleton with numbered callouts corresponding to Figure 1.6.',
    explanation: 'Faithfully reproduces Figure 1.6 from Page 7-8 showing DOCTYPE, html root with lang, head, meta charset, title, external stylesheet link, script, and body.',
    tags: ['skeleton', 'structure', 'head', 'body', 'meta', 'charset'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-7-sample-doc',
    title: 'Sample HTML5 Document (Share Your Travels)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Comprehensive HTML5 Page with Photo, Reviews, and Copy',
    sourcePage: 9,
    sourceListingOrFigure: 'Figure 1.7: Sample HTML5 document & Figure 1.8 browser rendering',
    originalCode: `<body>
  <h1>Share Your Travels</h1>
  <h2>New York - Central Park</h2>
  <p>Photo by Randy Connolly</p>
  <p>This photo of Conservatory Pond in
     <a href="http://www.centralpark.com">Central Park</a>
     New York City was taken on October 22, 2015 with a
     <strong>Canon EOS 30D</strong> camera.
  </p>
  <img src="images/central-park.jpg" alt="Central Park" />
  <h3>Reviews</h3>
  <div>
    <p>By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
  </div>
  <div>
    <p>By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  <p><small>Copyright &copy; 2015 Share Your Travels</small></p>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.7 - Sample HTML5 Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Share Your Travels</h1>
  <h2>New York - Central Park</h2>
  <p>Photo by Randy Connolly</p>
  
  <p>This photo of Conservatory Pond in
     <a href="http://www.centralpark.com" target="_blank">Central Park</a>
     New York City was taken on October 22, 2015 with a
     <strong>Canon EOS 30D</strong> camera.
  </p>
  
  <!-- Central Park Conservatory Pond SVG Photo Representation -->
  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='260' viewBox='0 0 480 260'><defs><linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%237dd3fc'/><stop offset='100%25' stop-color='%23bae6fd'/></linearGradient><linearGradient id='water' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%230284c7'/><stop offset='100%25' stop-color='%230369a1'/></linearGradient></defs><rect width='480' height='160' fill='url(%23sky)'/><circle cx='380' cy='60' r='30' fill='%23fef08a'/><path d='M0 140 Q120 110 240 135 T480 130 L480 160 L0 160 Z' fill='%2315803d'/><path d='M20 160 L40 110 L60 160 Z M90 160 L120 95 L150 160 Z M320 160 L350 100 L380 160 Z' fill='%23166534'/><rect y='160' width='480' height='100' fill='url(%23water)'/><ellipse cx='240' cy='210' rx='180' ry='30' fill='%230ea5e9' opacity='0.4'/><text x='50%25' y='90%25' text-anchor='middle' fill='white' font-family='sans-serif' font-size='13' font-weight='600'>Central Park - Conservatory Pond (Fig 1.7)</text></svg>" alt="Central Park Conservatory Pond" />
  
  <h3>Reviews</h3>
  <div>
    <p>By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
  </div>
  <div>
    <p>By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  
  <p><small>Copyright &copy; 2015 Share Your Travels</small></p>
</body>
</html>`,
    css: `/* Authentic browser default styling recreating Figure 1.8 */
body {
  font-family: "Times New Roman", Times, serif;
  margin: 16px;
  color: black;
  line-height: 1.3;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
h2 {
  font-size: 1.5em;
  margin: 0.83em 0;
}
h3 {
  font-size: 1.17em;
  margin: 1em 0;
}
p {
  margin: 1em 0;
}
a {
  color: #0000ee;
  text-decoration: underline;
}
img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  display: block;
  margin: 12px 0;
}
div {
  margin-bottom: 12px;
}
small {
  font-size: 0.8em;
  color: #444;
}`,
    javascript: `console.log("Figure 1.7 / 1.8 loaded: Complete sample document rendered.");`,
    expectedBehavior: 'Faithfully reproduces the complete webpage and default browser layout illustrated in Figures 1.7 and 1.8.',
    explanation: 'Original core document demonstrating headings h1-h3, paragraphs, strong text, hyperlinks, inline images, division containers, time elements, and character entities (&copy;).',
    tags: ['sample-document', 'headings', 'images', 'reviews', 'time', 'copyright'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-paragraphs-divs-breaks',
    title: 'Paragraphs, Line Breaks (<br>), and Divisions (<div>)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Paragraphs and Divisions',
    sourcePage: 10,
    sourceListingOrFigure: 'Page 10 Paragraphs and Divisions text',
    originalCode: `<p>First paragraph of text.</p>
<p>Address with line breaks:<br />
123 Broadway St.<br />
New York, NY 10001</p>
<div>
  <p>Inside a logical division container &lt;div&gt;.</p>
</div>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Paragraphs, Line Breaks and Divs - Page 10</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Text Containers & Line Breaks</h2>
  
  <p>The <code>&lt;p&gt;</code> tag is the most basic container unit of text. Browsers automatically insert margin before and after paragraphs.</p>
  
  <p class="poem">
    The line break element (<code>&lt;br /&gt;</code>) forces a line break.<br>
    It is suitable for text that belongs in a single paragraph<br>
    but must have specific line breaks:<br>
    for example, addresses and poems.
  </p>

  <div class="card-group">
    <h3>Grouping with &lt;div&gt;</h3>
    <p>The <code>&lt;div&gt;</code> element is a container element used to create a logical grouping of content. It has no intrinsic visual presentation of its own.</p>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  line-height: 1.6;
}
.poem {
  background: #fdf4ff;
  border-left: 4px solid #c084fc;
  padding: 12px 16px;
  font-style: italic;
}
.card-group {
  margin-top: 20px;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 16px;
  border-radius: 6px;
}`,
    javascript: `console.log("Page 10: Paragraphs, Line Breaks, and Divisions verified.");`,
    expectedBehavior: 'Displays standard paragraphs, forced poetic/address line breaks with <br>, and logical division grouping.',
    explanation: 'Transcribes Page 10 text explaining the semantics of <p>, <br />, and <div> containers.',
    tags: ['paragraphs', 'line-break', 'div', 'containers'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-9-link-parts',
    title: 'Two Parts of a Link (Text vs Image Label)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Hyperlinks Anatomy',
    sourcePage: 11,
    sourceListingOrFigure: 'Figure 1.9: Two parts of a link',
    originalCode: `<a href="http://www.centralpark.com">Central Park</a>

<a href="index.html"><img src="logo.gif" /></a>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.9 - Two Parts of a Link</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 1.9: Two Parts of a Link</h2>
  
  <div class="link-card">
    <h3>1. Link with Text Label</h3>
    <p>Destination: <code>http://www.centralpark.com</code> | Label: Text</p>
    <a href="http://www.centralpark.com" target="_blank" class="demo-link">Central Park</a>
  </div>

  <div class="link-card">
    <h3>2. Link with Image Label</h3>
    <p>Destination: <code>index.html</code> | Label: <code>&lt;img src="logo.gif" /&gt;</code></p>
    <a href="index.html" class="demo-img-link" title="Click image to visit Home">
      <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='45' viewBox='0 0 160 45'><rect width='100%' height='100%' fill='%232563eb' rx='6'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='14' font-weight='bold'>logo.gif [Link]</text></svg>" alt="Share Your Travels Logo" />
    </a>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.link-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 16px;
}
.demo-link {
  font-size: 18px;
  color: #0284c7;
  font-weight: bold;
}
.demo-img-link {
  display: inline-block;
  transition: transform 0.2s ease;
}
.demo-img-link:hover {
  transform: scale(1.04);
}`,
    javascript: `console.log("Figure 1.9: Link parts demonstrated.");`,
    expectedBehavior: 'Displays text anchor link and clickable graphic image logo link.',
    explanation: 'Illustrates the two essential parts of an anchor: destination (href attribute) and label (text or nested image).',
    tags: ['links', 'anchor', 'images', 'navigation'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-10-destinations',
    title: 'Different Link Destinations (Figure 1.10)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Hyperlink Types and Schemes',
    sourcePage: 12,
    sourceListingOrFigure: 'Figure 1.10: Different link destinations',
    originalCode: `<!-- Link to external site -->
<a href="http://www.centralpark.com">Central Park</a>

<!-- Link to resource on external site -->
<a href="http://www.centralpark.com/logo.gif">Central Park</a>

<!-- Link to another page on same site -->
<a href="index.html">Home</a>

<!-- Link to another place on the same page -->
<a href="#top">Go to Top of Document</a>
...
<a name="top">

<!-- Link to specific place on another page -->
<a href="productX.html#reviews">Reviews for product X</a>

<!-- Link to email -->
<a href="mailto:person@somewhere.com">Someone</a>

<!-- Link to JavaScript function -->
<a href="javascript:OpenAnnoyingPopup();">See This</a>

<!-- Link to telephone -->
<a href="tel:+18009220579">Call toll free (800) 922-0579</a>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.10 - Different Link Destinations</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a name="top" id="top"></a>
  <h2>Figure 1.10: Different Link Destinations</h2>
  <p>The anchor element supports diverse protocols and targets:</p>

  <ul class="destinations-list">
    <li>
      <span class="type-badge">External Site</span>
      <a href="http://www.centralpark.com" target="_blank">Central Park</a>
      <code>href="http://www.centralpark.com"</code>
    </li>
    <li>
      <span class="type-badge">Resource on External Site</span>
      <a href="http://www.centralpark.com/logo.gif" target="_blank">Central Park Image Resource</a>
      <code>href="http://www.centralpark.com/logo.gif"</code>
    </li>
    <li>
      <span class="type-badge">Same Site Internal Page</span>
      <a href="#page-home">Home</a>
      <code>href="index.html"</code>
    </li>
    <li>
      <span class="type-badge">In-Page Anchor Bookmark</span>
      <a href="#bottom-target">Jump to Bottom Bookmark</a>
      <code>href="#top" / href="#id"</code>
    </li>
    <li>
      <span class="type-badge">Specific Place on Another Page</span>
      <a href="#productX-reviews">Reviews for product X</a>
      <code>href="productX.html#reviews"</code>
    </li>
    <li>
      <span class="type-badge">Email Client</span>
      <a href="mailto:person@somewhere.com">Send Email to Someone</a>
      <code>href="mailto:person@somewhere.com"</code>
    </li>
    <li>
      <span class="type-badge">JavaScript Function</span>
      <a href="javascript:alert('OpenAnnoyingPopup() triggered safely!');">See This (Run Function)</a>
      <code>href="javascript:OpenAnnoyingPopup();"</code>
    </li>
    <li>
      <span class="type-badge">Telephone Dialing</span>
      <a href="tel:+18009220579">Call toll free (800) 922-0579</a>
      <code>href="tel:+18009220579"</code>
    </li>
  </ul>

  <div id="bottom-target" class="target-box">
    <p>Target Bookmark Reached!</p>
    <a href="#top">Go to Top of Document</a>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.destinations-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.destinations-list li {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.type-badge {
  background: #e0f2fe;
  color: #0369a1;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  min-width: 170px;
}
code {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}
.target-box {
  margin-top: 40px;
  padding: 16px;
  background: #fef08a;
  border: 1px solid #facc15;
  border-radius: 6px;
}`,
    javascript: `console.log("Figure 1.10: 8 link destination types verified.");`,
    expectedBehavior: 'Demonstrates all 8 distinct link types from Figure 1.10, including mailto, tel, javascript popup, fragment scroll, and URLs.',
    explanation: 'Exhaustively preserves every link destination variety shown on Page 12 of the PDF.',
    tags: ['links', 'href', 'protocols', 'mailto', 'tel', 'javascript-links'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-table1-1-relative',
    title: 'Table 1.1: Sample Relative Referencing',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'URL Relative Referencing',
    sourcePage: 14,
    sourceListingOrFigure: 'Table 1.1: Sample Relative Referencing',
    originalCode: `<!-- 1 Same Directory -->
<a href="example.html">To link to example.html from about.html</a>

<!-- 2 Child Directory -->
<a href="images/logo.gif">To link to logo.gif from about.html</a>

<!-- 3 Grandchild/Descendant Directory -->
<a href="css/images/background.gif">To link to background.gif from about.html</a>

<!-- 4 Parent/Ancestor Directory -->
<a href="../about.html">To link to about.html from index.html in members</a>
<a href="../../about.html">To link to about.html from bio.html</a>

<!-- 5 Sibling Directory -->
<a href="../images/about.html">To link to about.html from index.html in members</a>
<a href="../../css/images/background.gif">To link to background.gif from bio.html</a>

<!-- 6 Root Reference -->
<a href="/about.html">To link to about.html from bio.html</a>
<a href="/images/background.gif">To link to background.gif from bio.html</a>

<!-- 7 Default Document -->
<a href="members">To link to index.html in members from about.html</a>
<a href="/members">Root relative default document</a>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 1.1 - Relative Referencing</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 1.1: Sample Relative Referencing Scenarios</h2>
  <p>Based on the directory tree in Figure 1.11 (Page 13):</p>

  <div class="table-container">
    <table class="ref-table">
      <thead>
        <tr>
          <th>Link Type</th>
          <th>Scenario &amp; Path Explanation</th>
          <th>HTML Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="badge">1. Same Directory</span></td>
          <td>To link to a file within the same folder, simply use the file name.</td>
          <td><code>&lt;a href="example.html"&gt;</code></td>
        </tr>
        <tr>
          <td><span class="badge">2. Child Directory</span></td>
          <td>To link within a subdirectory, use folder name + slash + file name.</td>
          <td><code>&lt;a href="images/logo.gif"&gt;</code></td>
        </tr>
        <tr>
          <td><span class="badge">3. Grandchild Directory</span></td>
          <td>Multiple subdirectories below current folder, separated by slashes.</td>
          <td><code>&lt;a href="css/images/background.gif"&gt;</code></td>
        </tr>
        <tr>
          <td><span class="badge">4. Parent / Ancestor</span></td>
          <td>Use <code>../</code> to move up one folder. String multiple for ancestor levels.</td>
          <td><code>&lt;a href="../about.html"&gt;</code><br><code>&lt;a href="../../about.html"&gt;</code></td>
        </tr>
        <tr>
          <td><span class="badge">5. Sibling Directory</span></td>
          <td>Use <code>../</code> to move up to common ancestor, then traverse down.</td>
          <td><code>&lt;a href="../images/about.html"&gt;</code><br><code>&lt;a href="../../css/images/background.gif"&gt;</code></td>
        </tr>
        <tr>
          <td><span class="badge">6. Root Reference</span></td>
          <td>Begins with <code>/</code>. Resolves from web server document root.</td>
          <td><code>&lt;a href="/about.html"&gt;</code></td>
        </tr>
        <tr>
          <td><span class="badge">7. Default Document</span></td>
          <td>Target folder name without file; server loads <code>index.html</code>.</td>
          <td><code>&lt;a href="members"&gt;</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.table-container {
  overflow-x: auto;
  margin-top: 16px;
}
.ref-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.ref-table th, .ref-table td {
  border: 1px solid #e2e8f0;
  padding: 12px 14px;
  text-align: left;
  font-size: 14px;
}
.ref-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #1e293b;
}
.badge {
  background: #e0e7ff;
  color: #3730a3;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
}
code {
  color: #0969da;
  font-weight: bold;
}`,
    javascript: `console.log("Table 1.1: Relative Referencing verified against Figure 1.11 directory tree.");`,
    expectedBehavior: 'Renders the comprehensive reference table with all 7 relative referencing types and code examples from Page 14.',
    explanation: 'Reproduces Table 1.1 from Page 14 mapping out how Unix-style relative pathnames work in web documents.',
    tags: ['paths', 'relative-urls', 'directory-tree', 'table-1.1'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_1_1
  },
  {
    id: 'ch1-table1-2-text-semantics',
    title: 'Table 1.2: Common Text-Level Semantic Elements',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Inline Text Elements',
    sourcePage: 14,
    sourceListingOrFigure: 'Table 1.2: Common Text-Level Semantic Elements',
    originalCode: `<a>Anchor used for hyperlinks</a>
<abbr>An abbreviation</abbr>
<br>Line break
<cite>Citation (i.e., a reference to another work)</cite>
<code>Used for displaying code</code>
<em>Emphasis</em>
<mark>For displaying highlighted text</mark>
<small>For displaying the fine-print</small>
<span>The inline equivalent of the <div> element</span>
<strong>For content that is strongly important</strong>
<time>For displaying time and date data</time>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 1.2 - Text-Level Semantic Elements</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 1.2: 11 Common Text-Level Semantic Elements</h2>
  <p>Inline elements flow with surrounding text without breaking onto a new line:</p>

  <div class="semantic-showcase">
    <div class="row">
      <div class="tag-col"><code>&lt;a&gt;</code></div>
      <div class="desc-col">Hyperlink anchor</div>
      <div class="demo-col"><a href="https://w3.org" target="_blank">Visit W3C</a></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;abbr&gt;</code></div>
      <div class="desc-col">Abbreviation with tooltip</div>
      <div class="demo-col"><abbr title="Hypertext Markup Language">HTML</abbr></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;br&gt;</code></div>
      <div class="desc-col">Forced line break</div>
      <div class="demo-col">Line 1<br>Line 2</div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;cite&gt;</code></div>
      <div class="desc-col">Citation reference</div>
      <div class="demo-col"><cite>Fundamentals of Web Development</cite></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;code&gt;</code></div>
      <div class="desc-col">Code snippet</div>
      <div class="demo-col"><code>const x = 42;</code></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;em&gt;</code></div>
      <div class="desc-col">Stressed emphasis</div>
      <div class="demo-col"><em>Emphasized text</em></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;mark&gt;</code></div>
      <div class="desc-col">Highlighted search/notice text</div>
      <div class="demo-col"><mark>Highlighted content</mark></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;small&gt;</code></div>
      <div class="desc-col">Fine print / legal copyright</div>
      <div class="demo-col"><small>&copy; 2026 WebLab Explorer</small></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;span&gt;</code></div>
      <div class="desc-col">Generic inline container</div>
      <div class="demo-col"><span class="custom-badge">Custom styled span</span></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;strong&gt;</code></div>
      <div class="desc-col">Strong importance</div>
      <div class="demo-col"><strong>Important warning</strong></div>
    </div>
    <div class="row">
      <div class="tag-col"><code>&lt;time&gt;</code></div>
      <div class="desc-col">Machine-readable date/time</div>
      <div class="demo-col"><time datetime="2026-10-26">October 26, 2026</time></div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.semantic-showcase {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}
.row {
  display: flex;
  border-bottom: 1px solid #f1f5f9;
  padding: 10px 16px;
  align-items: center;
}
.row:last-child { border-bottom: none; }
.row:nth-child(even) { background-color: #f8fafc; }
.tag-col { width: 100px; font-weight: bold; }
.desc-col { width: 220px; color: #64748b; font-size: 13.5px; }
.demo-col { flex: 1; }
.custom-badge {
  background: #fdf2f8;
  color: #db2777;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #fbcfe8;
}`,
    javascript: `console.log("Table 1.2: 11 inline semantic elements loaded and verified.");`,
    expectedBehavior: 'Displays live visual renderings of all 11 text-level semantic elements from Table 1.2.',
    explanation: 'Interactive representation of Table 1.2 covering every common text-level semantic element defined in HTML5.',
    tags: ['semantics', 'inline', 'table-1.2', 'tags'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_1_2
  },
  {
    id: 'ch1-fig1-12-img-attributes',
    title: 'The <img> Element & Attributes (Figure 1.12)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Image Attributes',
    sourcePage: 15,
    sourceListingOrFigure: 'Figure 1.12: The <img> element',
    originalCode: `<img src="images/central-park.jpg"
     alt="Central Park"
     title="Central Park"
     width="80"
     height="40" />`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.12 - The img Element</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 1.12: The &lt;img&gt; Element &amp; Attributes</h2>

  <div class="figure-box">
    <!-- SVG image with exact dimensions 80x40 from Figure 1.12 -->
    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'><rect width='100%' height='100%' fill='%2310b981'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='10' font-weight='bold'>80x40</text></svg>"
         alt="Central Park"
         title="Central Park"
         width="80"
         height="40" />
    
    <div class="attribute-cards">
      <div class="attr-item"><code>src="images/central-park.jpg"</code> Specifies image URL / path</div>
      <div class="attr-item"><code>alt="Central Park"</code> Screen reader description &amp; fallback if image fails</div>
      <div class="attr-item"><code>title="Central Park"</code> Tooltip displayed when user hovers mouse</div>
      <div class="attr-item"><code>width="80" height="40"</code> Pixel dimensions (numbers only, NO units in HTML attributes)</div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.figure-box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.attribute-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.attr-item {
  font-size: 14px;
  padding: 8px 12px;
  background: #f8fafc;
  border-left: 3px solid #10b981;
}
code {
  font-weight: bold;
  color: #047857;
}`,
    javascript: `console.log("Figure 1.12: img element attributes verified.");`,
    expectedBehavior: 'Renders the exact 80x40 image with tooltips and explains all 5 attributes specified in Figure 1.12.',
    explanation: 'Page 15 details the src, alt, title, width, and height attributes of the empty <img> element.',
    tags: ['images', 'attributes', 'alt', 'tooltip', 'dimensions'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-table1-3-character-entities',
    title: 'Table 1.3: Common Character Entities',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Character Entities',
    sourcePage: 15,
    sourceListingOrFigure: 'Table 1.3: Common Character Entities',
    originalCode: `&nbsp;   &#160;   Nonbreakable space
&lt;     &#60;    Less than symbol ("<")
&gt;     &#62;    Greater than symbol (">")
&copy;   &#169;   The copyright symbol
&euro;   &#8364;  The euro symbol
&trade;  &#8482;  The trademark symbol
&uuml;   &#252;   The ü - i.e., small u with umlaut mark`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 1.3 - Common Character Entities</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 1.3: Common Character Entities</h2>
  <p>Used for reserved HTML symbols (&lt;, &gt;) and characters not easily typed on a standard keyboard:</p>

  <table class="entity-table">
    <thead>
      <tr>
        <th>Entity Name</th>
        <th>Entity Number</th>
        <th>Rendered Result</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>&amp;nbsp;</code></td><td><code>&amp;#160;</code></td><td class="symbol">[A&nbsp;&nbsp;&nbsp;B]</td><td>Nonbreakable space (prevents space collapsing)</td></tr>
      <tr><td><code>&amp;lt;</code></td><td><code>&amp;#60;</code></td><td class="symbol">&lt;</td><td>Less than symbol ("&lt;")</td></tr>
      <tr><td><code>&amp;gt;</code></td><td><code>&amp;#62;</code></td><td class="symbol">&gt;</td><td>Greater than symbol ("&gt;")</td></tr>
      <tr><td><code>&amp;copy;</code></td><td><code>&amp;#169;</code></td><td class="symbol">&copy;</td><td>The &copy; copyright symbol</td></tr>
      <tr><td><code>&amp;euro;</code></td><td><code>&amp;#8364;</code></td><td class="symbol">&euro;</td><td>The &euro; euro symbol</td></tr>
      <tr><td><code>&amp;trade;</code></td><td><code>&amp;#8482;</code></td><td class="symbol">&trade;</td><td>The &trade; trademark symbol</td></tr>
      <tr><td><code>&amp;uuml;</code></td><td><code>&amp;#252;</code></td><td class="symbol">&uuml;</td><td>The &uuml; - small u with umlaut mark</td></tr>
    </tbody>
  </table>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.entity-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border: 1px solid #e2e8f0;
}
.entity-table th, .entity-table td {
  border: 1px solid #e2e8f0;
  padding: 10px 14px;
  text-align: left;
  font-size: 14px;
}
.entity-table th {
  background: #f8fafc;
  font-weight: 600;
}
.symbol {
  font-size: 18px;
  font-weight: bold;
  color: #2563eb;
  text-align: center;
}`,
    javascript: `console.log("Table 1.3: Character Entities loaded.");`,
    expectedBehavior: 'Renders the complete table of character entities showing both entity names and numeric entity codes with rendered outputs.',
    explanation: 'Preserves Table 1.3 from Page 15 of the PDF.',
    tags: ['entities', 'special-characters', 'table-1.3', 'unicode'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_1_3
  },
  {
    id: 'ch1-fig1-13-lists-ul-ol',
    title: 'HTML Lists: Unordered, Ordered, and Definition Lists',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    topic: 'Lists (ul, ol, dl)',
    sourcePage: 16,
    sourceListingOrFigure: 'Figure 1.13: List elements and their default rendering',
    originalCode: `<!-- Unordered List with Links -->
<ul>
  <li><a href="index.html">Home</a></li>
  <li>About Us</li>
  <li>Products</li>
  <li>Contact Us</li>
</ul>

<!-- Nested Ordered List -->
<ol>
  <li>Introduction</li>
  <li>Background</li>
  <li>My Solution
    <ol>
      <li>Methodology</li>
      <li>Results</li>
      <li>Discussion</li>
    </ol>
  </li>
  <li>Conclusion</li>
</ol>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.13 - HTML Lists</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 1.13: List Elements and Default Rendering</h2>

  <div class="lists-grid">
    <!-- Unordered List -->
    <div class="list-card">
      <h3>Unordered List (<code>&lt;ul&gt;</code>)</h3>
      <p class="desc">Bulleted collection of items with no set order. Notice the first item contains a hyperlink:</p>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li>About Us</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>

    <!-- Ordered List -->
    <div class="list-card">
      <h3>Ordered List (<code>&lt;ol&gt;</code>)</h3>
      <p class="desc">Numbered sequence with nested sub-list hierarchy:</p>
      <ol>
        <li>Introduction</li>
        <li>Background</li>
        <li>My Solution
          <ol>
            <li>Methodology</li>
            <li>Results</li>
            <li>Discussion</li>
          </ol>
        </li>
        <li>Conclusion</li>
      </ol>
    </div>

    <!-- Definition List -->
    <div class="list-card full-width">
      <h3>Definition List (<code>&lt;dl&gt;</code>)</h3>
      <p class="desc">Collection of term (<code>&lt;dt&gt;</code>) and definition (<code>&lt;dd&gt;</code>) pairs:</p>
      <dl>
        <dt>HTML</dt>
        <dd>Hypertext Markup Language for creating the structure of web documents.</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets for describing presentation and formatting.</dd>
      </dl>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.lists-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 640px) {
  .lists-grid { grid-template-columns: 1fr; }
}
.list-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
}
.list-card.full-width {
  grid-column: 1 / -1;
}
.desc {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 12px;
}
ul, ol {
  padding-left: 24px;
}
li {
  margin-bottom: 4px;
}
dt {
  font-weight: bold;
  color: #1e3a8a;
  margin-top: 8px;
}
dd {
  margin-left: 20px;
  color: #475569;
}`,
    javascript: `console.log("Figure 1.13: HTML Lists verified.");`,
    expectedBehavior: 'Faithfully reproduces the unordered list with anchor and the nested numbered ordered list shown in Figure 1.13, plus definition list.',
    explanation: 'Covers the three list types defined on Pages 15-16: unordered (ul), ordered (ol), and definition (dl).',
    tags: ['lists', 'ul', 'ol', 'dl', 'navigation'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-14-div-vs-semantic',
    title: 'Figure 1.14: Div-Based XHTML Layout vs HTML5 Semantics',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.6',
    sectionTitle: 'HTML5 Semantic Structure Elements',
    topic: 'Replacing Div Sprawl with Semantic Elements',
    sourcePage: 17,
    sourceListingOrFigure: 'Figure 1.14: Sample <div> based XHTML layout (with HTML5 equivalents)',
    originalCode: `<!-- Div-based XHTML layout (Fig 1.14) -->
<body>
  <div id="header">
    <div id="logo-headings">...</div>
    <div id="top-navigation">...</div>
  </div>
  <div id="main">
    <div id="left-navigation">...</div>
    <div class="content">
      <div class="story">
        <div class="story-photo">
          <img class="blog-photo" />
          <p class="photo-caption">...</p>
        </div>
        <div class="related-stuff-on-right">...</div>
      </div>
    </div>
  </div>
  <div id="footer">...</div>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.14 - Div vs Semantic Layout</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 1.14: XHTML <code>&lt;div&gt;</code> Sprawl vs HTML5 Semantic Elements</h2>

  <div class="comparison-grid">
    <div class="panel xhtml">
      <h3>XHTML "Div Sprawl" Pattern</h3>
      <div class="mock-box header-box"><code>&lt;div id="header"&gt;</code>
        <div class="mock-box sub-box"><code>&lt;div id="logo-headings"&gt;</code></div>
        <div class="mock-box sub-box"><code>&lt;div id="top-navigation"&gt;</code></div>
      </div>
      <div class="mock-box main-box"><code>&lt;div id="main"&gt;</code>
        <div class="mock-box sub-box"><code>&lt;div id="left-navigation"&gt;</code></div>
        <div class="mock-box sub-box"><code>&lt;div class="story"&gt;</code>
          <div class="mock-box inner-box"><code>&lt;div class="story-photo"&gt;</code></div>
          <div class="mock-box inner-box"><code>&lt;div class="related-stuff"&gt;</code></div>
        </div>
      </div>
      <div class="mock-box footer-box"><code>&lt;div id="footer"&gt;</code></div>
    </div>

    <div class="panel html5">
      <h3>HTML5 Clean Semantic Equivalents</h3>
      <header class="mock-box header-box"><code>&lt;header&gt;</code>
        <div class="mock-box sub-box"><code>&lt;hgroup&gt;</code></div>
        <nav class="mock-box sub-box"><code>&lt;nav&gt;</code></nav>
      </header>
      <main class="mock-box main-box"><code>&lt;div id="main"&gt;</code>
        <nav class="mock-box sub-box"><code>&lt;nav&gt;</code></nav>
        <article class="mock-box sub-box"><code>&lt;article&gt;</code>
          <figure class="mock-box inner-box"><code>&lt;figure&gt; &lt;figcaption&gt;</code></figure>
          <aside class="mock-box inner-box"><code>&lt;aside&gt;</code></aside>
        </article>
      </main>
      <footer class="mock-box footer-box"><code>&lt;footer&gt;</code></footer>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .comparison-grid { grid-template-columns: 1fr; }
}
.panel {
  background: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #cbd5e1;
}
.mock-box {
  border: 1px dashed #94a3b8;
  padding: 10px;
  margin: 8px 0;
  border-radius: 4px;
  font-size: 13px;
}
.header-box { background: #fef3c7; border-color: #f59e0b; }
.main-box { background: #f0fdf4; border-color: #10b981; }
.sub-box { background: #eff6ff; border-color: #3b82f6; margin-left: 12px; }
.inner-box { background: #fdf2f8; border-color: #ec4899; margin-left: 20px; }
.footer-box { background: #f1f5f9; border-color: #64748b; }`,
    javascript: `console.log("Figure 1.14: Div vs HTML5 Semantics compared.");`,
    expectedBehavior: 'Displays side-by-side structural comparison of div-based layout versus semantic HTML5 layout.',
    explanation: 'Visualizes the complete replacement mapping described in Figure 1.14 on Page 17.',
    tags: ['semantics', 'div-sprawl', 'header', 'article', 'figure', 'aside', 'footer'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-listing1-1-headings',
    title: 'Listing 1.1: Heading Example in Header and Article',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.6',
    sectionTitle: 'HTML5 Semantic Structure Elements',
    topic: 'Heading and Header Elements',
    sourcePage: 17,
    sourceListingOrFigure: 'Listing 1.1: Heading example',
    originalCode: `<header>
  <img src="logo.gif" alt="logo" />
  <h1>Fundamentals of Web Development</h1>
  ...
</header>
<article>
  <header>
    <h2>HTML5 Semantic Structure Elements</h2>
    <p>By <em>Randy Connolly</em></p>
    <p><time>September 30, 2015</time></p>
  </header>
  ...
</article>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 1.1 - Heading Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Page Header -->
  <header class="page-header">
    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='36' viewBox='0 0 120 36'><rect width='100%' height='100%' fill='%230284c7'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='12' font-weight='bold'>logo.gif</text></svg>" alt="logo" />
    <h1>Fundamentals of Web Development</h1>
  </header>

  <!-- Article with nested Header -->
  <article class="article-post">
    <header class="article-header">
      <h2>HTML5 Semantic Structure Elements</h2>
      <p class="author">By <em>Randy Connolly</em></p>
      <p class="date"><time datetime="2015-09-30">September 30, 2015</time></p>
    </header>
    <p>Both &lt;header&gt; and &lt;footer&gt; can be used within articles and sections, not just as page headers.</p>
  </article>
</body>
</html>`,
    css: `body {
  font-family: Georgia, serif;
  padding: 24px;
  color: #1e293b;
  line-height: 1.5;
}
.page-header {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 16px;
  margin-bottom: 24px;
}
.page-header h1 {
  font-size: 26px;
  margin: 12px 0 0;
}
.article-post {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
}
.article-header h2 {
  font-size: 20px;
  margin: 0 0 8px;
  color: #0369a1;
}
.author, .date {
  font-size: 14px;
  color: #64748b;
  margin: 4px 0;
}`,
    javascript: `console.log("Listing 1.1: Header inside article loaded.");`,
    expectedBehavior: 'Displays page header followed by an independent article containing its own nested article header.',
    explanation: 'Demonstrates that HTML5 <header> is not restricted to the top of the page; it can be used within <article> and <section>.',
    tags: ['header', 'article', 'headings', 'listing-1.1'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-listing1-2-hgroup',
    title: 'Listing 1.2: <hgroup> Heading Group Example',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.6',
    sectionTitle: 'HTML5 Semantic Structure Elements',
    topic: 'Heading Groups (<hgroup>)',
    sourcePage: 18,
    sourceListingOrFigure: 'Listing 1.2: hgroup example & Figure 1.15',
    originalCode: `<header>
  <hgroup>
    <h1>Chapter Two: HTML 1</h1>
    <h2>An Introduction</h2>
  </hgroup>
</header>
<article>
  <hgroup>
    <h2>HTML5 Semantic Structure Elements</h2>
    <h3>Overview</h3>
  </hgroup>
</article>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 1.2 - hgroup Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="section-box">
    <hgroup>
      <h1>Chapter Two: HTML 1</h1>
      <h2>An Introduction</h2>
    </hgroup>
  </header>

  <article class="section-box">
    <hgroup>
      <h2>HTML5 Semantic Structure Elements</h2>
      <h3>Overview</h3>
    </hgroup>
    <p>The <code>&lt;hgroup&gt;</code> element is used to group multi-level headings (such as a main title and subtitle) together.</p>
  </article>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.section-box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
hgroup h1 {
  font-size: 26px;
  margin: 0 0 4px;
  color: #1e3a8a;
}
hgroup h2 {
  font-size: 18px;
  font-weight: normal;
  color: #64748b;
  margin: 0 0 12px;
}
hgroup h3 {
  font-size: 15px;
  color: #94a3b8;
  margin: 0 0 12px;
}`,
    javascript: `console.log("Listing 1.2: hgroup loaded.");`,
    expectedBehavior: 'Displays grouped multi-level title and subtitle headers inside header and article containers.',
    explanation: 'Transcribes Listing 1.2 from Page 18 explaining the purpose of <hgroup> for titles and subtitles.',
    tags: ['hgroup', 'headings', 'semantics', 'listing-1.2'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-listing1-3-nav',
    title: 'Listing 1.3: Navigation (<nav>) Example',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.6',
    sectionTitle: 'HTML5 Semantic Structure Elements',
    topic: 'Navigation Blocks',
    sourcePage: 19,
    sourceListingOrFigure: 'Listing 1.3: nav example',
    originalCode: `<header>
  <img src="logo.gif" alt="logo" />
  <h1>Fundamentals of Web Development</h1>
  <nav role="navigation">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="browse.html">Browse</a></li>
    </ul>
  </nav>
</header>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 1.3 - nav Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <div class="brand">
      <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='32' viewBox='0 0 100 32'><rect width='100%' height='100%' fill='%232563eb' rx='4'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='11' font-weight='bold'>logo.gif</text></svg>" alt="logo" />
      <h1>Fundamentals of Web Development</h1>
    </div>

    <!-- Navigation from Listing 1.3 -->
    <nav role="navigation">
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="browse.html">Browse</a></li>
      </ul>
    </nav>
  </header>

  <p class="explanation">The <code>&lt;nav&gt;</code> element represents a major navigation block containing links to other pages or page sections.</p>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.site-header {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.brand h1 {
  font-size: 22px;
  margin: 0;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 16px;
}
.nav-links a {
  text-decoration: none;
  color: #2563eb;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  background: #eff6ff;
}
.nav-links a:hover {
  background: #dbeafe;
}
.explanation {
  margin-top: 20px;
  color: #64748b;
  font-size: 14px;
}`,
    javascript: `console.log("Listing 1.3: nav element verified.");`,
    expectedBehavior: 'Renders the header containing logo, title, and a horizontal navigation bar with unordered list links.',
    explanation: 'Page 19 illustrates Listing 1.3 showing appropriate semantic usage of <nav role="navigation">.',
    tags: ['nav', 'header', 'navigation', 'listing-1.3'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-fig1-16-figure-caption',
    title: 'Figure 1.16: Figure and Figcaption Elements',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.6',
    sectionTitle: 'HTML5 Semantic Structure Elements',
    topic: 'Self-Contained Content with Captions',
    sourcePage: 20,
    sourceListingOrFigure: 'Figure 1.16: The figure and figcaption elements in the browser',
    originalCode: `<p>This photo was taken on October 22, 2011 with a Canon EOS 30D camera.</p>
<figure>
  <img src="images/central-park.jpg" alt="Central Park" /><br/>
  <figcaption>Conservatory Pond in Central Park</figcaption>
</figure>
<p>It was a wonderfully beautiful autumn Sunday, with strong sunlight and expressive clouds. I was very fortunate that my one day in New York was blessed with such weather!</p>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 1.16 - Figure and Figcaption</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>This photo was taken on October 22, 2011 with a Canon EOS 30D camera.</p>

  <figure>
    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='440' height='220' viewBox='0 0 440 220'><defs><linearGradient id='bg' x1='0' y1='0' x2='0' y2='1'><stop offset='0%25' stop-color='%2360a5fa'/><stop offset='100%25' stop-color='%231d4ed8'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23bg)'/><circle cx='340' cy='60' r='30' fill='%23fef08a'/><path d='M0 160 Q110 130 220 150 T440 140 L440 220 L0 220 Z' fill='%2315803d'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='serif' font-size='14'>Central Park Autumn Scene</text></svg>" alt="Central Park" /><br/>
    <figcaption>Conservatory Pond in Central Park</figcaption>
  </figure>

  <p>It was a wonderfully beautiful autumn Sunday, with strong sunlight and expressive clouds. I was very fortunate that my one day in New York was blessed with such weather!</p>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  line-height: 1.6;
  max-width: 600px;
}
figure {
  margin: 20px 0;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 12px;
  border-radius: 6px;
  display: inline-block;
}
figure img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
figcaption {
  font-style: italic;
  font-size: 13.5px;
  color: #64748b;
  margin-top: 8px;
  text-align: center;
}`,
    javascript: `console.log("Figure 1.16: Figure and figcaption loaded.");`,
    expectedBehavior: 'Displays self-contained image figure with centered italic figcaption enclosed by descriptive paragraphs.',
    explanation: 'Reproduces Figure 1.16 from Page 20 demonstrating the semantic pairing of <figure> and <figcaption>.',
    tags: ['figure', 'figcaption', 'images', 'semantics'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-aside-sidebar',
    title: 'The <aside> Element: Float Squeeze Pitfall & Responsive Fix',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.6',
    sectionTitle: 'HTML5 Semantic Structure Elements',
    topic: 'Aside Elements & Layout Pitfalls',
    sourcePage: 21,
    sourceListingOrFigure: 'Page 21 text (Aside element)',
    originalCode: `<article>
  <h1>Exploring Manhattan</h1>
  <p>Manhattan contains some of the most vibrant urban parks in the world...</p>
  <aside>
    <h3>Did you know?</h3>
    <p>Central Park receives approximately 42 million visitors annually.</p>
  </aside>
  <p>Visitors can rent boats on the Conservatory Pond...</p>
</article>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Aside Element & Float Squeeze Pitfall</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Mode Toggle Buttons -->
  <div class="mode-bar">
    <button id="btn-bug" class="btn active" onclick="setMode('bug')">
      ⚠️ See Layout Mistake (Float Squeeze)
    </button>
    <button id="btn-fix" class="btn" onclick="setMode('fix')">
      ✓ See Responsive Fix (Clean Flow)
    </button>
  </div>

  <div id="notice-bug" class="notice-box warning">
    <strong>⚠️ The Layout Mistake Shown in Your Screenshot:</strong><br>
    When a fixed-width aside (<code>width: 200px; float: right;</code>) is placed inside a narrow container, the text to its left gets squeezed into an awkward 1-word column (&ldquo;the / Conservatory / Pond...&rdquo;).
  </div>

  <div id="notice-fix" class="notice-box success" style="display: none;">
    <strong>✓ The Solution:</strong><br>
    On screens below 550px, remove the float (<code>float: none; width: auto;</code>) so the aside flows naturally without squeezing the text!
  </div>

  <article class="article-container">
    <h1>Exploring Manhattan</h1>
    <p>Manhattan contains some of the most vibrant urban parks in the world. Walking through its trails offers a serene contrast to the bustling avenues.</p>

    <!-- The aside represents tangentially related content -->
    <aside class="sidebar-callout" id="callout-aside">
      <h4>Did you know?</h4>
      <p>Central Park receives approximately 42 million visitors annually and spans 843 acres.</p>
    </aside>

    <p>Visitors can rent miniature model sailboats on the Conservatory Pond, an activity popular among children and adults alike since the late 19th century.</p>
  </article>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 16px;
  background-color: #fafafa;
  color: #1e293b;
}

.mode-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #cbd5e1;
  background: white;
  color: #334155;
  transition: all 0.2s;
}

.btn.active {
  background: #0284c7;
  color: white;
  border-color: #0284c7;
}

.notice-box {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 16px;
}

.notice-box.warning {
  background: #fffbeb;
  border: 1px solid #fde68a;
  color: #92400e;
}

.notice-box.success {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
}

.article-container {
  max-width: 440px; /* Narrow container demonstrating the screenshot bug */
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  line-height: 1.6;
}

h1 {
  font-size: 24px;
  margin: 0 0 12px;
  color: #0f172a;
}

.sidebar-callout {
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 13.5px;
}

.sidebar-callout h4 {
  margin: 0 0 6px;
  color: #b45309;
}

.sidebar-callout p {
  margin: 0;
  color: #451a03;
}

/* 1. The Mistake: Fixed 200px float in narrow container */
.layout-bug {
  float: right;
  width: 200px;
  margin: 0 0 16px 20px;
}

/* 2. The Solution: Full width block without float */
.layout-fix {
  float: none;
  width: auto;
  margin: 16px 0;
}`,
    javascript: `function setMode(mode) {
  const aside = document.getElementById('callout-aside');
  const noticeBug = document.getElementById('notice-bug');
  const noticeFix = document.getElementById('notice-fix');
  const btnBug = document.getElementById('btn-bug');
  const btnFix = document.getElementById('btn-fix');

  if (mode === 'bug') {
    aside.className = 'sidebar-callout layout-bug';
    noticeBug.style.display = 'block';
    noticeFix.style.display = 'none';
    btnBug.classList.add('active');
    btnFix.classList.remove('active');
    console.warn("Displaying Layout Mistake: 200px fixed float squeezes adjacent text.");
  } else {
    aside.className = 'sidebar-callout layout-fix';
    noticeBug.style.display = 'none';
    noticeFix.style.display = 'block';
    btnBug.classList.remove('active');
    btnFix.classList.add('active');
    console.info("Displaying Solution: Responsive aside allows text to breathe naturally.");
  }
}

// Initial state: start with bug
setMode('bug');`,
    expectedBehavior: 'Demonstrates the exact CSS float column squeeze bug shown in the screenshot, with a live one-click toggle to the responsive layout fix.',
    explanation: 'Explains why floating fixed-width elements causes awkward word-wrapping in narrow viewports, and demonstrates the responsive solution.',
    tags: ['aside', 'float', 'layout-mistake', 'responsive-fix', 'css-bug'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-mistake-improper-nesting',
    title: 'Common Mistake: Overlapping Tags (Improper Nesting)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.2',
    sectionTitle: 'HTML Syntax',
    topic: 'Common HTML Mistakes & Browser Error Recovery',
    sourcePage: 5,
    sourceListingOrFigure: 'Figure 1.4: Incorrect nesting example',
    originalCode: `<!-- INCORRECT OVERLAPPING NESTING (Page 5) -->
<h1>Share Your <strong>Travels</h1></strong>

<!-- CORRECT PROPER NESTING -->
<h1>Share Your <strong>Travels</strong></h1>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Improper Nesting Mistake - Page 5</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common HTML Mistake: Overlapping Tags (Figure 1.4)</h2>

  <div class="card mistake-card">
    <div class="badge error">❌ The Mistake: Overlapping Tags</div>
    <div class="code-box">
      <code>&lt;h1&gt;Share Your &lt;strong&gt;Travels&lt;/h1&gt;&lt;/strong&gt;</code>
    </div>
    <p class="desc">
      Because <code>&lt;strong&gt;</code> was opened inside <code>&lt;h1&gt;</code>, it must close BEFORE <code>&lt;/h1&gt;</code>. Overlapping tags force the browser into error recovery mode.
    </p>

    <h4>What the Browser Actually Constructs (DOM Inspection):</h4>
    <div class="dom-debug" id="dom-output"></div>
  </div>

  <div class="card fix-card">
    <div class="badge success">✓ The Correct Implementation</div>
    <div class="code-box">
      <code>&lt;h1&gt;Share Your &lt;strong&gt;Travels&lt;/strong&gt;&lt;/h1&gt;</code>
    </div>
    <p class="desc">
      Proper nesting preserves clean parent-child hierarchy and ensures CSS selectors like <code>h1 > strong</code> function reliably.
    </p>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
  background: #f8fafc;
}
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
}
.mistake-card { border-left: 4px solid #ef4444; }
.fix-card { border-left: 4px solid #22c55e; }
.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
}
.badge.error { background: #fee2e2; color: #991b1b; }
.badge.success { background: #dcfce7; color: #166534; }
.code-box {
  background: #1e293b;
  color: #f8fafc;
  padding: 10px 14px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 13px;
  margin-bottom: 10px;
}
.desc {
  font-size: 13.5px;
  color: #475569;
  line-height: 1.5;
}
.dom-debug {
  background: #f1f5f9;
  border: 1px dashed #94a3b8;
  padding: 10px 14px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  color: #0f172a;
}`,
    javascript: `const domOutput = document.getElementById('dom-output');
const testDiv = document.createElement('div');
testDiv.innerHTML = '<h1>Share Your <strong>Travels</h1></strong>';
domOutput.innerHTML = 'Browser Repaired Tree: <br><code>' +
  testDiv.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
  '</code><br><span style="color:#b91c1c;font-size:11px;">Notice: The browser auto-closed &lt;/strong&gt; prematurely to repair the invalid tree!</span>';
console.warn("Improper nesting: Browser triggered tree repair.");`,
    expectedBehavior: 'Displays live breakdown of what happens when overlapping tags are parsed by browsers and contrasts with correct nesting.',
    explanation: 'Demonstrates the Figure 1.4 mistake from Page 5 where overlapping tags trigger browser error recovery and violate clean XML/XHTML syntax.',
    tags: ['nesting', 'syntax-error', 'dom-repair', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-mistake-quirks-mode',
    title: 'Common Mistake: Missing DOCTYPE (Quirks Mode Disaster)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.4',
    sectionTitle: 'Structure of HTML Documents',
    topic: 'Quirks Mode vs Standards Mode',
    sourcePage: 7,
    sourceListingOrFigure: 'Page 7 DOCTYPE explanation',
    originalCode: `<!-- MISTAKE: Omitting <!DOCTYPE html> -->
<html>
<head><title>Quirks Mode</title></head>
<body>
  <div style="width: 200px; padding: 20px; border: 5px solid red;">
    In Quirks Mode, old IE box model shrinks content area!
  </div>
</body>
</html>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DOCTYPE & Quirks Mode Mistake</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: Forgetting <code>&lt;!DOCTYPE html&gt;</code></h2>

  <div class="status-indicator">
    <strong>Current Document Mode:</strong>
    <span class="mode-val" id="mode-val">Detecting...</span>
  </div>

  <div class="comparison-boxes">
    <div class="box-card">
      <h4>Without DOCTYPE (Quirks Mode Bug)</h4>
      <p class="desc">Triggers legacy 1990s browser rendering:</p>
      <ul>
        <li>Old broken IE box model used</li>
        <li>Percentage heights fail to resolve</li>
        <li>Fonts and line-heights do not inherit into tables</li>
        <li>CSS layout calculations become unpredictable</li>
      </ul>
    </div>

    <div class="box-card highlight">
      <h4>With <code>&lt;!DOCTYPE html&gt;</code> (Standards Mode)</h4>
      <p class="desc">Enables modern W3C standards:</p>
      <ul>
        <li>Standard CSS Box Model applied</li>
        <li>Consistent box-sizing behavior across browsers</li>
        <li>Modern Flexbox and Grid behave properly</li>
        <li>Full HTML5 semantic tag support</li>
      </ul>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
  background: #f8fafc;
}
.status-indicator {
  background: #1e293b;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 20px;
}
.mode-val {
  color: #38bdf8;
  font-family: monospace;
  font-weight: bold;
  margin-left: 8px;
}
.comparison-boxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 600px) {
  .comparison-boxes { grid-template-columns: 1fr; }
}
.box-card {
  background: white;
  border: 1px solid #cbd5e1;
  padding: 16px 20px;
  border-radius: 8px;
}
.box-card.highlight {
  border-color: #22c55e;
  background: #f0fdf4;
}
.desc {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 10px;
}
ul {
  padding-left: 20px;
  font-size: 13px;
  color: #334155;
  margin: 0;
}
li { margin-bottom: 6px; }`,
    javascript: `const modeVal = document.getElementById('mode-val');
modeVal.textContent = document.compatMode === 'CSS1Compat' ? 'CSS1Compat (Standards Mode ✓)' : 'BackCompat (Quirks Mode ⚠️)';
console.log("Document Compatibility Mode:", document.compatMode);`,
    expectedBehavior: 'Displays compatibility mode detection and contrasts quirks mode rendering bugs with modern standards mode.',
    explanation: 'Explains Item 1 from Page 7: omitting the DOCTYPE causes browsers to downgrade into quirks mode, breaking layouts.',
    tags: ['doctype', 'quirks-mode', 'standards-mode', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-mistake-invalid-list-nesting',
    title: 'Common Mistake: Invalid List Nesting (Direct <ul> in <ul>)',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    sourcePage: 18,
    sourceListingOrFigure: 'Page 18 - List Structure & Valid HTML Nesting Rules',
    topic: 'Valid HTML5 Hierarchy & List Parsing Pitfalls',
    originalCode: `<!-- THE MISTAKE: Placing <ul> directly inside <ul> without an enclosing <li> -->
<ul>
  <li>Web Development</li>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
  </ul>
</ul>

<!-- THE FIX: Nest sub-lists inside the parent <li> -->
<ul>
  <li>Web Development
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
  </li>
</ul>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Invalid List Nesting Mistake - Page 18</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common HTML Mistake: Invalid List Nesting</h2>
  <p class="subtitle">W3C HTML specification forbids <code>&lt;ul&gt;</code> directly inside <code>&lt;ul&gt;</code> without an enclosing <code>&lt;li&gt;</code>.</p>

  <div class="split-view">
    <!-- MISTAKE CARD -->
    <div class="card mistake-card">
      <div class="badge error">❌ The Mistake: <code>&lt;ul&gt;</code> directly in <code>&lt;ul&gt;</code></div>
      <p class="desc">Browsers attempt error recovery by synthesizing an anonymous block or misaligning bullets:</p>
      <div class="list-container">
        <ul class="bad-list">
          <li>Frontend Technologies</li>
          <!-- INVALID: ul directly inside ul -->
          <ul>
            <li>HTML5 Semantic Tags</li>
            <li>CSS3 Flexbox & Grid</li>
          </ul>
          <li>Backend Technologies</li>
        </ul>
      </div>
      <div class="explanation-box">
        <strong>Why it's broken:</strong> HTML lists may only contain <code>&lt;li&gt;</code> as direct children. Screen readers and automated parsers get confused by this illegal structure.
      </div>
    </div>

    <!-- FIX CARD -->
    <div class="card fix-card">
      <div class="badge success">✓ The Fix: <code>&lt;ul&gt;</code> inside parent <code>&lt;li&gt;</code></div>
      <p class="desc">Proper hierarchical nesting creates clean visual sub-levels and valid accessible DOM:</p>
      <div class="list-container">
        <ul class="good-list">
          <li>Frontend Technologies
            <!-- VALID: ul placed inside the parent li -->
            <ul>
              <li>HTML5 Semantic Tags</li>
              <li>CSS3 Flexbox & Grid</li>
            </ul>
          </li>
          <li>Backend Technologies</li>
        </ul>
      </div>
      <div class="explanation-box success">
        <strong>The Rule:</strong> Always close the parent <code>&lt;li&gt;</code> <em>after</em> its nested child list!
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
  margin: 0;
}
h2 {
  margin: 0 0 6px 0;
  font-size: 20px;
  color: #0f172a;
}
.subtitle {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 20px;
}
.split-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 640px) {
  .split-view { grid-template-columns: 1fr; }
}
.card {
  background: white;
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.mistake-card { border-left: 4px solid #ef4444; }
.fix-card { border-left: 4px solid #22c55e; }
.badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.badge.error { background: #fee2e2; color: #b91c1c; }
.badge.success { background: #dcfce7; color: #15803d; }
.desc { font-size: 13px; color: #64748b; margin-bottom: 14px; }
.list-container {
  background: #f1f5f9;
  padding: 14px 20px;
  border-radius: 6px;
  margin-bottom: 14px;
}
.bad-list, .good-list {
  margin: 0;
  padding-left: 20px;
  font-size: 14px;
}
.bad-list li, .good-list li {
  margin-bottom: 4px;
}
.explanation-box {
  font-size: 12px;
  line-height: 1.5;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
  padding: 10px 12px;
  border-radius: 6px;
}
.explanation-box.success {
  background: #f0fdf4;
  border-color: #bbf7d0;
  color: #166534;
}`,
    javascript: `console.warn("HTML Validation Warning: <ul> cannot have a child <ul> without an enclosing <li>!");`,
    expectedBehavior: 'Contrasts illegal list nesting error recovery with standard valid hierarchical list structure.',
    explanation: 'Demonstrates the common beginner mistake of placing sub-lists directly inside ul tags instead of inside parent li elements.',
    tags: ['lists', 'nesting', 'html-validation', 'common-mistake', 'accessibility'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch1-mistake-broken-relative-path',
    title: 'Common Mistake: Broken Relative Paths & Missing Alt Text',
    chapter: 1,
    chapterTitle: 'Chapter 1: Introduction to HTML',
    section: '1.5',
    sectionTitle: 'Quick Tour of HTML Elements',
    sourcePage: 15,
    sourceListingOrFigure: 'Page 15 - Relative Image References and alt Attribute Requirements',
    topic: 'URL Traversal Pitfalls and Broken Image Outputs',
    originalCode: `<!-- THE MISTAKE: Incorrect path traversal and missing alt -->
<img src="../images/central-park.jpg"> <!-- 404 Not Found & no screen reader label! -->

<!-- THE FIX: Accurate relative path + descriptive alt attribute -->
<img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400" 
     alt="Central Park Manhattan trees and walking path" 
     width="300" height="180">`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Broken Relative Path Mistake - Page 15</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Image Mistake: Broken Path &amp; Missing <code>alt</code></h2>
  <p class="subtitle">Reference: Page 15 (Relative URLs &amp; Image Fallback Behavior)</p>

  <div class="split-view">
    <!-- MISTAKE CARD -->
    <div class="card mistake-card">
      <div class="badge error">❌ The Mistake: Broken Path + No Alt</div>
      <p class="desc">A wrong relative path with no alt text leaves a broken icon and a blank mystery for users:</p>
      
      <div class="preview-frame">
        <!-- Broken image with no alt attribute -->
        <img src="wrong-subfolder/non-existent-photo.jpg" class="broken-img-demo">
      </div>

      <div class="explanation-box">
        <strong>The Browser Output:</strong> Because the URL cannot be resolved and no <code>alt</code> text was supplied, the browser renders an empty broken image icon. Screen readers read aloud the entire raw cryptic file name!
      </div>
    </div>

    <!-- FIX CARD -->
    <div class="card fix-card">
      <div class="badge success">✓ The Fix: Resolved URL + Meaningful Alt</div>
      <p class="desc">Correct path with descriptive alt attribute and explicit dimensions to avoid layout shifts:</p>
      
      <div class="preview-frame">
        <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400" 
             alt="Vibrant green trees lining a sunny pathway in Central Park" 
             class="fixed-img-demo"
             width="280" height="160">
      </div>

      <div class="explanation-box success">
        <strong>Best Practice:</strong> Always specify <code>alt</code> for accessibility and SEO. If an image fails to load, the <code>alt</code> text cleanly displays in its place.
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
  margin: 0;
}
h2 { margin: 0 0 6px 0; font-size: 20px; color: #0f172a; }
.subtitle { color: #64748b; font-size: 14px; margin-bottom: 20px; }
.split-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 640px) {
  .split-view { grid-template-columns: 1fr; }
}
.card {
  background: white;
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.mistake-card { border-left: 4px solid #ef4444; }
.fix-card { border-left: 4px solid #22c55e; }
.badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.badge.error { background: #fee2e2; color: #b91c1c; }
.badge.success { background: #dcfce7; color: #15803d; }
.desc { font-size: 13px; color: #64748b; margin-bottom: 14px; }
.preview-frame {
  background: #f1f5f9;
  border: 1px dashed #cbd5e1;
  padding: 16px;
  border-radius: 6px;
  min-height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}
.broken-img-demo {
  border: 1px solid #ef4444;
  width: 150px;
  height: 100px;
}
.fixed-img-demo {
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 100%;
  height: auto;
}
.explanation-box {
  font-size: 12px;
  line-height: 1.5;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
  padding: 10px 12px;
  border-radius: 6px;
}
.explanation-box.success {
  background: #f0fdf4;
  border-color: #bbf7d0;
  color: #166534;
}`,
    javascript: `console.error("404 Error: Failed to load resource: wrong-subfolder/non-existent-photo.jpg");
console.warn("Accessibility Warning: Missing alt attribute on <img> tag.");`,
    expectedBehavior: 'Displays broken image placeholder and browser 404 warning contrasted with valid accessible image loading.',
    explanation: 'Demonstrates common image path errors (wrong directory traversal) and the importance of alt text from Page 15.',
    tags: ['images', 'relative-path', 'alt-text', 'accessibility', 'common-mistake', '404-error'],
    verificationStatus: 'verified',
    supplementaryExample: false
  }
];
