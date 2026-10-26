import { ReferenceTableData } from '../types';

export const TABLE_1_1: ReferenceTableData = {
  tableNumber: 'Table 1.1',
  title: 'Sample Relative Referencing',
  pageNumber: 14,
  columns: ['Relative Link Type', 'Description / Scenario', 'Example Code'],
  items: [
    {
      name: 'Same Directory',
      description: 'To link to a file within the same folder, simply use the file name.',
      exampleSnippet: '<a href="example.html">To link to example.html from about.html</a>'
    },
    {
      name: 'Child Directory',
      description: 'To link to a file within a subdirectory, use the name of the subdirectory and a slash before the file name.',
      exampleSnippet: '<a href="images/logo.gif">To link to logo.gif from about.html</a>'
    },
    {
      name: 'Grandchild/Descendant Directory',
      description: 'To link to a file that is multiple subdirectories below the current one, construct the full path by including each subdirectory name separated by slashes.',
      exampleSnippet: '<a href="css/images/background.gif">To link to background.gif from about.html</a>'
    },
    {
      name: 'Parent/Ancestor Directory',
      description: 'Use "../" to reference a folder above the current one. If trying to reference a file several levels above, string together multiple "../".',
      exampleSnippet: '<a href="../about.html">From members/index.html to about.html</a>\n<a href="../../about.html">From members/randyc/bio.html to about.html</a>'
    },
    {
      name: 'Sibling Directory',
      description: 'Use "../" to move up to the appropriate level, and then use the same technique as for child or grandchild directories.',
      exampleSnippet: '<a href="../images/about.html">From members/index.html to images/about.html</a>\n<a href="../../css/images/background.gif">From members/randyc/bio.html to css/images/background.gif</a>'
    },
    {
      name: 'Root Reference',
      description: 'An alternative approach for ancestor and sibling references is the root reference approach (begins with "/"). NOTE: Works on server, not local filesystem directly.',
      exampleSnippet: '<a href="/about.html">From bio.html to /about.html</a>\n<a href="/images/background.gif">From bio.html to /images/background.gif</a>'
    },
    {
      name: 'Default Document',
      description: 'Web servers allow references to directory names without file names (e.g. index.html or default.html).',
      exampleSnippet: '<a href="members">To index.html in members from about.html</a>\n<a href="/members">Root-relative default document</a>'
    }
  ]
};

export const TABLE_1_2: ReferenceTableData = {
  tableNumber: 'Table 1.2',
  title: 'Common Text-Level Semantic Elements',
  pageNumber: 14,
  columns: ['Element', 'Description', 'Example Snippet'],
  items: [
    { name: '<a>', description: 'Anchor used for hyperlinks', exampleSnippet: '<a href="https://w3c.org">W3C Website</a>' },
    { name: '<abbr>', description: 'An abbreviation', exampleSnippet: '<abbr title="World Wide Web Consortium">W3C</abbr>' },
    { name: '<br>', description: 'Line break', exampleSnippet: 'First line<br>Second line' },
    { name: '<cite>', description: 'Citation (i.e., a reference to another work)', exampleSnippet: '<cite>Fundamentals of Web Development</cite>' },
    { name: '<code>', description: 'Used for displaying code, such as markup or programming code', exampleSnippet: '<code>alert("Hello World");</code>' },
    { name: '<em>', description: 'Emphasis', exampleSnippet: '<em>This is emphasized text</em>' },
    { name: '<mark>', description: 'For displaying highlighted text', exampleSnippet: '<mark>Important note</mark>' },
    { name: '<small>', description: 'For displaying fine-print, i.e., "non-vital" text, such as copyright or legal notices', exampleSnippet: '<small>Copyright &copy; 2026</small>' },
    { name: '<span>', description: 'The inline equivalent of the <div> element. It is generally used to mark text that will receive special formatting using CSS.', exampleSnippet: '<span class="highlight">styled inline text</span>' },
    { name: '<strong>', description: 'For content that is strongly important', exampleSnippet: '<strong>Strongly important warning</strong>' },
    { name: '<time>', description: 'For displaying time and date data', exampleSnippet: '<time datetime="2026-10-26">October 26, 2026</time>' }
  ]
};

export const TABLE_1_3: ReferenceTableData = {
  tableNumber: 'Table 1.3',
  title: 'Common Character Entities',
  pageNumber: 15,
  columns: ['Entity Name', 'Entity Number', 'Description', 'Rendered Symbol'],
  items: [
    { name: '&nbsp;', syntax: '&#160;', description: 'Nonbreakable space. The browser ignores multiple spaces in HTML source. Use this to force spaces.', exampleSnippet: 'Word1&nbsp;&nbsp;&nbsp;Word2' },
    { name: '&lt;', syntax: '&#60;', description: 'Less than symbol ("<")', exampleSnippet: '&lt;div&gt;' },
    { name: '&gt;', syntax: '&#62;', description: 'Greater than symbol (">")', exampleSnippet: '&lt;/div&gt;' },
    { name: '&copy;', syntax: '&#169;', description: 'The &copy; copyright symbol', exampleSnippet: '&copy; 2026 Share Your Travels' },
    { name: '&euro;', syntax: '&#8364;', description: 'The &euro; euro symbol', exampleSnippet: '&euro; 49.99' },
    { name: '&trade;', syntax: '&#8482;', description: 'The &trade; trademark symbol', exampleSnippet: 'WebLab&trade;' },
    { name: '&uuml;', syntax: '&#252;', description: 'The &uuml; - i.e., small u with umlaut mark', exampleSnippet: 'M&uuml;nchen (Munich)' }
  ]
};

export const TABLE_2_1: ReferenceTableData = {
  tableNumber: 'Table 2.1',
  title: 'Common CSS Properties',
  pageNumber: 24,
  columns: ['Property Type', 'Properties Included', 'Description & Common Usage'],
  items: [
    {
      category: 'Fonts',
      name: 'font, font-family, font-size, font-style, font-weight, @font-face',
      description: 'Controls typeface selection, sizing, slant, boldness, and custom web fonts.',
      exampleSnippet: 'font-family: Arial, sans-serif;\nfont-size: 16px;\nfont-weight: bold;\nfont-style: italic;'
    },
    {
      category: 'Text',
      name: 'letter-spacing, line-height, text-align, text-decoration, text-indent',
      description: 'Controls horizontal character spacing, line height (leading), alignment, underlines/strikes, and first-line indenting.',
      exampleSnippet: 'text-align: center;\nline-height: 1.6;\ntext-decoration: underline;\nletter-spacing: 2px;'
    },
    {
      category: 'Color and background',
      name: 'background, background-color, background-image, background-position, background-repeat, color',
      description: 'Sets foreground font colors, background colors, images, tiling behavior, and alignment.',
      exampleSnippet: 'color: #333333;\nbackground-color: #f0f4f8;\nbackground-image: url("bg.png");\nbackground-repeat: no-repeat;'
    },
    {
      category: 'Borders',
      name: 'border, border-color, border-width, border-style, border-top, border-top-color, border-top-width, etc.',
      description: 'Controls lines surrounding element padding: width, style (solid, dashed, dotted), color on individual or all sides.',
      exampleSnippet: 'border: 2px solid #007acc;\nborder-bottom: 3px dotted red;'
    },
    {
      category: 'Spacing',
      name: 'padding, padding-bottom/left/right/top, margin, margin-bottom/left/right/top',
      description: 'Defines spacing inside borders (padding) and outside borders (margin).',
      exampleSnippet: 'padding: 10px 20px;\nmargin: 15px auto;'
    },
    {
      category: 'Sizing',
      name: 'height, max-height, max-width, min-height, min-width, width',
      description: 'Constrains or sets element content dimensions in pixels, percentages, or viewports.',
      exampleSnippet: 'width: 300px;\nmin-height: 150px;\nmax-width: 100%;'
    },
    {
      category: 'Layout',
      name: 'bottom, left, right, top, clear, display, float, overflow, position, visibility, z-index',
      description: 'Directs flow and positioning: block/inline/flex, absolute/relative/fixed, floating, and stacking order.',
      exampleSnippet: 'position: relative;\ndisplay: block;\noverflow: auto;\nz-index: 10;'
    },
    {
      category: 'Lists',
      name: 'list-style, list-style-image, list-style-type',
      description: 'Controls markers for ordered and unordered lists (bullets, numbers, custom icons).',
      exampleSnippet: 'list-style-type: square;\nlist-style: none;'
    }
  ]
};

export const TABLE_2_2: ReferenceTableData = {
  tableNumber: 'Table 2.2',
  title: 'Color Values',
  pageNumber: 24,
  columns: ['Method', 'Description', 'Example Snippets'],
  items: [
    {
      name: 'Name',
      description: 'Use one of 17 standard color names. CSS3 supports 140 standard named colors.',
      exampleSnippet: 'color: red;\ncolor: hotpink; /* CSS3 extended name */'
    },
    {
      name: 'RGB',
      description: 'Uses three different numbers between 0 and 255 to describe the red, green, and blue values of the color.',
      exampleSnippet: 'color: rgb(255, 0, 0);\ncolor: rgb(255, 105, 180);'
    },
    {
      name: 'Hexadecimal',
      description: 'Uses a six-digit hexadecimal number (#RRGGBB) to describe red, green, and blue values (00 to FF).',
      exampleSnippet: 'color: #FF0000;\ncolor: #FF69B4;'
    },
    {
      name: 'RGBa',
      description: 'Defines partially transparent color. The "a" stands for alpha (0.0 fully transparent to 1.0 fully opaque).',
      exampleSnippet: 'color: rgba(255, 0, 0, 0.5);'
    },
    {
      name: 'HSL',
      description: 'Allows you to specify color using Hue (0-360), Saturation (0-100%), and Lightness (0-100%). HSLA adds alpha.',
      exampleSnippet: 'color: hsl(0, 100%, 50%);\ncolor: hsl(330, 59%, 100%);'
    }
  ]
};

export const TABLE_2_3: ReferenceTableData = {
  tableNumber: 'Table 2.3',
  title: 'Units of Measure Values',
  pageNumber: 25,
  columns: ['Unit', 'Description', 'Type', 'CSS Standard'],
  items: [
    { name: 'px', description: 'Pixel. In CSS2 relative; in CSS3 absolute (1/96 of an inch).', type: 'Relative (CSS2) / Absolute (CSS3)' },
    { name: 'em', description: 'Equal to computed value of font-size property of element on which used, or parent font-size.', type: 'Relative' },
    { name: '%', description: 'A measure that is always relative to another value (e.g. parent font size or container width).', type: 'Relative' },
    { name: 'cm', description: 'Centimeters.', type: 'Absolute' },
    { name: 'mm', description: 'Millimeters.', type: 'Absolute' },
    { name: 'pt', description: 'Points (equal to 1/72 of an inch).', type: 'Absolute' },
    { name: 'pc', description: 'Pica (equal to 1/6 of an inch).', type: 'Absolute' },
    { name: 'ex', description: "Rarely used relative measure: expresses size in relation to x-height of element's font.", type: 'Relative' },
    { name: 'ch', description: 'Width of the zero ("0") character of element\'s font.', type: 'Relative (CSS3 only)' },
    { name: 'rem', description: 'Root em: font size of the root element (<html>). Constant throughout document.', type: 'Relative (CSS3 only)' },
    { name: 'vw, vh', description: 'Viewport width and viewport height (1% of viewport dimension). Scales with window resize.', type: 'Relative (CSS3 only)' },
    { name: 'in', description: 'Inches.', type: 'Absolute' }
  ]
};

export const TABLE_2_4: ReferenceTableData = {
  tableNumber: 'Table 2.4',
  title: 'Attribute Selectors',
  pageNumber: 30,
  columns: ['Selector Syntax', 'Matches', 'Example Rule & Explanation'],
  items: [
    { name: '[]', syntax: '[title]', description: 'A specific attribute present on the element.', exampleSnippet: '[title] {\n  border-bottom: 2px dotted blue;\n}\n/* Matches any element with a title attribute */' },
    { name: '[=]', syntax: 'a[title="posts from this country"]', description: 'A specific attribute with an exact specific value.', exampleSnippet: 'a[title="posts from this country"] {\n  color: green;\n}' },
    { name: '[~=]', syntax: '[title~="Countries"]', description: 'A specific attribute whose value matches at least one of the words in a space-delimited list of words.', exampleSnippet: '[title~="Countries"] {\n  font-weight: bold;\n}' },
    { name: '[^=]', syntax: 'a[href^="mailto"]', description: 'A specific attribute whose value begins with a specified value.', exampleSnippet: 'a[href^="mailto"] {\n  padding-left: 20px;\n  background: url("mail-icon.png") no-repeat;\n}' },
    { name: '[*=]', syntax: 'img[src*="flag"]', description: 'A specific attribute whose value contains a substring.', exampleSnippet: 'img[src*="flag"] {\n  box-shadow: 0 0 4px rgba(0,0,0,0.3);\n}' },
    { name: '[$=]', syntax: 'a[href$=".pdf"]', description: 'A specific attribute whose value ends with a specified value.', exampleSnippet: 'a[href$=".pdf"] {\n  color: red;\n  font-weight: bold;\n}' }
  ]
};

export const TABLE_2_5: ReferenceTableData = {
  tableNumber: 'Table 2.5',
  title: 'Common Pseudo-Class and Pseudo-Element Selectors',
  pageNumber: 31,
  columns: ['Selector', 'Type', 'Description', 'Example Snippet'],
  items: [
    { name: 'a:link', type: 'pseudo-class', description: 'Selects links that have not been visited.', exampleSnippet: 'a:link { color: blue; }' },
    { name: 'a:visited', type: 'pseudo-class', description: 'Selects links that have been visited.', exampleSnippet: 'a:visited { color: purple; }' },
    { name: ':focus', type: 'pseudo-class', description: 'Selects elements (such as text boxes or list boxes) that have input focus.', exampleSnippet: 'input:focus { border-color: #0e639c; }' },
    { name: ':hover', type: 'pseudo-class', description: 'Selects elements that the mouse pointer is currently above.', exampleSnippet: 'a:hover { text-decoration: none; font-weight: bold; }' },
    { name: ':active', type: 'pseudo-class', description: 'Selects an element that is being activated by the user (e.g. a link being clicked).', exampleSnippet: 'a:active { background-color: yellow; }' },
    { name: ':checked', type: 'pseudo-class', description: 'Selects a form element currently checked (radio button or checkbox).', exampleSnippet: 'input:checked + label { font-weight: bold; }' },
    { name: ':first-child', type: 'pseudo-class', description: 'Selects an element that is the first child of its parent.', exampleSnippet: 'p:first-child { color: green; }' },
    { name: ':first-letter', type: 'pseudo-element', description: 'Selects the first letter of an element. Useful for drop-caps.', exampleSnippet: 'p:first-letter { font-size: 2em; float: left; }' },
    { name: ':first-line', type: 'pseudo-element', description: 'Selects the first line of an element.', exampleSnippet: 'p:first-line { font-variant: small-caps; }' }
  ]
};

export const TABLE_2_6: ReferenceTableData = {
  tableNumber: 'Table 2.6',
  title: 'Contextual Selectors (Combinators)',
  pageNumber: 32,
  columns: ['Selector', 'Matches', 'Example', 'Explanation'],
  items: [
    { name: 'Descendant', syntax: 'div p', description: 'A specified element that is contained somewhere within another specified element.', exampleSnippet: 'div p {\n  color: #333;\n}', type: 'Any descendant (child, grandchild, etc.)' },
    { name: 'Child', syntax: 'div > h2', description: 'A specified element that is a direct child of the specified element.', exampleSnippet: 'div > h2 {\n  color: #007acc;\n}', type: 'Direct child only' },
    { name: 'Adjacent sibling', syntax: 'h3 + p', description: 'A specified element that is the next sibling (comes directly after) of specified element.', exampleSnippet: 'h3 + p {\n  font-weight: bold;\n}', type: 'Immediate following sibling' },
    { name: 'General sibling', syntax: 'h3 ~ p', description: 'A specified element that shares the same parent and comes anywhere after specified element.', exampleSnippet: 'h3 ~ p {\n  color: gray;\n}', type: 'Any following sibling' }
  ]
};

export const TABLE_2_7: ReferenceTableData = {
  tableNumber: 'Table 2.7',
  title: 'Common Background Properties',
  pageNumber: 36,
  columns: ['Property', 'Description', 'Possible Values / Syntax'],
  items: [
    { name: 'background', description: 'A combined shorthand property that allows you to set multiple background values in one property.', exampleSnippet: 'background: #ffffff url("tile.png") no-repeat right top;' },
    { name: 'background-attachment', description: 'Specifies whether the background image scrolls with the document (default) or remains fixed.', exampleSnippet: 'background-attachment: fixed | scroll;' },
    { name: 'background-color', description: 'Sets the background color of the element.', exampleSnippet: 'background-color: #f3f3f3 | rgb(240,240,240);' },
    { name: 'background-image', description: 'Specifies the background image (jpeg, gif, or png).', exampleSnippet: 'background-image: url("images/background.gif");' },
    { name: 'background-position', description: 'Specifies where on the element the background image will be placed (bottom, center, left, right, top, or x/y offsets).', exampleSnippet: 'background-position: 300px 50px | center center;' },
    { name: 'background-repeat', description: 'Determines whether the background image will be repeated.', exampleSnippet: 'background-repeat: repeat | repeat-x | repeat-y | no-repeat;' },
    { name: 'background-size', description: 'New to CSS3, this property lets you modify the size of the background image.', exampleSnippet: 'background-size: cover | contain | 100px auto;' }
  ]
};

export const TABLE_2_8: ReferenceTableData = {
  tableNumber: 'Table 2.8',
  title: 'Border Properties',
  pageNumber: 37,
  columns: ['Property', 'Description', 'Possible Values'],
  items: [
    { name: 'border', description: 'Shorthand property to set border-style, border-width, and border-color.', exampleSnippet: 'border: solid 2pt black;' },
    { name: 'border-style', description: 'Specifies line type of border.', exampleSnippet: 'solid | dotted | dashed | double | groove | ridge | inset | outset' },
    { name: 'border-width', description: 'Width of border in a unit (thin, medium, thick, or px/pt).', exampleSnippet: 'border-width: 1px | 2pt | medium;' },
    { name: 'border-color', description: 'The color of the border in a color unit.', exampleSnippet: 'border-color: red | #00ff00;' },
    { name: 'border-radius', description: 'The radius of a rounded corner.', exampleSnippet: 'border-radius: 8px | 50%;' },
    { name: 'border-image', description: 'The URL of an image to use as a border.', exampleSnippet: 'border-image: url("border.png") 30 round;' }
  ]
};

export const TABLE_2_9: ReferenceTableData = {
  tableNumber: 'Table 2.9',
  title: 'Font Properties',
  pageNumber: 41,
  columns: ['Property', 'Description', 'Syntax / Values'],
  items: [
    { name: 'font', description: 'Combined shorthand property: style variant weight size font-family.', exampleSnippet: 'font: italic bold 16px/1.5 Arial, sans-serif;' },
    { name: 'font-family', description: 'Specifies typeface/font (or generic font family). Multiple fallback options separated by commas.', exampleSnippet: 'font-family: Cambria, Georgia, "Times New Roman", serif;' },
    { name: 'font-size', description: 'The size of the font in one of the measurement units (px, pt, em, rem, %).', exampleSnippet: 'font-size: 16px | 1.5em | 100%;' },
    { name: 'font-style', description: 'Specifies whether italic, oblique (skewed by browser), or normal.', exampleSnippet: 'font-style: italic | normal | oblique;' },
    { name: 'font-variant', description: 'Specifies either small-caps text or none (regular text).', exampleSnippet: 'font-variant: small-caps | normal;' },
    { name: 'font-weight', description: 'Specifies normal, bold, bolder, lighter, or numeric 100 to 900.', exampleSnippet: 'font-weight: bold | 700 | normal;' }
  ]
};

export const TABLE_2_10: ReferenceTableData = {
  tableNumber: 'Table 2.10',
  title: 'Text Properties',
  pageNumber: 44,
  columns: ['Property', 'Description', 'Values / Examples'],
  items: [
    { name: 'letter-spacing', description: 'Adjusts space between letters. Can be normal or a length unit.', exampleSnippet: 'letter-spacing: 2px;' },
    { name: 'line-height', description: 'Specifies space between baselines (leading in desktop publishing).', exampleSnippet: 'line-height: 1.5 | 24px;' },
    { name: 'list-style-image', description: 'Specifies URL of an image to use as the marker for unordered lists.', exampleSnippet: 'list-style-image: url("bullet.png");' },
    { name: 'list-style-type', description: 'Selects marker type for ordered and unordered lists (e.g. none, disc, decimal).', exampleSnippet: 'list-style-type: square | none | decimal;' },
    { name: 'text-align', description: 'Aligns text horizontally in container: left, right, center, justify.', exampleSnippet: 'text-align: center;' },
    { name: 'text-decoration', description: 'Specifies lines below, through, or over text: none, underline, overline, line-through, blink.', exampleSnippet: 'text-decoration: underline | none;' },
    { name: 'text-direction', description: 'Specifies direction of text: left-to-right (ltr) or right-to-left (rtl).', exampleSnippet: 'direction: ltr | rtl;' },
    { name: 'text-indent', description: 'Indents the first line of a paragraph by a specific amount.', exampleSnippet: 'text-indent: 2em | 30px;' },
    { name: 'text-shadow', description: 'CSS3 property to add drop shadow to text (x-offset, y-offset, blur-radius, color).', exampleSnippet: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.4);' },
    { name: 'text-transform', description: 'Changes capitalization of text: none, capitalize, lowercase, uppercase.', exampleSnippet: 'text-transform: uppercase;' },
    { name: 'vertical-align', description: 'Aligns text vertically: top, bottom, middle, baseline, sub, super.', exampleSnippet: 'vertical-align: middle;' },
    { name: 'word-spacing', description: 'Adjusts space between words: normal or length unit.', exampleSnippet: 'word-spacing: 4px;' }
  ]
};

export const ALL_REFERENCE_TABLES = [
  TABLE_1_1,
  TABLE_1_2,
  TABLE_1_3,
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
];
