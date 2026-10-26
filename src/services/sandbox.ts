import { LabFiles } from '../types';

export function buildSandboxSrcDoc(files: LabFiles): string {
  const htmlContent = files['index.html'] || '';
  const cssContent = files['style.css'] || '';
  const jsContent = files['script.js'] || '';

  // Safe console interception & error trap script
  const bridgeScript = `
<script>
  (function() {
    function safeStringify(arg) {
      if (typeof arg === 'undefined') return 'undefined';
      if (arg === null) return 'null';
      if (typeof arg === 'object') {
        try {
          return JSON.stringify(arg, null, 2);
        } catch (e) {
          return Object.prototype.toString.call(arg);
        }
      }
      return String(arg);
    }

    function forward(type, args) {
      try {
        const text = Array.from(args).map(safeStringify).join(' ');
        window.parent.postMessage({
          source: 'weblab-sandbox',
          action: 'console',
          level: type,
          text: text,
          timestamp: new Date().toLocaleTimeString()
        }, '*');
      } catch (e) {}
    }

    const _log = console.log;
    const _info = console.info;
    const _warn = console.warn;
    const _error = console.error;

    console.log = function() { forward('log', arguments); _log.apply(console, arguments); };
    console.info = function() { forward('info', arguments); _info.apply(console, arguments); };
    console.warn = function() { forward('warn', arguments); _warn.apply(console, arguments); };
    console.error = function() { forward('error', arguments); _error.apply(console, arguments); };

    window.onerror = function(msg, url, line, col, error) {
      forward('error', ['[Runtime Error] ' + msg + (line ? ' (Line: ' + line + ')' : '')]);
      return false;
    };

    window.addEventListener('unhandledrejection', function(event) {
      forward('error', ['[Unhandled Promise Rejection] ' + (event.reason ? (event.reason.message || event.reason) : 'Unknown reason')]);
    });
  })();
</script>
`;

  const userScriptTag = `
<script>
  try {
    ${jsContent}
  } catch (err) {
    console.error("[Script Error]: " + err.message);
  }
</script>
`;

  const injectedStyleTag = `
<style id="weblab-live-styles">
${cssContent}
</style>
`;

  // If htmlContent is already a full document
  if (/<html[\s>]/i.test(htmlContent)) {
    let doc = htmlContent;

    // Replace any external stylesheet links with the live CSS style tag to avoid 404 network attempts in sandboxed iframe
    if (/<link[^>]+rel=["']stylesheet["'][^>]*>/i.test(doc)) {
      doc = doc.replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, injectedStyleTag);
    } else if (/<head[\s>]/i.test(doc)) {
      doc = doc.replace(/<head[\s>]/i, (match) => `${match}\n${injectedStyleTag}`);
    } else {
      doc = injectedStyleTag + doc;
    }

    // Inject bridge console interceptor inside <head>
    if (/<head[\s>]/i.test(doc)) {
      doc = doc.replace(/<head[\s>]/i, (match) => `${match}\n${bridgeScript}`);
    } else {
      doc = bridgeScript + doc;
    }

    // Replace any external script tags referencing script.js or html5shiv with the live userScriptTag
    if (/<script[^>]+src=["'](script\.js|js\/[^"']+)["'][^>]*>\s*<\/script>/i.test(doc)) {
      doc = doc.replace(/<script[^>]+src=["'](script\.js|js\/[^"']+)["'][^>]*>\s*<\/script>/gi, userScriptTag);
    } else if (/<\/body>/i.test(doc)) {
      doc = doc.replace(/<\/body>/i, `${userScriptTag}\n</body>`);
    } else {
      doc = doc + userScriptTag;
    }

    return doc;
  }

  // Otherwise, wrap fragment in standard HTML5 skeleton
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebLab Preview</title>
  ${bridgeScript}
  ${injectedStyleTag}
</head>
<body>
  ${htmlContent}
  ${userScriptTag}
</body>
</html>`;
}
