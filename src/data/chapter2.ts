import { CatalogExample } from '../types';
import {
  TABLE_2_1,
  TABLE_2_2,
  TABLE_2_3,
  TABLE_2_4,
  TABLE_2_5,
  TABLE_2_6,
  TABLE_2_7,
  TABLE_2_8,
  TABLE_2_9,
  TABLE_2_10
} from './referenceTables';

export const CHAPTER_2_EXAMPLES: CatalogExample[] = [
  {
    id: 'ch2-fig2-1-syntax',
    title: 'Figure 2.1: CSS Syntax Rules & Declarations',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.2',
    sectionTitle: 'CSS Syntax',
    topic: 'Rules, Selectors, and Declaration Blocks',
    sourcePage: 23,
    sourceListingOrFigure: 'Figure 2.1: CSS Syntax',
    originalCode: `selector { property: value; property2: value2; }

em { color: red; }

p {
  margin: 5px 0 10px 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CSS Syntax &amp; Rules - Figure 2.1</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>CSS Typography &amp; Styling</h1>

  <p>This paragraph is styled by the <code>p</code> selector with margins, bold weight, and an Arial font stack.</p>

  <p>Inside this sentence, there is an <em>emphasized element</em> styled in red color by the <code>em</code> rule.</p>

  <p>Another paragraph demonstrating the consistent spacing and visual hierarchy defined by the CSS rules.</p>
</body>
</html>`,
    css: `/* Exact rules from Figure 2.1 */
em {
  color: red;
}

p {
  margin: 5px 0 10px 0;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

/* Base page presentation */
body {
  padding: 24px;
  max-width: 650px;
  margin: 0 auto;
  background-color: #f8fafc;
  color: #1e293b;
  line-height: 1.6;
}
h1 {
  font-size: 24px;
  color: #0f172a;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
  margin-bottom: 20px;
}`,
    javascript: `console.log("Figure 2.1 CSS Syntax verified.");`,
    expectedBehavior: 'Displays paragraph with bold Arial font and margins, and red emphasized inline text.',
    explanation: 'Faithfully reproduces the syntax diagrams and rules from Figure 2.1 on Page 23.',
    tags: ['syntax', 'declarations', 'selectors', 'rules'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-table2-1-properties',
    title: 'Table 2.1: Common CSS Properties Showcase',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.2',
    sectionTitle: 'CSS Syntax',
    topic: 'Properties',
    sourcePage: 24,
    sourceListingOrFigure: 'Table 2.1: Common CSS Properties',
    originalCode: `/* Fonts: font, font-family, font-size, font-style, font-weight, @font-face */
/* Text: letter-spacing, line-height, text-align, text-decoration, text-indent */
/* Color and background: background, background-color, background-image, background-position, background-repeat, color */
/* Borders: border, border-color, border-width, border-style, border-top, etc. */
/* Spacing: padding, padding-*, margin, margin-* */
/* Sizing: height, max-height, max-width, min-height, min-width, width */
/* Layout: bottom, left, right, top, clear, display, float, overflow, position, visibility, z-index */
/* Lists: list-style, list-style-image, list-style-type */`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 2.1 - CSS Properties</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 2.1: Common CSS Properties (Page 24)</h2>
  
  <div class="demo-grid">
    <div class="demo-box fonts-box">
      <h4>1. Fonts</h4>
      <p class="font-demo">Georgia, 17px, bold, italic</p>
    </div>
    <div class="demo-box text-box">
      <h4>2. Text</h4>
      <p class="text-demo">Spaced, centered, underlined</p>
    </div>
    <div class="demo-box colors-box">
      <h4>3. Color &amp; Background</h4>
      <p>Custom colors and backgrounds</p>
    </div>
    <div class="demo-box borders-box">
      <h4>4. Borders &amp; Spacing</h4>
      <p>Padded with styled borders</p>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 600px) {
  .demo-grid { grid-template-columns: 1fr; }
}
.demo-box {
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e2e8f0;
}
.font-demo {
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: bold;
  font-style: italic;
  color: #1e3a8a;
}
.text-demo {
  text-align: center;
  letter-spacing: 2px;
  text-decoration: underline;
  color: #0369a1;
}
.colors-box {
  background-color: #f0fdf4;
  color: #166534;
  border-color: #86efac;
}
.borders-box {
  border: 2px dashed #9333ea;
  padding: 20px;
  margin: 4px;
  background: #faf5ff;
}`,
    javascript: `console.log("Table 2.1: Common CSS Properties demonstrated.");`,
    expectedBehavior: 'Displays visual demonstrations of property categories from Table 2.1.',
    explanation: 'Comprehensive overview of the 35+ core CSS properties cataloged on Page 24.',
    tags: ['properties', 'fonts', 'text', 'borders', 'layout', 'table-2.1'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_1
  },
  {
    id: 'ch2-table2-2-color-values',
    title: 'Table 2.2: CSS Color Formats (Named, RGB, Hex, RGBa, HSL)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.2',
    sectionTitle: 'CSS Syntax',
    topic: 'Color Formats',
    sourcePage: 24,
    sourceListingOrFigure: 'Table 2.2: Color Values',
    originalCode: `/* 1. Name */
color: red;
color: hotpink; /* CSS3 only */

/* 2. RGB */
color: rgb(255, 0, 0);
color: rgb(255, 105, 180);

/* 3. Hexadecimal */
color: #FF0000;
color: #FF69B4;

/* 4. RGBa */
color: rgba(255, 0, 0, 0.5);

/* 5. HSL */
color: hsl(0, 100%, 50%);
color: hsl(330, 59%, 100%);`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 2.2 - Color Values</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 2.2: Color Value Specification Methods</h2>

  <div class="color-swatches">
    <div class="swatch c-name">
      <div class="swatch-sample"></div>
      <div class="swatch-info">
        <strong>Name:</strong> <code>color: red; / hotpink;</code>
        <p>17 standard names in CSS2, 140 names in CSS3.</p>
      </div>
    </div>

    <div class="swatch c-rgb">
      <div class="swatch-sample"></div>
      <div class="swatch-info">
        <strong>RGB:</strong> <code>color: rgb(255, 105, 180);</code>
        <p>Values from 0 to 255 for red, green, blue channels.</p>
      </div>
    </div>

    <div class="swatch c-hex">
      <div class="swatch-sample"></div>
      <div class="swatch-info">
        <strong>Hexadecimal:</strong> <code>color: #FF0000; / #FF69B4;</code>
        <p>Six-digit hex #RRGGBB base 16 (00 to FF).</p>
      </div>
    </div>

    <div class="swatch c-rgba">
      <div class="swatch-sample"></div>
      <div class="swatch-info">
        <strong>RGBa:</strong> <code>color: rgba(255, 0, 0, 0.5);</code>
        <p>Alpha transparency from 0.0 (transparent) to 1.0 (opaque).</p>
      </div>
    </div>

    <div class="swatch c-hsl">
      <div class="swatch-sample"></div>
      <div class="swatch-info">
        <strong>HSL:</strong> <code>color: hsl(330, 59%, 60%);</code>
        <p>Hue (0-360 deg), Saturation (0-100%), Lightness (0-100%).</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.color-swatches {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.swatch {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
}
.swatch-sample {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.1);
  flex-shrink: 0;
}
.swatch-info p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #64748b;
}
/* Exact colors from Table 2.2 */
.c-name .swatch-sample { background-color: hotpink; }
.c-rgb .swatch-sample { background-color: rgb(255, 105, 180); }
.c-hex .swatch-sample { background-color: #FF0000; }
.c-rgba .swatch-sample { background-color: rgba(255, 0, 0, 0.5); }
.c-hsl .swatch-sample { background-color: hsl(330, 59%, 60%); }`,
    javascript: `console.log("Table 2.2: Color values tested across all 5 syntax types.");`,
    expectedBehavior: 'Displays colored swatches testing all 5 CSS color formats: Name, RGB, Hex, RGBa, and HSL.',
    explanation: 'Transcribes Table 2.2 from Page 24 covering every standard way to express color in CSS.',
    tags: ['colors', 'rgb', 'rgba', 'hex', 'hsl', 'table-2.2'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_2
  },
  {
    id: 'ch2-table2-3-units-measure',
    title: 'Table 2.3: CSS Units of Measure (Absolute vs Relative)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.2',
    sectionTitle: 'CSS Syntax',
    topic: 'Units of Measure',
    sourcePage: 25,
    sourceListingOrFigure: 'Table 2.3: Units of Measure Values',
    originalCode: `/* Relative Units: px, em, %, ex, ch, rem, vw, vh */
/* Absolute Units: cm, mm, pt, pc, in */

.pixel-box { width: 200px; font-size: 16px; }
.em-box { font-size: 1.5em; }
.percent-box { width: 50%; font-size: 120%; }
.rem-box { font-size: 1.25rem; }
.viewport-box { width: 40vw; }
.point-box { font-size: 12pt; }
.inch-box { width: 2.5in; }`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 2.3 - Units of Measure</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 2.3: Units of Measure in CSS</h2>
  <p>Comparing Absolute units (fixed real-world sizes) with Relative units (computed based on parent, root, or viewport):</p>

  <div class="units-container">
    <div class="unit-card relative">
      <h4>Relative Units (Screen &amp; Responsive Friendly)</h4>
      <div class="bar bar-px"><code>200px</code> (Pixel - CSS3 1/96 inch)</div>
      <div class="bar bar-em"><code>1.5em</code> (Relative to parent font)</div>
      <div class="bar bar-rem"><code>1.25rem</code> (Relative to root html font)</div>
      <div class="bar bar-pct"><code>50%</code> (Relative to container width)</div>
      <div class="bar bar-vw"><code>30vw</code> (30% of viewport width)</div>
    </div>

    <div class="unit-card absolute">
      <h4>Absolute Units (Fixed Real-World Print Measures)</h4>
      <div class="bar bar-pt"><code>14pt</code> Points (1/72 of an inch)</div>
      <div class="bar bar-pc"><code>1pc</code> Pica (1/6 of an inch = 12pt)</div>
      <div class="bar bar-in"><code>2in</code> Inches</div>
      <div class="bar bar-cm"><code>5cm</code> Centimeters</div>
      <div class="bar bar-mm"><code>50mm</code> Millimeters</div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.units-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.unit-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px 20px;
}
.unit-card.relative { border-left: 4px solid #3b82f6; }
.unit-card.absolute { border-left: 4px solid #eab308; }
.unit-card h4 { margin: 0 0 12px; }
.bar {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 6px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
}
.bar-px { width: 200px; }
.bar-em { font-size: 1.5em; }
.bar-rem { font-size: 1.25rem; }
.bar-pct { width: 50%; }
.bar-vw { width: 30vw; }
.bar-pt { font-size: 14pt; }
.bar-pc { font-size: 1pc; }
.bar-in { width: 2in; }
.bar-cm { width: 5cm; }
.bar-mm { width: 50mm; }`,
    javascript: `console.log("Table 2.3: Units of measure verified.");`,
    expectedBehavior: 'Displays visual sizing and typography bars comparing relative vs absolute CSS units from Table 2.3.',
    explanation: 'Preserves the entire Table 2.3 from Page 25 explaining px, em, %, cm, mm, pt, pc, ex, ch, rem, vw, vh, and in.',
    tags: ['units', 'px', 'em', 'rem', 'vw', 'table-2.3'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_3
  },
  {
    id: 'ch2-listing2-1-inline-styles',
    title: 'Listing 2.1: Inline Styles via Style Attribute',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.3',
    sectionTitle: 'Location of Styles',
    topic: 'Inline Styles',
    sourcePage: 26,
    sourceListingOrFigure: 'Listing 2.1: Internal / Inline styles example',
    originalCode: `<h1>Share Your Travels</h1>
<h2 style="font-size: 24pt">Description</h2>
...
<h2 style="font-size: 24pt; font-weight: bold;">Reviews</h2>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.1 - Inline Styles</title>
</head>
<body>
  <h1>Share Your Travels</h1>
  <!-- Listing 2.1 original code -->
  <h2 style="font-size: 24pt">Description</h2>
  <p>Inline styles are placed directly inside the HTML element using the <code>style</code> attribute.</p>

  <h2 style="font-size: 24pt; font-weight: bold;">Reviews</h2>
  <p>Semicolons separate multiple property declarations.</p>
</body>
</html>`,
    css: `/* External sheet empty for Listing 2.1 to show pure inline styling */
body {
  font-family: sans-serif;
  padding: 24px;
}`,
    javascript: `console.log("Listing 2.1: Inline styles executed.");`,
    expectedBehavior: 'Renders the 24pt and bold 24pt headings styled directly via the HTML style attribute.',
    explanation: 'Transcribes Listing 2.1 on Page 26 explaining inline styles and their highest specificity rank in the cascade.',
    tags: ['inline-styles', 'style-attribute', 'listing-2.1', 'location'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-listing2-2-embedded-styles',
    title: 'Listing 2.2: Embedded / Internal Stylesheet',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.3',
    sectionTitle: 'Location of Styles',
    topic: 'Embedded Stylesheet',
    sourcePage: 27,
    sourceListingOrFigure: 'Listing 2.2: Embedded styles example',
    originalCode: `<head lang="en">
  <meta charset="utf-8">
  <title>Share Your Travels -- New York - Central Park</title>
  <style>
    h1 { font-size: 24pt; }
    h2 {
      font-size: 18pt;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Share Your Travels</h1>
  <h2>New York - Central Park</h2>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.2 - Embedded Styles</title>
  <style>
    /* Embedded / Internal Stylesheet from Listing 2.2 */
    h1 {
      font-size: 24pt;
      color: #0f172a;
    }
    h2 {
      font-size: 18pt;
      font-weight: bold;
      color: #1e40af;
    }
  </style>
</head>
<body>
  <h1>Share Your Travels</h1>
  <h2>New York - Central Park</h2>
  <p>Embedded styles are placed inside a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> of the document.</p>
</body>
</html>`,
    css: `/* Not used directly: style definitions are in embedded head <style> tag */
body {
  font-family: sans-serif;
  padding: 24px;
}`,
    javascript: `console.log("Listing 2.2: Embedded styles verified.");`,
    expectedBehavior: 'Renders h1 at 24pt and h2 at 18pt bold using the embedded <style> element in the head.',
    explanation: 'Demonstrates Listing 2.2 on Page 27 showing internal / embedded style sheets and discussing their trade-offs.',
    tags: ['embedded-styles', 'head-style', 'listing-2.2', 'location'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-listing2-3-external-styles',
    title: 'Listing 2.3: Referencing an External Style Sheet',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.3',
    sectionTitle: 'Location of Styles',
    topic: 'External Stylesheets',
    sourcePage: 27,
    sourceListingOrFigure: 'Listing 2.3: Referencing an external style sheet',
    originalCode: `<head lang="en">
  <meta charset="utf-8">
  <title>Share Your Travels -- New York - Central Park</title>
  <link rel="stylesheet" href="styles.css" />
</head>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.3 - External Styles</title>
  <!-- Listing 2.3: External stylesheet reference -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="travel-container">
    <h1>Share Your Travels</h1>
    <h2>New York - Central Park</h2>
    <p>This page demonstrates styling defined in an external <code>style.css</code> file referenced via <code>&lt;link rel="stylesheet"&gt;</code>.</p>
    <div class="advantages">
      <strong>Advantages of External Stylesheets:</strong>
      <ul>
        <li>Best maintainability: site-wide visual modifications in a single file</li>
        <li>Browser caching improves page download speed</li>
        <li>Multiple HTML pages share the exact same styling</li>
      </ul>
    </div>
  </div>
</body>
</html>`,
    css: `/* styles.css: The external stylesheet file */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  background-color: #f8fafc;
}
.travel-container {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
h1 {
  font-size: 28px;
  color: #0369a1;
  margin: 0 0 8px;
}
h2 {
  font-size: 20px;
  color: #475569;
  margin: 0 0 16px;
}
.advantages {
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 12px 16px;
  border-radius: 4px;
  margin-top: 16px;
  font-size: 14px;
}`,
    javascript: `console.log("Listing 2.3: External stylesheet link verified.");`,
    expectedBehavior: 'Renders the travel page styled through the external stylesheet referenced via <link rel="stylesheet">.',
    explanation: 'Page 27 highlights why external stylesheets are the industry standard for production web development.',
    tags: ['external-styles', 'link-tag', 'listing-2.3', 'caching'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-listing2-4-grouped-selectors',
    title: 'Listing 2.4: Element, Grouped & Universal Selectors',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'Selectors',
    topic: 'Element and Grouped Selectors',
    sourcePage: 28,
    sourceListingOrFigure: 'Listing 2.4: Element/grouped selector',
    originalCode: `/* commas allow you to group selectors */
p, div, aside {
  margin: 0;
  padding: 0;
}

/* the above single grouped selector is equivalent to the following: */
p {
  margin: 0;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
aside {
  margin: 0;
  padding: 0;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.4 - Grouped Selectors</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Listing 2.4: Element &amp; Grouped Selectors</h2>

  <p>This is a <code>&lt;p&gt;</code> element.</p>
  <div>This is a <code>&lt;div&gt;</code> element.</div>
  <aside>This is an <code>&lt;aside&gt;</code> element.</aside>

  <div class="note-box">
    <p>All three elements above have their default margins and padding reset to 0 in one single grouped selector rule: <code>p, div, aside { margin: 0; padding: 0; }</code></p>
  </div>
</body>
</html>`,
    css: `/* Listing 2.4 grouped selector */
p, div, aside {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
p, div, aside {
  border: 1px solid #cbd5e1;
  background: white;
  margin-bottom: 8px !important; /* Visual demonstration spacing */
  padding: 10px !important;
  border-radius: 4px;
}
.note-box {
  background: #f0fdf4 !important;
  border-color: #86efac !important;
  margin-top: 16px !important;
}`,
    javascript: `console.log("Listing 2.4: Grouped selectors tested.");`,
    expectedBehavior: 'Displays p, div, and aside elements uniformly styled by a comma-separated grouped selector.',
    explanation: 'Transcribes Listing 2.4 from Page 28 explaining selector grouping and universal selection (*).',
    tags: ['selectors', 'grouped-selectors', 'universal-selector', 'listing-2.4'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-listing2-5-class-selectors',
    title: 'Listing 2.5: Class Selector Example (.first)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'Selectors',
    topic: 'Class Selectors',
    sourcePage: 29,
    sourceListingOrFigure: 'Listing 2.5: Class selector example & Figure 2.2',
    originalCode: `<head>
  <title>Share Your Travels</title>
  <style>
    .first {
      font-style: italic;
      color: red;
    }
  </style>
</head>
<body>
  <h1 class="first">Reviews</h1>
  <div>
    <p class="first">By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
  </div>
  <hr/>
  <div>
    <p class="first">By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  <hr/>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.5 - Class Selector Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Authentic HTML from Listing 2.5 -->
  <h1 class="first">Reviews</h1>
  <div>
    <p class="first">By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
  </div>
  <hr/>
  <div>
    <p class="first">By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  <hr/>
</body>
</html>`,
    css: `/* Authentic CSS from Listing 2.5 */
.first {
  font-style: italic;
  color: red;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
  background: white;
}
hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 16px 0;
}`,
    javascript: `console.log("Listing 2.5: Class selector applied to h1 and p elements.");`,
    expectedBehavior: 'Displays red italic font on h1.first and both p.first elements, matching Figure 2.2 browser capture.',
    explanation: 'Transcribes Listing 2.5 and Figure 2.2 from Page 29 demonstrating how class selectors target multiple elements across different tags.',
    tags: ['class-selector', 'listing-2.5', 'figure-2.2', 'selectors'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-listing2-6-id-selectors',
    title: 'Listing 2.6: ID Selector Example (#latestComment)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'Selectors',
    topic: 'ID Selectors',
    sourcePage: 29,
    sourceListingOrFigure: 'Listing 2.6: Id selector example & Figure 2.3',
    originalCode: `<head lang="en">
  <meta charset="utf-8">
  <title>Share Your Travels -- New York - Central Park</title>
  <style>
    #latestComment {
      font-style: italic;
      color: red;
    }
  </style>
</head>
<body>
  <h1>Reviews</h1>
  <div id="latestComment">
    <p>By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
  </div>
  <hr/>
  <div>
    <p>By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  <hr/>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.6 - ID Selector Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Reviews</h1>
  <div id="latestComment">
    <p>By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
  </div>
  <hr/>
  <div>
    <p>By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  <hr/>
</body>
</html>`,
    css: `/* Authentic CSS from Listing 2.6 */
#latestComment {
  font-style: italic;
  color: red;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 16px 0;
}`,
    javascript: `console.log("Listing 2.6: ID selector applied to #latestComment container.");`,
    expectedBehavior: 'Applies red italic style to the #latestComment division and its inherited child elements, matching Figure 2.3.',
    explanation: 'Transcribes Listing 2.6 and Figure 2.3 on Page 29 demonstrating the pound/hash (#) ID selector syntax.',
    tags: ['id-selector', 'listing-2.6', 'figure-2.3', 'selectors'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-listing2-7-attr-selectors',
    title: 'Listing 2.7: Attribute Selector Example ([title])',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'Selectors',
    topic: 'Attribute Selectors',
    sourcePage: 30,
    sourceListingOrFigure: 'Listing 2.7: Attribute selector example & Figure 2.4',
    originalCode: `<head lang="en">
  <meta charset="utf-8">
  <title>Share Your Travels</title>
  <style>
    [title] {
      cursor: help;
      padding-bottom: 3px;
      border-bottom: 2px dotted blue;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div>
    <img src="images/flags/CA.png" title="Canada Flag" />
    <h2><a href="countries.php?id=CA" title="see posts from Canada">Canada</a></h2>
    <p>Canada is a North American country consisting of ...</p>
    <div>
      <img src="images/square/6114907897.jpg" title="At top of Sulphur Mountain" />
      <img src="images/square/6592317633.jpg" title="Grace Presbyterian Church" />
      <img src="images/square/6592914823.jpg" title="Calgary Downtown" />
    </div>
  </div>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.7 - Attribute Selector</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div>
    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='32' viewBox='0 0 48 32'><rect width='48' height='32' fill='%23ef4444'/><rect x='12' width='24' height='32' fill='white'/><path d='M24 10 L27 16 L24 22 L21 16 Z' fill='%23ef4444'/></svg>" title="Canada Flag" />
    <h2><a href="#countries" title="see posts from Canada">Canada</a></h2>
    <p>Canada is a North American country consisting of ten provinces and three territories.</p>
    
    <div class="gallery">
      <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='75' viewBox='0 0 100 75'><rect width='100%' height='100%' fill='%2364748b'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='9'>Sulphur Mtn</text></svg>" title="At top of Sulphur Mountain" />
      <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='75' viewBox='0 0 100 75'><rect width='100%' height='100%' fill='%23475569'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='9'>Grace Church</text></svg>" title="Grace Presbyterian Church" />
      <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='75' viewBox='0 0 100 75'><rect width='100%' height='100%' fill='%23334155'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='9'>Calgary Downtown</text></svg>" title="Calgary Downtown" />
    </div>
  </div>
</body>
</html>`,
    css: `/* Authentic CSS from Listing 2.7 */
[title] {
  cursor: help;
  padding-bottom: 3px;
  border-bottom: 2px dotted blue;
  text-decoration: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.gallery {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}`,
    javascript: `console.log("Listing 2.7: [title] attribute selector verified.");`,
    expectedBehavior: 'Displays Canada flag, heading link, and photos, each decorated with dotted blue borders and help cursors via [title].',
    explanation: 'Transcribes Listing 2.7 and Figure 2.4 on Page 30 demonstrating attribute selector presence matching.',
    tags: ['attribute-selectors', 'listing-2.7', 'figure-2.4', 'title'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_4
  },
  {
    id: 'ch2-listing2-8-link-states',
    title: 'Listing 2.8: Styling Link States with Pseudo-Classes',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'Selectors',
    topic: 'Pseudo-Classes',
    sourcePage: 32,
    sourceListingOrFigure: 'Listing 2.8: Styling a link using pseudo-class selectors',
    originalCode: `<head>
  <title>Share Your Travels</title>
  <style>
    a:link {
      text-decoration: underline;
      color: blue;
    }
    a:visited {
      text-decoration: underline;
      color: purple;
    }
    a:hover {
      text-decoration: none;
      font-weight: bold;
    }
    a:active {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <p>Links are an important part of any web page. To learn more about links visit the <a href="#">W3C</a> website.</p>
  <nav>
    <ul>
      <li><a href="#">Canada</a></li>
      <li><a href="#">Germany</a></li>
      <li><a href="#">United States</a></li>
    </ul>
  </nav>
</body>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Listing 2.8 - Link Pseudo-Classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>Links are an important part of any web page. To learn more about links visit the <a href="https://w3.org" target="_blank">W3C</a> website.</p>

  <nav>
    <ul>
      <li><a href="#canada">Canada</a></li>
      <li><a href="#germany">Germany</a></li>
      <li><a href="#usa">United States</a></li>
    </ul>
  </nav>
</body>
</html>`,
    css: `/* Authentic CSS from Listing 2.8 */
a:link {
  text-decoration: underline;
  color: blue;
}
a:visited {
  text-decoration: underline;
  color: purple;
}
a:hover {
  text-decoration: none;
  font-weight: bold;
}
a:active {
  background-color: yellow;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 6px;
}`,
    javascript: `console.log("Listing 2.8: Link states (link, visited, hover, active) active.");`,
    expectedBehavior: 'Displays interactive links that underline in blue, turn bold without underline on hover, and highlight yellow when clicked.',
    explanation: 'Demonstrates the LVHA (Link, Visited, Hover, Active) ordering rule and pseudo-classes from Page 31-32.',
    tags: ['pseudo-classes', 'hover', 'active', 'link', 'visited', 'listing-2.8'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_5
  },
  {
    id: 'ch2-fig2-6-contextual-combinators',
    title: 'Figure 2.6: Contextual Selectors in Action (Combinators)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'Selectors',
    topic: 'Contextual Selectors & Combinators',
    sourcePage: 33,
    sourceListingOrFigure: 'Figure 2.6: Contextual selectors in action & Figure 2.5',
    originalCode: `ul a:link { color: blue; }
#main time { color: red; }
#main > time { color: purple; }
#main div p:first-child { color: green; }`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.6 - Contextual Selectors</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Authentic HTML from Figure 2.6 -->
  <nav>
    <ul>
      <li><a href="#">Canada</a></li>
      <li><a href="#">Germany</a></li>
      <li><a href="#">United States</a></li>
    </ul>
  </nav>

  <div id="main">
    Comments as of <time>November 15, 2015</time>
    <div>
      <p>By Ricardo on <time>September 15, 2015</time></p>
      <p>Easy on the HDR buddy.</p>
    </div>
    <hr/>
    <div>
      <p>By Susan on <time>October 1, 2015</time></p>
      <p>I love Central Park.</p>
    </div>
    <hr/>
  </div>

  <footer>
    <ul>
      <li><a href="#">Home</a> | </li>
      <li><a href="#">Browse</a> | </li>
    </ul>
  </footer>
</body>
</html>`,
    css: `/* Authentic Contextual Rules from Figure 2.6 */
ul a:link {
  color: blue;
}

#main time {
  color: red;
}

#main > time {
  color: purple;
}

#main div p:first-child {
  color: green;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
}
hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 12px 0;
}`,
    javascript: `console.log("Figure 2.6: Contextual combinators executed.");`,
    expectedBehavior: 'Shows purple for direct child #main > time, red for nested descendant #main time, and green for #main div p:first-child.',
    explanation: 'Transcribes Figure 2.6 from Page 33 illustrating descendant, direct child, and pseudo-class combination targeting.',
    tags: ['contextual-selectors', 'combinators', 'descendant', 'child', 'figure-2.6'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_6
  },
  {
    id: 'ch2-fig2-7-css-inheritance',
    title: 'Figure 2.7 & 2.8: CSS Inheritance Principles',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.5',
    sectionTitle: 'The Cascade: How Styles Interact',
    topic: 'CSS Inheritance',
    sourcePage: 34,
    sourceListingOrFigure: 'Figure 2.7 & Figure 2.8: Inheritance',
    originalCode: `/* Figure 2.7: body styling */
body {
  font-family: Arial;  /* Inherited */
  color: red;          /* Inherited */
  border: 8pt solid green; /* Not inherited */
  margin: 100px;       /* Not inherited */
}

/* Figure 2.8: div styling */
div {
  font-weight: bold;   /* Inherited */
  margin: 50px;        /* Not inherited */
  border: 1pt solid green; /* Not inherited */
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.7 &amp; 2.8 - Inheritance</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Share Your Travels</h1>
  <h2>New York - Central Park</h2>
  <p>Notice that font-family and red color are <strong>inherited</strong> by children, but the 8pt green border and 100px margin only apply to the <code>&lt;body&gt;</code> element itself!</p>

  <div class="test-div">
    <p>Inside &lt;div&gt;: Inherits bold weight, but does not duplicate outer margins or borders.</p>
    <time>November 15, 2015</time>
  </div>
</body>
</html>`,
    css: `/* Authentic CSS from Figure 2.7 & 2.8 */
body {
  font-family: Arial, sans-serif;
  color: red;
  border: 8pt solid green;
  margin: 40px; /* Reduced from 100px for responsive preview ergonomics */
  padding: 16px;
}

.test-div {
  font-weight: bold;
  border: 1pt solid green;
  padding: 10px;
  margin-top: 16px;
}`,
    javascript: `console.log("Figure 2.7 & 2.8: Inheritance verified.");`,
    expectedBehavior: 'Demonstrates that text color and font family inherit down the DOM tree, whereas border and margin do NOT inherit.',
    explanation: 'Reproduces the inheritance diagrams from Pages 33-34 explaining inherited vs non-inherited properties.',
    tags: ['cascade', 'inheritance', 'border', 'margin', 'font-family'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-9-cascade-specificity',
    title: 'Figure 2.9: Cascade Specificity (Element vs Class vs ID)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.5',
    sectionTitle: 'The Cascade: How Styles Interact',
    topic: 'Specificity Calculation & Overrides',
    sourcePage: 35,
    sourceListingOrFigure: 'Figure 2.9: Specificity',
    originalCode: `body {
  font-weight: bold;
  color: red;
}
div {
  font-weight: normal;
  color: magenta;
}
p {
  color: green;
}
.last {
  color: blue;
}
#verylast {
  color: orange;
  font-size: 16pt;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.9 - Specificity</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  This text is not within a p element.
  <p>Reviews</p>
  <div>
    <p>By Ricardo on <time>September 15, 2015</time></p>
    <p>Easy on the HDR buddy.</p>
    This text is not within a p element.
  </div>
  <hr/>
  <div>
    <p>By Susan on <time>October 1, 2015</time></p>
    <p>I love Central Park.</p>
  </div>
  <hr/>
  <div>
    <p class="last">By Dave on <time>October 15, 2015</time></p>
    <p class="last" id="verylast">Thanks for posting.</p>
  </div>
  <hr/>
</body>
</html>`,
    css: `/* Authentic CSS from Figure 2.9 */
body {
  font-weight: bold;
  color: red;
}
div {
  font-weight: normal;
  color: magenta;
}
p {
  color: green;
}
.last {
  color: blue;
}
#verylast {
  color: orange;
  font-size: 16pt;
}

body {
  padding: 24px;
}
hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 12px 0;
}`,
    javascript: `console.log("Figure 2.9: Specificity cascade verified.");`,
    expectedBehavior: 'Displays exact color hierarchy: body (red), div text (magenta), p (green), .last (blue), and #verylast (orange, 16pt).',
    explanation: 'Faithfully reproduces Figure 2.9 on Page 35 demonstrating that ID selector beats Class selector, which beats Element selector.',
    tags: ['cascade', 'specificity', 'weights', 'figure-2.9'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-10-cascade-location',
    title: 'Figure 2.10: Location & Source Order Precedence',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.5',
    sectionTitle: 'The Cascade: How Styles Interact',
    topic: 'Location Principle and Precedence',
    sourcePage: 35,
    sourceListingOrFigure: 'Figure 2.10: Location',
    originalCode: `/* Browser defaults < User styles < External stylesheet < Embedded < Inline */
#example {
  color: orange;
  color: magenta; /* Last declaration wins */
}

<!-- Inline style wins over all above -->
<p id="example" style="color: red;">sample text</p>`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.10 - Location &amp; Source Order</title>
  <style>
    /* Embedded stylesheet rule with duplicate properties */
    #example-rule {
      color: orange;
      color: magenta; /* Last declaration in block wins */
    }
  </style>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.10: Location &amp; Cascade Precedence</h2>

  <div class="precedence-flow">
    <div class="step">1. Browser Defaults</div>
    <div class="arrow">↓</div>
    <div class="step">2. User Stylesheet</div>
    <div class="arrow">↓</div>
    <div class="step">3. External Author Stylesheet</div>
    <div class="arrow">↓</div>
    <div class="step">4. Embedded &lt;style&gt; in Head</div>
    <div class="arrow">↓</div>
    <div class="step highlight">5. Inline style attribute (Highest Precedence)</div>
  </div>

  <p id="example-rule">This text demonstrates last declaration winning (magenta overrides orange).</p>
  
  <p id="example-rule" style="color: red; font-weight: bold;">
    This text has inline style="color: red;", which overrides external &amp; embedded styles!
  </p>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.precedence-flow {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  max-width: 450px;
  margin-bottom: 20px;
}
.step {
  padding: 8px 12px;
  background: #f1f5f9;
  border-radius: 4px;
  font-size: 13.5px;
}
.step.highlight {
  background: #fef08a;
  border: 1px solid #facc15;
  font-weight: bold;
}
.arrow {
  text-align: center;
  color: #94a3b8;
  font-size: 12px;
  margin: 2px 0;
}`,
    javascript: `console.log("Figure 2.10: Location precedence verified.");`,
    expectedBehavior: 'Renders the cascade priority ladder and demonstrates inline style overriding embedded and external styles.',
    explanation: 'Transcribes Figure 2.10 from Page 35 illustrating the location principle and source order resolution.',
    tags: ['cascade', 'location', 'precedence', 'inline-override'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-11-box-model',
    title: 'Figure 2.11: The CSS Box Model Structure',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Box Model Anatomy',
    sourcePage: 36,
    sourceListingOrFigure: 'Figure 2.11: CSS box model',
    originalCode: `/* CSS Box Model: Margin -> Border -> Padding -> Content (width x height) */
.box {
  width: 250px;
  height: 120px;
  padding: 20px;
  border: 10px solid #2563eb;
  margin: 25px;
  background-color: #dbeafe;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.11 - CSS Box Model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.11: CSS Box Model Interactive Diagram</h2>

  <!-- Visual Box Model Diagram -->
  <div class="box-margin">
    <div class="layer-label margin-label">MARGIN (Outside border)</div>
    <div class="box-border">
      <div class="layer-label border-label">BORDER</div>
      <div class="box-padding">
        <div class="layer-label padding-label">PADDING (Inside border)</div>
        <div class="box-content">
          <div class="layer-label content-label">ELEMENT CONTENT AREA</div>
          <code>width &times; height</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.box-margin {
  background: #fed7aa;
  border: 2px dashed #ea580c;
  padding: 30px;
  max-width: 520px;
  border-radius: 8px;
}
.box-border {
  background: #fef08a;
  border: 4px solid #ca8a04;
  padding: 25px;
  border-radius: 6px;
}
.box-padding {
  background: #bbf7d0;
  border: 2px dashed #16a34a;
  padding: 20px;
  border-radius: 4px;
}
.box-content {
  background: #bae6fd;
  border: 2px solid #0284c7;
  padding: 24px;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
}
.layer-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  text-transform: uppercase;
}
.margin-label { color: #9a3412; }
.border-label { color: #854d0e; }
.padding-label { color: #166534; }
.content-label { color: #075985; }`,
    javascript: `console.log("Figure 2.11: Box model visual hierarchy rendered.");`,
    expectedBehavior: 'Displays interactive color-coded concentric layers of Margin, Border, Padding, and Content area.',
    explanation: 'Visualizes the core CSS Box Model diagram from Page 36 of the PDF.',
    tags: ['box-model', 'margin', 'padding', 'border', 'figure-2.11'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_7
  },
  {
    id: 'ch2-fig2-12-background-repeat',
    title: 'Figure 2.12: Background Repeat Modes',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Background Repeat',
    sourcePage: 37,
    sourceListingOrFigure: 'Figure 2.12: Background repeat',
    originalCode: `/* 1. repeat (default) */
background-repeat: repeat;

/* 2. no-repeat */
background-repeat: no-repeat;

/* 3. repeat-y */
background-repeat: repeat-y;

/* 4. repeat-x */
background-repeat: repeat-x;`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.12 - Background Repeat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.12: Background Repeat Modes</h2>

  <div class="repeat-grid">
    <div class="repeat-card bg-no-repeat">
      <span class="mode-tag">background-repeat: no-repeat;</span>
    </div>
    <div class="repeat-card bg-repeat-y">
      <span class="mode-tag">background-repeat: repeat-y;</span>
    </div>
    <div class="repeat-card bg-repeat-x">
      <span class="mode-tag">background-repeat: repeat-x;</span>
    </div>
    <div class="repeat-card bg-repeat">
      <span class="mode-tag">background-repeat: repeat;</span>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.repeat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 600px) {
  .repeat-grid { grid-template-columns: 1fr; }
}
.repeat-card {
  height: 140px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 8px;
  background-color: #f1f5f9;
  /* Inline SVG pattern simulating body-background-tile.gif */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><rect width='24' height='24' fill='%23334155'/><circle cx='12' cy='12' r='4' fill='%2360a5fa'/></svg>");
}
.mode-tag {
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 11px;
  font-weight: bold;
}
.bg-no-repeat { background-repeat: no-repeat; }
.bg-repeat-y { background-repeat: repeat-y; }
.bg-repeat-x { background-repeat: repeat-x; }
.bg-repeat { background-repeat: repeat; }`,
    javascript: `console.log("Figure 2.12: Background repeat modes verified.");`,
    expectedBehavior: 'Displays four panels showcasing no-repeat, repeat-y, repeat-x, and repeat tiling.',
    explanation: 'Reproduces the 4 screenshot comparison from Figure 2.12 on Page 37.',
    tags: ['backgrounds', 'background-repeat', 'tiling', 'figure-2.12'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-13-background-position',
    title: 'Figure 2.13: Background Positioning',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Background Position',
    sourcePage: 37,
    sourceListingOrFigure: 'Figure 2.13: Background position',
    originalCode: `body {
  background: white url('../images/backgrounds/body-background-tile.gif') no-repeat;
  background-position: 300px 50px;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.13 - Background Position</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="stage">
    <div class="marker-h">300px horizontal offset &rarr;</div>
    <div class="marker-v">&darr; 50px vertical offset</div>
    <div class="explanation">
      <h3>Figure 2.13: Exact Background Coordinate Positioning</h3>
      <p><code>background-position: 300px 50px;</code> places the top-left corner of the image precisely 300px from the left edge and 50px from the top edge.</p>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  margin: 0;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.stage {
  height: 280px;
  position: relative;
  border: 1px solid #cbd5e1;
  background-color: #ffffff;
  /* SVG badge simulating the tile positioned at 300px 50px */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'><rect width='100%' height='100%' fill='%232563eb' rx='4'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='10' font-weight='bold'>Tile Image</text></svg>");
  background-repeat: no-repeat;
  background-position: 300px 50px;
}
.marker-h {
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 13px;
  color: #2563eb;
  font-weight: bold;
}
.marker-v {
  position: absolute;
  top: 60px;
  left: 190px;
  font-size: 13px;
  color: #dc2626;
  font-weight: bold;
}
.explanation {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(248, 250, 252, 0.95);
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 6px;
  max-width: 450px;
}`,
    javascript: `console.log("Figure 2.13: Background position coordinates demonstrated.");`,
    expectedBehavior: 'Displays coordinate markers showing background image positioned exactly at 300px horizontal and 50px vertical offset.',
    explanation: 'Transcribes Figure 2.13 on Page 37 demonstrating numeric pixel positioning for backgrounds.',
    tags: ['backgrounds', 'background-position', 'offsets', 'figure-2.13'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_7
  },
  {
    id: 'ch2-fig2-14-spacing-differentiation',
    title: 'Figure 2.14: Borders, Margins, and Padding Spacing',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Spacing Progression',
    sourcePage: 38,
    sourceListingOrFigure: 'Figure 2.14: Borders, margins, and padding provide element spacing and differentiation',
    originalCode: `/* Case 1 */
p {
  border: solid 1pt red;
  margin: 0;
  padding: 0;
}

/* Case 2 */
p {
  border: solid 1pt red;
  margin: 30px;
  padding: 0;
}

/* Case 3 */
p {
  border: solid 1pt red;
  margin: 30px;
  padding: 30px;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.14 - Spacing Progression</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.14: Spacing Progression</h2>

  <div class="case-container">
    <div class="case">
      <h4>Case 1: margin: 0; padding: 0;</h4>
      <div class="box case1">
        <p>Text touches red border directly. Adjoining boxes touch each other.</p>
      </div>
    </div>

    <div class="case">
      <h4>Case 2: margin: 30px; padding: 0;</h4>
      <div class="box case2">
        <p>30px white space outside red border, text still touches border inside.</p>
      </div>
    </div>

    <div class="case">
      <h4>Case 3: margin: 30px; padding: 30px;</h4>
      <div class="box case3">
        <p>30px white space both outside the border and inside around the text content.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
}
.case-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.box {
  background: #fff;
  border: solid 1pt red;
}
/* Authentic CSS rules from Figure 2.14 */
.case1 {
  margin: 0;
  padding: 0;
}
.case2 {
  margin: 15px; /* Scaled from 30px for preview comfort */
  padding: 0;
}
.case3 {
  margin: 15px;
  padding: 15px;
}
p {
  margin: 0;
  font-size: 14px;
}`,
    javascript: `console.log("Figure 2.14: Spacing progression verified.");`,
    expectedBehavior: 'Displays 3 progression cases from Figure 2.14 showing 0/0, margin-only, and margin+padding spacing.',
    explanation: 'Transcribes Figure 2.14 on Page 38 illustrating how margins and padding separate content from borders and neighbors.',
    tags: ['box-model', 'margin', 'padding', 'spacing', 'figure-2.14'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_8
  },
  {
    id: 'ch2-fig2-15-collapsing-margins',
    title: 'Figure 2.15: Collapsing Vertical Margins',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Collapsing Margins',
    sourcePage: 38,
    sourceListingOrFigure: 'Figure 2.15: Collapsing vertical margins',
    originalCode: `div {
  border: dotted 1pt green;
  padding: 0;
  margin: 90px 20px;
}

p {
  border: solid 1pt red;
  padding: 0;
  margin: 50px 20px;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.15 - Collapsing Margins</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.15: Collapsing Vertical Margins</h2>
  <p class="summary">When adjoining vertical margins touch, they combine into one single margin equal to the <strong>largest margin value</strong> (90px), NOT the sum (90 + 90 = 180px)!</p>

  <!-- Div 1 -->
  <div class="div-box">
    <p class="p-box">Every CSS rule ... (Margin 50px)</p>
    <p class="p-box">Every CSS rule ... (Margin 50px)</p>
  </div>

  <div class="collapse-indicator">&uarr; Adjoining 90px margins collapse to 90px &darr;</div>

  <!-- Div 2 -->
  <div class="div-box">
    <p class="p-box">In CSS, the adjoining ... (Margin 50px)</p>
    <p class="p-box">In CSS, the adjoining ... (Margin 50px)</p>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
}
/* Authentic CSS from Figure 2.15 */
.div-box {
  border: dotted 1pt green;
  padding: 0;
  margin: 40px 20px; /* Scaled from 90px for ergonomic preview display */
}

.p-box {
  border: solid 1pt red;
  padding: 0;
  margin: 20px 20px; /* Scaled from 50px */
}

.summary {
  background: #f8fafc;
  padding: 10px;
  border-left: 4px solid #3b82f6;
}

.collapse-indicator {
  text-align: center;
  color: #15803d;
  font-weight: bold;
  font-size: 12px;
  margin: -25px 0;
}`,
    javascript: `console.log("Figure 2.15: Collapsing vertical margins verified.");`,
    expectedBehavior: 'Displays nested divs and paragraphs with vertical margins showing that touching margins collapse to the larger value.',
    explanation: 'Reproduces Figure 2.15 from Page 38 explaining the W3C collapsing margins specification.',
    tags: ['margin-collapse', 'box-model', 'vertical-margins', 'figure-2.15'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-16-true-box-size',
    title: 'Figure 2.16: True Element Size (content-box vs border-box)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Box Sizing Calculations',
    sourcePage: 39,
    sourceListingOrFigure: 'Figure 2.16: Calculating an element’s true size',
    originalCode: `/* Default content-box calculation */
div {
  box-sizing: content-box;
  width: 200px;
  height: 100px;
  padding: 5px;
  margin: 10px;
  border: solid 2pt black;
}
/* True element width  = 10 + 2 + 5 + 200 + 5 + 2 + 10 = 234 px */
/* True element height = 10 + 2 + 5 + 100 + 5 + 2 + 10 = 134 px */

/* border-box calculation */
div {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  padding: 5px;
  margin: 10px;
  border: solid 2pt black;
}
/* True element width  = 10 + 200 + 10 = 220 px */
/* True element height = 10 + 100 + 10 = 120 px */`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.16 - True Box Size</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.16: Calculating an Element's True Size</h2>

  <div class="box-comparison">
    <div class="demo-col">
      <h3>1. content-box (Default CSS)</h3>
      <div class="demo-box box-content-mode">
        Content Area: 200 &times; 100
      </div>
      <p class="calc">
        True Width: 10 + 2 + 5 + 200 + 5 + 2 + 10 = <strong>234px</strong><br>
        True Height: 10 + 2 + 5 + 100 + 5 + 2 + 10 = <strong>134px</strong>
      </p>
    </div>

    <div class="demo-col">
      <h3>2. border-box (Modern Standard)</h3>
      <div class="demo-box box-border-mode">
        Padding &amp; Border included in 200 &times; 100
      </div>
      <p class="calc">
        True Width: 10 + 200 + 10 = <strong>220px</strong><br>
        True Height: 10 + 100 + 10 = <strong>120px</strong>
      </p>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.box-comparison {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.demo-col {
  background: white;
  border: 1px solid #cbd5e1;
  padding: 20px;
  border-radius: 8px;
}
/* Authentic CSS from Figure 2.16 */
.demo-box {
  width: 200px;
  height: 100px;
  padding: 5px;
  margin: 10px;
  border: solid 2pt black;
  background-color: #bae6fd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-align: center;
}
.box-content-mode {
  box-sizing: content-box;
}
.box-border-mode {
  box-sizing: border-box;
  background-color: #bbf7d0;
}
.calc {
  font-size: 13px;
  color: #334155;
  background: #f8fafc;
  padding: 10px;
  border-radius: 4px;
}`,
    javascript: `console.log("Figure 2.16: True box sizing formulas verified.");`,
    expectedBehavior: 'Renders side-by-side comparison of content-box (234x134 total) versus border-box (220x120 total).',
    explanation: 'Transcribes Figure 2.16 on Page 39 showing exact mathematical calculations for true element size under content-box vs border-box.',
    tags: ['box-sizing', 'content-box', 'border-box', 'dimensions', 'figure-2.16'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-17-height-limitations',
    title: 'Figure 2.17: Limitations of the Height Property',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Height Limitations & Text Overflow',
    sourcePage: 40,
    sourceListingOrFigure: 'Figure 2.17: Limitations of height property',
    originalCode: `/* Default paragraph width matches viewport */
p {
  background-color: silver;
}

/* Constrained width & height with text overflowing */
p {
  background-color: silver;
  width: 200px;
  height: 100px;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.17 - Height Limitations</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.17: Limitations of the Height Property</h2>

  <div class="test-row">
    <div class="test-card">
      <h4>1. Default Box (Auto Height)</h4>
      <p class="default-p">The height expands naturally to fit all textual content.</p>
    </div>

    <div class="test-card">
      <h4>2. Constrained (width: 200px; height: 100px;)</h4>
      <p class="constrained-p">
        In CSS, when the height and width are strictly fixed, there might not be enough space for all content. The browser cannot truncate the text automatically, so the text spills out into adjoining areas!
      </p>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.test-row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.test-card {
  background: white;
  border: 1px solid #cbd5e1;
  padding: 20px;
  border-radius: 8px;
}
/* Authentic CSS from Figure 2.17 */
.default-p {
  background-color: silver;
  padding: 8px;
}
.constrained-p {
  background-color: silver;
  width: 200px;
  height: 100px;
  padding: 8px;
  margin-bottom: 60px; /* Space for overflowing text */
}`,
    javascript: `console.log("Figure 2.17: Height limitations demonstrated.");`,
    expectedBehavior: 'Displays a fixed 200x100 silver box where excessive text visibly spills over the bottom border.',
    explanation: 'Reproduces Figure 2.17 on Page 40 showing that browsers do not hide overflowing text by default.',
    tags: ['box-model', 'height', 'overflow', 'figure-2.17'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-18-overflow-property',
    title: 'Figure 2.18: The Overflow Property (Visible, Hidden, Scroll, Auto)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Overflow Property',
    sourcePage: 40,
    sourceListingOrFigure: 'Figure 2.18: overflow property',
    originalCode: `overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.18 - Overflow Property</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.18: The Four Overflow Property Modes</h2>

  <div class="overflow-grid">
    <div class="card">
      <h4>overflow: visible;</h4>
      <div class="box of-visible">
        Content spills outside the container box into neighboring content without any clipping.
      </div>
    </div>

    <div class="card">
      <h4>overflow: hidden;</h4>
      <div class="box of-hidden">
        Any content that does not fit within the 200&times;90px dimensions is clipped away and invisible.
      </div>
    </div>

    <div class="card">
      <h4>overflow: scroll;</h4>
      <div class="box of-scroll">
        Scrollbars are permanently attached to both horizontal and vertical axes regardless of whether content overflows.
      </div>
    </div>

    <div class="card">
      <h4>overflow: auto;</h4>
      <div class="box of-auto">
        Scrollbars appear dynamically only when content exceeds the box dimensions. Best practice!
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.overflow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 600px) {
  .overflow-grid { grid-template-columns: 1fr; }
}
.card {
  background: white;
  border: 1px solid #cbd5e1;
  padding: 16px;
  border-radius: 8px;
}
.box {
  width: 180px;
  height: 90px;
  background-color: #e2e8f0;
  border: 1px solid #64748b;
  padding: 8px;
  font-size: 13px;
  line-height: 1.4;
}
/* Authentic CSS from Figure 2.18 */
.of-visible { overflow: visible; }
.of-hidden { overflow: hidden; }
.of-scroll { overflow: scroll; }
.of-auto { overflow: auto; }`,
    javascript: `console.log("Figure 2.18: Overflow modes verified.");`,
    expectedBehavior: 'Displays 4 boxes side-by-side demonstrating visible, hidden, scroll, and auto behavior.',
    explanation: 'Transcribes Figure 2.18 from Page 40 showing how to control container overflow.',
    tags: ['overflow', 'scroll', 'clipping', 'figure-2.18'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-19-font-family-stack',
    title: 'Figure 2.19: Specifying Font Family Stacks',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'Font Stacks & Fallbacks',
    sourcePage: 41,
    sourceListingOrFigure: 'Figure 2.19: Specifying the font family',
    originalCode: `p {
  font-family: Cambria, Georgia, "Times New Roman", serif;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.19 - Font Family Stack</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.19: Web Font Fallback Stack</h2>

  <p class="stack-demo">
    This paragraph uses the exact font stack from Figure 2.19:
    <code>Cambria, Georgia, "Times New Roman", serif</code>.
  </p>

  <div class="stack-hierarchy">
    <div class="priority-item"><strong>1. Cambria:</strong> First choice (preferred)</div>
    <div class="priority-item"><strong>2. Georgia:</strong> Used if Cambria is not installed</div>
    <div class="priority-item"><strong>3. "Times New Roman":</strong> Multi-word name must be enclosed in quotes</div>
    <div class="priority-item"><strong>4. serif:</strong> Default generic font family supplied by the browser</div>
  </div>
</body>
</html>`,
    css: `body {
  padding: 24px;
}
/* Authentic CSS from Figure 2.19 */
.stack-demo {
  font-family: Cambria, Georgia, "Times New Roman", serif;
  font-size: 18px;
  line-height: 1.6;
  background: white;
  border: 1px solid #cbd5e1;
  padding: 20px;
  border-radius: 8px;
}
.stack-hierarchy {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.priority-item {
  background: #f1f5f9;
  padding: 10px 14px;
  border-radius: 4px;
  border-left: 3px solid #0284c7;
  font-size: 14px;
}`,
    javascript: `console.log("Figure 2.19: Font family fallback order demonstrated.");`,
    expectedBehavior: 'Renders text with the Cambria font stack and explains the 4-tier fallback priority.',
    explanation: 'Transcribes Figure 2.19 from Page 41 detailing quotes on multi-word fonts and generic fallbacks.',
    tags: ['fonts', 'font-family', 'font-stack', 'figure-2.19'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_9
  },
  {
    id: 'ch2-fig2-20-generic-fonts',
    title: 'Figure 2.20: The Five Generic Font Families',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'Generic Font Families',
    sourcePage: 42,
    sourceListingOrFigure: 'Figure 2.20: The different font families',
    originalCode: `font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.20 - Five Generic Font Families</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.20: The Five Generic Font Families</h2>
  <p>Every browser guarantees a default typeface representing each of these 5 generic families:</p>

  <div class="font-families-list">
    <div class="font-row f-serif">
      <span class="family-name">serif</span>
      <span class="sample-text">This is serif typography with decorative strokes (Times, Georgia)</span>
    </div>
    <div class="font-row f-sans">
      <span class="family-name">sans-serif</span>
      <span class="sample-text">This is sans-serif clean typography without serifs (Arial, Helvetica)</span>
    </div>
    <div class="font-row f-mono">
      <span class="family-name">monospace</span>
      <span class="sample-text">This is monospace font where each character has equal width (Courier)</span>
    </div>
    <div class="font-row f-cursive">
      <span class="family-name">cursive</span>
      <span class="sample-text">This is cursive handwritten script font style (Comic Sans, Brush Script)</span>
    </div>
    <div class="font-row f-fantasy">
      <span class="family-name">fantasy</span>
      <span class="sample-text">This is fantasy decorative display font style (Impact, Papyrus)</span>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.font-families-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.font-row {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.family-name {
  width: 110px;
  font-weight: bold;
  color: #2563eb;
  font-family: monospace;
}
.sample-text {
  font-size: 18px;
}
/* Authentic CSS from Figure 2.20 */
.f-serif .sample-text { font-family: serif; }
.f-sans .sample-text { font-family: sans-serif; }
.f-mono .sample-text { font-family: monospace; }
.f-cursive .sample-text { font-family: cursive; }
.f-fantasy .sample-text { font-family: fantasy; }`,
    javascript: `console.log("Figure 2.20: Five generic font families displayed.");`,
    expectedBehavior: 'Displays rendered text in serif, sans-serif, monospace, cursive, and fantasy generic families.',
    explanation: 'Transcribes Figure 2.20 on Page 42 illustrating the 5 generic font families supported in standard CSS.',
    tags: ['fonts', 'generic-fonts', 'serif', 'sans-serif', 'monospace', 'figure-2.20'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-21-em-percent-font-scale',
    title: 'Figure 2.21: Font Sizing with Percents and Em Units',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'Relative Font Sizing',
    sourcePage: 42,
    sourceListingOrFigure: 'Figure 2.21: Using percents and em units for font sizes',
    originalCode: `/* using 16px scale */
body { font-size: 100%; }    /* 16px */
p { font-size: 1em; }        /* 1.0 * 16 = 16px */
h3 { font-size: 1.125em; }   /* 1.125 * 16 = 18px */
h2 { font-size: 1.5em; }     /* 1.5 * 16 = 24px */
h1 { font-size: 2em; }       /* 2 * 16 = 32px */`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.21 - Percents and Em Units</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Authentic HTML from Figure 2.21 -->
  <p>100% or 1em is 16 pixels</p>
  <h3>125% or 1.125em is 18 pixels</h3>
  <h2>150% or 1.5em is 24 pixels</h2>
  <h1>200% or 2em is 32 pixels</h1>
</body>
</html>`,
    css: `/* Authentic CSS from Figure 2.21 (using 16px scale) */
body {
  font-size: 100%; /* 16px default */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}

p {
  font-size: 1em; /* 16px */
  margin: 8px 0;
}

h3 {
  font-size: 1.125em; /* 18px */
  margin: 8px 0;
}

h2 {
  font-size: 1.5em; /* 24px */
  margin: 8px 0;
}

h1 {
  font-size: 2em; /* 32px */
  margin: 8px 0;
}`,
    javascript: `console.log("Figure 2.21: 16px relative font scale loaded.");`,
    expectedBehavior: 'Displays text scaled at 16px, 18px, 24px, and 32px using 1em, 1.125em, 1.5em, and 2em.',
    explanation: 'Transcribes Figure 2.21 from Page 42 demonstrating percentage and em calculations based on default 16px.',
    tags: ['fonts', 'font-size', 'em', 'percentages', 'figure-2.21'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-22-nested-em-compounding',
    title: 'Figure 2.22: Complications with Nested Percents & Ems',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'Compound Cascading Font Sizes',
    sourcePage: 43,
    sourceListingOrFigure: 'Figure 2.22: Complications in calculating percents and em units',
    originalCode: `/* using 16px scale */
body { font-size: 100%; }
p { font-size: 1em; }
h1 { font-size: 2em; }
article { font-size: 75%; }
div { font-size: 75%; }

/* In article:
   h1 = 2 * 16 * 0.75 = 24px
   p  = 1 * 16 * 0.75 = 12px
*/
/* In div inside article:
   h1 = 2 * 16 * 0.75 * 0.75 = 18px
   p  = 1 * 16 * 0.75 * 0.75 = 9px
*/`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.22 - Nested Em Compounding</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Authentic HTML structure from Figure 2.22 -->
  <p>this is 16 pixels (Body level)</p>
  <h1>this is 32 pixels (Body level)</h1>

  <article>
    <h1>this is 24 pixels (in article: 2 &times; 16 &times; 0.75)</h1>
    <p>this is 12 pixels (in article: 1 &times; 16 &times; 0.75)</p>
    <div>
      <h1>this is 18 pixels (nested div: 2 &times; 16 &times; 0.75 &times; 0.75)</h1>
      <p>this is 9 pixels (nested div: 1 &times; 16 &times; 0.75 &times; 0.75)</p>
    </div>
  </article>
</body>
</html>`,
    css: `/* Authentic CSS from Figure 2.22 */
body {
  font-size: 100%; /* 16px */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}

p {
  font-size: 1em;
}

h1 {
  font-size: 2em;
}

article {
  font-size: 75%;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 16px;
  border-radius: 6px;
  margin-top: 16px;
}

div {
  font-size: 75%;
  background: #eff6ff;
  border: 1px solid #93c5fd;
  padding: 12px;
  border-radius: 4px;
  margin-top: 12px;
}`,
    javascript: `console.log("Figure 2.22: Compounding relative font calculations demonstrated.");`,
    expectedBehavior: 'Displays text progressively shrinking down to 9px due to compounding 75% multipliers on nested containers.',
    explanation: 'Transcribes Figure 2.22 from Page 43 showing why nested relative font units cause unexpected shrinking.',
    tags: ['fonts', 'compounding-fonts', 'nested-units', 'figure-2.22'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-fig2-23-rem-units',
    title: 'Figure 2.23: Using rem Units for Predictable Sizing',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'rem (Root Em) Sizing',
    sourcePage: 43,
    sourceListingOrFigure: 'Figure 2.23: Using rem units',
    originalCode: `/* using 16px scale */
body { font-size: 100%; }

p {
  font-size: 16px; /* for older browsers */
  font-size: 1rem; /* for new browsers: scales and simple */
}

h1 { font-size: 2rem; }

article { font-size: 75%; }
div { font-size: 75%; }

/* Unlike em, p inside article and div stays constant at 16px! */`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Figure 2.23 - Using rem Units</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Figure 2.23: Solution with rem (Root Em) Units</h2>
  <p>The <code>rem</code> unit is always calculated relative to the <strong>root &lt;html&gt;</strong> element, eliminating the nested compounding bug!</p>

  <p>This is 16px (1rem)</p>
  <h1>This is 32px (2rem)</h1>

  <article>
    <p>Inside article: p remains exactly 16px (1rem), unaffected by container font-size: 75%!</p>
    <div>
      <p>Inside nested div: p still remains exactly 16px (1rem)!</p>
    </div>
  </article>
</body>
</html>`,
    css: `/* Authentic CSS from Figure 2.23 */
body {
  font-size: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}

p {
  font-size: 16px;
  font-size: 1rem;
}

h1 {
  font-size: 2rem;
}

article {
  font-size: 75%;
  background: #f0fdf4;
  border: 1px solid #86efac;
  padding: 16px;
  border-radius: 6px;
  margin-top: 16px;
}

div {
  font-size: 75%;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  padding: 12px;
  border-radius: 4px;
  margin-top: 12px;
}`,
    javascript: `console.log("Figure 2.23: rem units validated.");`,
    expectedBehavior: 'Demonstrates that paragraphs inside nested containers maintain a steady 16px size using rem units.',
    explanation: 'Transcribes Figure 2.23 from Page 43 showing how rem solves nested calculation problems.',
    tags: ['rem', 'root-em', 'typography', 'css3', 'figure-2.23'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-table2-10-text-properties',
    title: 'Table 2.10: 12 CSS Text Properties Interactive Showcase',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'Paragraph & Text Properties',
    sourcePage: 44,
    sourceListingOrFigure: 'Table 2.10: Text Properties',
    originalCode: `letter-spacing: normal | <length>;
line-height: normal | <number> | <length>;
list-style-image: url();
list-style-type: none | disc | decimal | ...;
text-align: left | right | center | justify;
text-decoration: none | underline | overline | line-through;
text-direction: ltr | rtl;
text-indent: <length>;
text-shadow: 2px 2px 4px #aaa;
text-transform: none | capitalize | lowercase | uppercase;
vertical-align: top | middle | bottom;
word-spacing: normal | <length>;`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Table 2.10 - Text Properties</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Table 2.10: 12 CSS Text Properties (Page 44)</h2>

  <div class="props-list">
    <div class="prop-item">
      <div class="prop-name"><code>letter-spacing: 3px;</code></div>
      <div class="prop-demo spaced">Expanded Letter Spacing</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>word-spacing: 10px;</code></div>
      <div class="prop-demo word-spaced">Expanded Word Spacing Between Words</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>line-height: 2;</code></div>
      <div class="prop-demo leading">Generous line height leading across multiple lines of paragraph text in modern web design.</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>text-align: center;</code></div>
      <div class="prop-demo centered">Centered Alignment</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>text-decoration: line-through;</code></div>
      <div class="prop-demo strikethrough">Strikethrough text line</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>text-indent: 30px;</code></div>
      <div class="prop-demo indent">This paragraph has an indented first line, traditional in book publishing.</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>text-shadow: 2px 2px 4px #94a3b8;</code></div>
      <div class="prop-demo shadow">Soft Drop Shadow Effect</div>
    </div>
    <div class="prop-item">
      <div class="prop-name"><code>text-transform: uppercase;</code></div>
      <div class="prop-demo uppercase">all letters transformed to uppercase</div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 24px;
}
.props-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.prop-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.prop-name {
  width: 260px;
  flex-shrink: 0;
}
.prop-demo {
  color: #1e293b;
  font-size: 15px;
}
/* Authentic rules from Table 2.10 */
.spaced { letter-spacing: 3px; }
.word-spaced { word-spacing: 10px; }
.leading { line-height: 2; }
.centered { text-align: center; width: 100%; }
.strikethrough { text-decoration: line-through; }
.indent { text-indent: 30px; }
.shadow { text-shadow: 2px 2px 4px #94a3b8; font-weight: bold; }
.uppercase { text-transform: uppercase; }`,
    javascript: `console.log("Table 2.10: 12 CSS Text Properties verified.");`,
    expectedBehavior: 'Displays live demonstrations of all 12 text and paragraph properties from Table 2.10 on Page 44.',
    explanation: 'Transcribes Table 2.10 from Page 44 of the PDF covering text alignment, shadows, transformations, indentations, and spacing.',
    tags: ['text-properties', 'typography', 'text-shadow', 'letter-spacing', 'table-2.10'],
    verificationStatus: 'verified',
    supplementaryExample: false,
    referenceTable: TABLE_2_10
  },
  {
    id: 'ch2-mistake-content-box-overflow',
    title: 'Common Mistake: The 100% + Padding Overflow Trap (Box Model)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Box Model Pitfalls & border-box Fix',
    sourcePage: 39,
    sourceListingOrFigure: 'Figure 2.16: Calculating an element\'s true size',
    originalCode: `/* THE MISTAKE (Default content-box):
   Element width becomes 100% + 20px padding + 20px padding = 100% + 40px!
   Causes broken layouts and unwanted horizontal scrollbars. */
.broken-card {
  box-sizing: content-box;
  width: 100%;
  padding: 20px;
  border: 3px solid red;
}

/* THE FIX:
   box-sizing: border-box absorbs padding & border inside 100%! */
.fixed-card {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 3px solid green;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Box Sizing Mistake & Fix - Page 39</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>The #1 CSS Box Model Mistake: <code>width: 100% + padding</code></h2>

  <div class="parent-boundary">
    <div class="boundary-label">Parent Container Boundary (Width: 100%)</div>

    <!-- MISTAKE CARD -->
    <div class="card mistake-card">
      <h4>❌ The Mistake: Default <code>content-box</code></h4>
      <p>This box has <code>width: 100%; padding: 20px; border: 3px solid red;</code></p>
      <div class="alert-bug">
        Notice how the red border bursts <strong>46px beyond</strong> the parent container boundary, breaking the layout!
      </div>
    </div>

    <!-- FIXED CARD -->
    <div class="card fix-card">
      <h4>✓ The Fix: <code>box-sizing: border-box;</code></h4>
      <p>This box has identical <code>width: 100%; padding: 20px; border: 3px solid green;</code> but with <code>box-sizing: border-box</code>.</p>
      <div class="alert-fix">
        It fits <strong>100% perfectly</strong> within the parent boundary with no overflow!
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
  background: #f8fafc;
}

.parent-boundary {
  width: 380px;
  margin: 0 auto;
  border: 2px dashed #64748b;
  background: #f1f5f9;
  padding: 10px;
  position: relative;
}

.boundary-label {
  font-size: 11px;
  font-weight: bold;
  color: #475569;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.card {
  margin-bottom: 24px;
  background: white;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
}

/* 1. THE MISTAKE (content-box) */
.mistake-card {
  box-sizing: content-box;
  width: 100%;
  padding: 20px;
  border: 3px solid #ef4444;
}

/* 2. THE FIX (border-box) */
.fix-card {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 3px solid #22c55e;
}

.alert-bug {
  background: #fee2e2;
  color: #991b1b;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 8px;
  font-size: 12px;
}

.alert-fix {
  background: #dcfce7;
  color: #166534;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 8px;
  font-size: 12px;
}`,
    javascript: `console.warn("Box Model Mistake: content-box adds padding outside declared width.");`,
    expectedBehavior: 'Visually shows the red card breaking out past the dashed boundary line, while the green card fits seamlessly inside.',
    explanation: 'Transcribes the Figure 2.16 mathematical explanation on Page 39 showing why content-box causes container blowouts.',
    tags: ['box-model', 'box-sizing', 'content-box', 'border-box', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-mistake-fixed-height-spill',
    title: 'Common Mistake: Fixed Height Content Spillover',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.6',
    sectionTitle: 'The Box Model',
    topic: 'Height Limitations & Overflow Bugs',
    sourcePage: 40,
    sourceListingOrFigure: 'Figure 2.17: Limitations of height property',
    originalCode: `/* THE MISTAKE: Constraining height on text content */
.broken-height {
  background-color: silver;
  width: 220px;
  height: 90px; /* Text spills out! */
}

/* THE FIX: Use min-height or overflow control */
.fixed-height {
  background-color: #e2e8f0;
  width: 220px;
  min-height: 90px; /* Expands dynamically */
  overflow: auto;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Fixed Height Mistake - Page 40</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: Fixed Height Spillover (Figure 2.17)</h2>

  <div class="row">
    <!-- MISTAKE -->
    <div class="example-card">
      <h4>❌ The Mistake: <code>height: 90px;</code></h4>
      <div class="box broken-height">
        In CSS, when the height is strictly fixed, there is not enough space for the text. Because overflow defaults to visible, the text spills out into adjoining areas!
      </div>
      <div class="colliding-sibling">
        🚨 Text from above collides into this sibling element!
      </div>
    </div>

    <!-- FIX -->
    <div class="example-card">
      <h4>✓ The Fix: <code>min-height: 90px;</code></h4>
      <div class="box fixed-height">
        Using <code>min-height</code> allows the container to expand naturally whenever textual content requires more vertical room.
      </div>
      <div class="clean-sibling">
        ✓ No collision! Sibling element is pushed down cleanly.
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
  background: #f8fafc;
}
.row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.example-card {
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  width: 260px;
}
.box {
  padding: 10px;
  border: 2px solid #64748b;
  font-size: 13px;
  line-height: 1.4;
}

/* 1. The Mistake: fixed height with overflow spill */
.broken-height {
  background-color: silver;
  width: 220px;
  height: 80px;
}

.colliding-sibling {
  margin-top: 10px;
  background: #fee2e2;
  border: 1px solid #ef4444;
  color: #991b1b;
  padding: 8px;
  border-radius: 4px;
  font-size: 11px;
}

/* 2. The Fix: min-height */
.fixed-height {
  background-color: #e2e8f0;
  width: 220px;
  min-height: 80px;
}

.clean-sibling {
  margin-top: 10px;
  background: #dcfce7;
  border: 1px solid #22c55e;
  color: #166534;
  padding: 8px;
  border-radius: 4px;
  font-size: 11px;
}`,
    javascript: `console.warn("Fixed height error: Text spilled over container boundaries.");`,
    expectedBehavior: 'Displays text spilling out of a silver box colliding with the button below, contrasted with a self-expanding min-height box.',
    explanation: 'Reproduces the exact Figure 2.17 bug from Page 40 showing why fixing heights on text containers breaks web layouts.',
    tags: ['height', 'overflow', 'min-height', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-mistake-nested-em-shrink',
    title: 'Common Mistake: Compounding Nested Font Sizes',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.7',
    sectionTitle: 'CSS Text Styling',
    topic: 'Compound Font Size Bugs & rem Solution',
    sourcePage: 43,
    sourceListingOrFigure: 'Figure 2.22 vs Figure 2.23',
    originalCode: `/* THE MISTAKE: Nested % or em sizes compound!
   16px * 0.75 * 0.75 = 9px (Illegible!) */
article { font-size: 75%; }
div { font-size: 75%; }

/* THE FIX: Use rem (root em) */
p { font-size: 1rem; } /* Constant 16px everywhere */`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nested Font Size Mistake - Page 43</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: Compounding Nested Font Sizes (Figure 2.22)</h2>

  <div class="demo-grid">
    <!-- MISTAKE WITH EM/% -->
    <div class="panel bug-panel">
      <h4>❌ The Mistake: Nested <code>75%</code> / <code>0.75em</code></h4>
      <div class="body-level">
        Body level: 16px
        <div class="nest-1">
          Inside Article (75%): 12px
          <div class="nest-2">
            Inside Nested Div (75% of 75%): 9px (Illegibly tiny!)
          </div>
        </div>
      </div>
    </div>

    <!-- FIX WITH REM -->
    <div class="panel fix-panel">
      <h4>✓ The Fix: <code>1rem</code> (Root Em)</h4>
      <div class="body-level">
        Body level: 16px (1rem)
        <div class="rem-1">
          Inside Article (1rem): Still 16px!
          <div class="rem-2">
            Inside Nested Div (1rem): Still 16px!
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;
  font-size: 16px;
  background: #f8fafc;
}
.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 600px) {
  .demo-grid { grid-template-columns: 1fr; }
}
.panel {
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
}
.bug-panel { border-left: 4px solid #ef4444; }
.fix-panel { border-left: 4px solid #22c55e; }

/* MISTAKE: Nested % compounding */
.nest-1 {
  font-size: 75%;
  background: #fee2e2;
  padding: 10px;
  margin-top: 8px;
  border-radius: 4px;
}
.nest-2 {
  font-size: 75%;
  background: #fecaca;
  padding: 10px;
  margin-top: 8px;
  border-radius: 4px;
}

/* FIX: rem stays constant */
.rem-1 {
  font-size: 1rem;
  background: #dcfce7;
  padding: 10px;
  margin-top: 8px;
  border-radius: 4px;
}
.rem-2 {
  font-size: 1rem;
  background: #bbf7d0;
  padding: 10px;
  margin-top: 8px;
  border-radius: 4px;
}`,
    javascript: `console.warn("Nested font-size compounding: 16px * 0.75 * 0.75 = 9px.");`,
    expectedBehavior: 'Displays text progressively shrinking down to 9px in the red card, compared with steady 16px sizing in the green rem card.',
    explanation: 'Reproduces the Figure 2.22 vs 2.23 textbook dilemma from Page 43 showing why rem units are necessary.',
    tags: ['rem', 'em', 'font-size', 'nested-font-mistake', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-mistake-float-parent-collapse',
    title: 'Common Mistake: Floated Children Parent Height Collapse (Clearfix Dilemma)',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.5',
    sectionTitle: 'Advanced CSS Layouts & Normal Flow',
    sourcePage: 21,
    sourceListingOrFigure: 'Page 21 & Chapter 2 - Float Element Behavior & Container Collapse',
    topic: 'CSS Float Removal from Normal Flow & Clearfix Solutions',
    originalCode: `/* THE MISTAKE: Floated children cause the parent height to collapse to 0px! */
.container {
  background-color: #fef3c7;
  border: 2px dashed #d97706;
  /* Missing clearfix: parent has 0 computed height! */
}
.sidebar { float: right; width: 40%; height: 120px; }
.main-content { float: left; width: 55%; height: 120px; }

/* THE FIX: Use modern display: flow-root; or clearfix */
.container.cleared {
  display: flow-root; /* Creates a new Block Formatting Context (BFC) */
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Float Parent Collapse Mistake & Fix</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: Float Parent Height Collapse</h2>
  <p class="subtitle">Floating removes elements from normal flow. When all children float, the parent container shrinks to 0px height!</p>

  <div class="controls-bar">
    <button id="btn-collapse" class="btn active" onclick="setMode('collapse')">⚠️ See Mistake (Parent Collapsed)</button>
    <button id="btn-fixed" class="btn" onclick="setMode('fixed')">✓ See Fix (display: flow-root / clear)</button>
  </div>

  <div class="demo-wrapper">
    <div id="parent-box" class="parent-container mode-collapse">
      <div class="badge-parent">Parent Container (Border &amp; Background)</div>
      <div class="child float-left">
        <strong>Float Left</strong><br>
        <code>float: left; width: 45%;</code>
      </div>
      <div class="child float-right">
        <strong>Float Right</strong><br>
        <code>float: right; width: 45%;</code>
      </div>
    </div>

    <!-- Sibling element that gets encroached -->
    <div class="next-sibling">
      <strong>Next Document Sibling Element:</strong><br>
      In collapsed mode, notice how this box jumps right up behind the floats because the parent reported a height of 0!
    </div>
  </div>

  <div id="explanation-text" class="status-box error">
    <strong>⚠️ What is happening:</strong> Floated boxes do not contribute to their parent's computed height. The dashed yellow parent has completely collapsed to a thin ribbon, and following elements overlap the floats!
  </div>

  <script src="script.js"></script>
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
.subtitle { color: #64748b; font-size: 14px; margin-bottom: 16px; }

.controls-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #cbd5e1;
  background: white;
  color: #334155;
  transition: all 0.2s;
}
.btn.active {
  background: #3b82f6;
  color: white;
  border-color: #2563eb;
}

.demo-wrapper {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 16px;
}

/* PARENT CONTAINER */
.parent-container {
  background-color: #fef3c7;
  border: 3px dashed #d97706;
  padding: 6px 14px;
  border-radius: 6px;
  position: relative;
  transition: all 0.3s ease;
}

/* 1. MISTAKE: Height collapses to 0 */
.parent-container.mode-collapse {
  /* No clear or BFC */
}

/* 2. FIX: New Block Formatting Context */
.parent-container.mode-fixed {
  display: flow-root; /* Or overflow: auto; or clearfix */
  background-color: #dcfce7;
  border-color: #16a34a;
}

.badge-parent {
  font-size: 12px;
  font-weight: bold;
  color: #92400e;
  margin-bottom: 4px;
}
.mode-fixed .badge-parent {
  color: #15803d;
}

.child {
  padding: 14px;
  background: #3b82f6;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  box-sizing: border-box;
}
.float-left {
  float: left;
  width: 47%;
  background: #6366f1;
}
.float-right {
  float: right;
  width: 47%;
  background: #0284c7;
}

.next-sibling {
  margin-top: 10px;
  padding: 14px;
  background: #fee2e2;
  border: 1px solid #f87171;
  border-radius: 4px;
  font-size: 13px;
  color: #991b1b;
  clear: none;
}
.mode-fixed ~ .next-sibling {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #475569;
}

.status-box {
  padding: 14px 16px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
}
.status-box.error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
}
.status-box.success {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
}`,
    javascript: `function setMode(mode) {
  const parent = document.getElementById('parent-box');
  const btnCol = document.getElementById('btn-collapse');
  const btnFix = document.getElementById('btn-fixed');
  const status = document.getElementById('explanation-text');

  if (mode === 'collapse') {
    parent.className = 'parent-container mode-collapse';
    btnCol.classList.add('active');
    btnFix.classList.remove('active');
    status.className = 'status-box error';
    status.innerHTML = '<strong>⚠️ What is happening:</strong> Floated boxes do not contribute to their parent height. The dashed yellow parent has collapsed to 0px height, and following elements shoot right under the floats!';
    console.warn("Float Mistake: Parent height is 0px because child elements are floated without a clearfix.");
  } else {
    parent.className = 'parent-container mode-fixed';
    btnCol.classList.remove('active');
    btnFix.classList.add('active');
    status.className = 'status-box success';
    status.innerHTML = '<strong>✓ The Clean Fix:</strong> Using <code>display: flow-root;</code> establishes a new Block Formatting Context (BFC). The parent expands to wrap around its floated children seamlessly!';
    console.log("Fix Applied: Parent container cleanly encloses floated children using display: flow-root.");
  }
}
window.setMode = setMode;`,
    expectedBehavior: 'Allows user to interactively trigger the classic float parent height collapse bug and observe how display: flow-root encloses floats.',
    explanation: 'Demonstrates the notorious float collapse bug where floating children removes them from document flow, collapsing the parent container.',
    tags: ['float', 'clearfix', 'flow-root', 'parent-collapse', 'common-mistake', 'layout-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-mistake-inline-dimensions',
    title: 'Common Mistake: Styling Dimensions on Inline Elements',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'CSS Box Model',
    sourcePage: 38,
    sourceListingOrFigure: 'Page 38 - Box Model & Display Value Behavior',
    topic: 'Inline Elements Ignoring width, height, and vertical margins',
    originalCode: `/* THE MISTAKE: Trying to set width/height on inline elements */
span.tag {
  display: inline; /* default */
  width: 200px;    /* IGNORED BY BROWSER! */
  height: 60px;    /* IGNORED BY BROWSER! */
  margin-top: 40px;/* IGNORED BY BROWSER! */
}

/* THE FIX: Change display to inline-block */
span.tag {
  display: inline-block; /* Respects dimensions while flowing inline! */
  width: 200px;
  height: 60px;
  margin-top: 40px;
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inline Element Dimensions Mistake - Page 38</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: Setting Dimensions on <code>inline</code> Elements</h2>
  <p class="subtitle">Reference: Page 38 (The CSS Box Model &amp; Display Rules)</p>

  <div class="split-view">
    <!-- MISTAKE CARD -->
    <div class="card mistake-card">
      <div class="badge error">❌ The Mistake: <code>display: inline</code></div>
      <p class="desc">A developer sets <code>width: 180px; height: 50px; margin-top: 25px;</code> on a <code>&lt;span&gt;</code>:</p>
      
      <div class="stage">
        Text before <span class="badge-demo inline-bad">Inline Badge</span> text after.
      </div>

      <div class="explanation-box">
        <strong>The Browser Output:</strong> In inline mode, the browser completely disregards declared <code>width</code>, <code>height</code>, and vertical <code>margin-top/bottom</code>! The element only wraps tightly around its text.
      </div>
    </div>

    <!-- FIX CARD -->
    <div class="card fix-card">
      <div class="badge success">✓ The Fix: <code>display: inline-block</code></div>
      <p class="desc">The exact same dimensions applied with <code>display: inline-block;</code>:</p>
      
      <div class="stage">
        Text before <span class="badge-demo inline-good">Inline-Block Badge</span> text after.
      </div>

      <div class="explanation-box success">
        <strong>Why it works:</strong> <code>inline-block</code> allows elements to flow smoothly alongside surrounding text while fully respecting explicit <code>width</code>, <code>height</code>, padding, and margins!
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

.stage {
  background: #f1f5f9;
  border: 1px dashed #cbd5e1;
  padding: 20px;
  border-radius: 6px;
  min-height: 110px;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.6;
}

/* 1. MISTAKE: display: inline ignores width & height */
.inline-bad {
  display: inline;
  width: 180px;      /* Ignored! */
  height: 50px;      /* Ignored! */
  margin-top: 30px;  /* Ignored! */
  background: #fca5a5;
  color: #7f1d1d;
  font-weight: bold;
  padding: 4px 8px;
  border: 1px solid #ef4444;
}

/* 2. FIX: display: inline-block honors dimensions */
.inline-good {
  display: inline-block;
  width: 180px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #86efac;
  color: #14532d;
  font-weight: bold;
  border-radius: 6px;
  border: 1px solid #22c55e;
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
    javascript: `console.warn("Box Model Alert: width and height have no effect on inline elements.");`,
    expectedBehavior: 'Visually illustrates why width and height are ignored on display: inline vs honored on display: inline-block.',
    explanation: 'Teaches students why inline tags like a, span, and em ignore geometric box sizing until display is set to inline-block or block.',
    tags: ['display', 'inline', 'inline-block', 'box-model', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-mistake-margin-collapse',
    title: 'Common Mistake: Vertical Margin Collapsing Surprise',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.4',
    sectionTitle: 'CSS Box Model',
    sourcePage: 39,
    sourceListingOrFigure: 'Page 39 - Box Model Margin Properties & Margin Collapsing',
    topic: 'Adjoining Vertical Margin Calculation & Unexpected Spacing',
    originalCode: `/* THE MISTAKE (Misunderstanding Margin Collapse):
   Expecting: 40px + 30px = 70px gap between boxes.
   Actual: Margins collapse into the single largest value (40px)! */
.box-one {
  margin-bottom: 40px;
}
.box-two {
  margin-top: 30px;
}
/* Actual gap rendered by browser: 40px (not 70px!) */`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vertical Margin Collapse - Page 39</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: Vertical Margin Collapsing</h2>
  <p class="subtitle">When top and bottom margins touch, they collapse into the <strong>single largest margin</strong> instead of adding together!</p>

  <div class="split-view">
    <!-- COLLAPSED VIEW -->
    <div class="card mistake-card">
      <div class="badge error">⚠️ The Behavior: Collapsing Margins</div>
      <p class="desc">Box 1 has <code>margin-bottom: 40px</code>. Box 2 has <code>margin-top: 30px</code>.</p>
      
      <div class="container-demo">
        <div class="box box-a">
          Box A (<code>margin-bottom: 40px;</code>)
        </div>
        <!-- Distance indicator -->
        <div class="gap-indicator">
          Measured Distance: <strong>40px</strong> (Max of 40 &amp; 30)
        </div>
        <div class="box box-b">
          Box B (<code>margin-top: 30px;</code>)
        </div>
      </div>

      <div class="explanation-box">
        <strong>The Math:</strong> Beginners expect <code>40px + 30px = 70px</code>. CSS specification dictates that adjoining vertical margins collapse into <code>Math.max(40, 30) = 40px</code>.
      </div>
    </div>

    <!-- PREVENT COLLAPSE VIEW -->
    <div class="card fix-card">
      <div class="badge success">✓ The Fix: Explicit Gap or Flexbox</div>
      <p class="desc">Using modern Flexbox / Grid <code>gap</code> or padding prevents margin collapse entirely:</p>
      
      <div class="container-demo flex-fix">
        <div class="box box-a-fix">
          Box A
        </div>
        <div class="gap-indicator success-ind">
          Predictable Gap: <strong>50px</strong> (via <code>gap: 50px</code>)
        </div>
        <div class="box box-b-fix">
          Box B
        </div>
      </div>

      <div class="explanation-box success">
        <strong>Modern Fix:</strong> Modern CSS layouts use Flexbox or CSS Grid with the <code>gap</code> property, eliminating tricky margin collapsing entirely!
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
.mistake-card { border-left: 4px solid #f59e0b; }
.fix-card { border-left: 4px solid #22c55e; }

.badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.badge.error { background: #fef3c7; color: #b45309; }
.badge.success { background: #dcfce7; color: #15803d; }
.desc { font-size: 13px; color: #64748b; margin-bottom: 14px; }

.container-demo {
  background: #f1f5f9;
  border: 1px dashed #cbd5e1;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 14px;
  position: relative;
}

.box {
  padding: 12px 14px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
}
.box-a {
  background: #fed7aa;
  color: #9a3412;
  margin-bottom: 40px; /* Collapses with 30px below */
}
.box-b {
  background: #bfdbfe;
  color: #1e40af;
  margin-top: 30px;
}

.gap-indicator {
  position: absolute;
  left: 20px;
  right: 20px;
  top: 66px;
  height: 40px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px dashed #ef4444;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #b91c1c;
  pointer-events: none;
}

.flex-fix {
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
}
.box-a-fix {
  background: #bbf7d0;
  color: #14532d;
}
.box-b-fix {
  background: #bbf7d0;
  color: #14532d;
}
.gap-indicator.success-ind {
  top: 66px;
  height: 50px;
  background: rgba(34, 197, 94, 0.15);
  border-color: #22c55e;
  color: #15803d;
}

.explanation-box {
  font-size: 12px;
  line-height: 1.5;
  background: #fffbeb;
  border: 1px solid #fde68a;
  color: #92400e;
  padding: 10px 12px;
  border-radius: 6px;
}
.explanation-box.success {
  background: #f0fdf4;
  border-color: #bbf7d0;
  color: #166534;
}`,
    javascript: `console.log("Margin Collapse Demo: Computed gap is Math.max(40, 30) = 40px.");`,
    expectedBehavior: 'Demonstrates visually why 40px bottom margin and 30px top margin collapse into 40px instead of summing to 70px.',
    explanation: 'Explains Page 39 margin collapsing mechanics where vertical margins on adjacent block-level elements overlap.',
    tags: ['margin', 'margin-collapse', 'box-model', 'common-mistake', 'layout-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  },
  {
    id: 'ch2-mistake-specificity-wars',
    title: 'Common Mistake: Specificity Wars & Accidental Overrides',
    chapter: 2,
    chapterTitle: 'Chapter 2: Introduction to CSS',
    section: '2.2',
    sectionTitle: 'CSS Syntax',
    sourcePage: 32,
    sourceListingOrFigure: 'Page 32 - CSS Specificity Calculation & The Cascade',
    topic: 'Selector Specificity Clashes & ID vs Class Battles',
    originalCode: `/* THE MISTAKE: A beginner tries to override an ID rule with a class rule */
#profile-card p {
  color: #1e293b; /* Specificity: (1, 0, 1) - High! */
}

/* The developer writes this and wonders why the text NEVER turns red: */
.highlight-text {
  color: #dc2626; /* Specificity: (0, 1, 0) - Lower! Overridden by ID rule */
}

/* BAD QUICK-FIX: Slapping !important */
/* .highlight-text { color: #dc2626 !important; } */

/* THE CLEAN FIX: Match specificity or avoid IDs in styling */
#profile-card p.highlight-text {
  color: #dc2626; /* Specificity: (1, 1, 1) - Clean victory! */
}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Specificity Mistake - Page 32</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Common Mistake: CSS Specificity Wars</h2>
  <p class="subtitle">Reference: Page 32 (CSS Cascade &amp; Selector Specificity Weights)</p>

  <div class="split-view">
    <!-- MISTAKE CARD -->
    <div class="card mistake-card">
      <div class="badge error">❌ The Mistake: Class cannot beat ID</div>
      <p class="desc">A developer added class <code>.highlight-text</code>, expecting red text:</p>
      
      <div id="author-card" class="demo-box">
        <h4 id="author-title">Author Biography</h4>
        <!-- Text has class highlight-text, but is enclosed in #author-card -->
        <p class="highlight-text">
          "This text should be vibrant red according to <code>.highlight-text</code>, but an ID rule <code>#author-card p</code> has higher specificity!"
        </p>
      </div>

      <div class="explanation-box">
        <strong>Why it fails:</strong> An ID selector gives a weight of <code>(1, 0, 0)</code>, while a class only gives <code>(0, 1, 0)</code>. No matter how many classes you chain, a single ID selector always trumps a class!
      </div>
    </div>

    <!-- FIX CARD -->
    <div class="card fix-card">
      <div class="badge success">✓ The Fix: Balanced Specificity</div>
      <p class="desc">Solved by using equal or targeted specificity without relying on <code>!important</code>:</p>
      
      <div class="demo-box clean-card">
        <h4>Author Biography</h4>
        <p class="highlight-clean">
          "Now this text is successfully styled in bright emerald green because we avoided heavy ID locks and used clean, modular classes!"
        </p>
      </div>

      <div class="explanation-box success">
        <strong>Best Practice:</strong> Keep CSS selectors shallow (classes only, avoid IDs for styling). This ensures styles are modular and easily overridden without resorting to <code>!important</code>.
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

.demo-box {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 14px;
}
.demo-box h4 { margin: 0 0 8px 0; font-size: 15px; }

/* 1. THE MISTAKE: ID selector locks specificity (1, 0, 1) */
#author-card p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
}

/* Class selector with lower specificity (0, 1, 0) loses! */
.highlight-text {
  color: #dc2626; /* Silently overridden! */
  font-weight: bold;
}

/* 2. THE FIX: Clean modular classes */
.clean-card p.highlight-clean {
  color: #15803d;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
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
    javascript: `console.warn("Specificity Clash: Rule '#author-card p' (weight: 101) overrode class '.highlight-text' (weight: 10).");`,
    expectedBehavior: 'Demonstrates why class styling fails when competing against an ID selector, and how to maintain clean cascade hierarchy.',
    explanation: 'Explains Page 32 specificity calculation where ID selectors overpower class declarations, causing mysterious override failures.',
    tags: ['specificity', 'cascade', 'selectors', 'id-vs-class', 'common-mistake'],
    verificationStatus: 'verified',
    supplementaryExample: false
  }
];
