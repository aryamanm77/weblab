import React, { useState, useRef, useEffect } from 'react';
import {
  RotateCcw,
  ExternalLink,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { ConsoleMessage, LabFiles, PreviewDevice } from '../types';
import { buildSandboxSrcDoc } from '../services/sandbox';

interface BrowserPreviewProps {
  files: LabFiles;
  device: PreviewDevice;
  onChangeDevice: (device: PreviewDevice) => void;
  zoom: number;
  onChangeZoom: (zoom: number) => void;
  consoleMessages: ConsoleMessage[];
  showConsole: boolean;
  onToggleConsole: () => void;
  onClearConsole: () => void;
  refreshTrigger: number;
  onManualRefresh: () => void;
}

export const BrowserPreview: React.FC<BrowserPreviewProps> = ({
  files,
  device,
  onChangeDevice,
  zoom,
  onChangeZoom,
  consoleMessages,
  showConsole,
  onToggleConsole,
  onClearConsole,
  refreshTrigger,
  onManualRefresh
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [srcDoc, setSrcDoc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Compile and load iframe whenever files or refreshTrigger updates
  useEffect(() => {
    setIsLoading(true);
    const compiled = buildSandboxSrcDoc(files);
    setSrcDoc(compiled);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [files, refreshTrigger]);

  const handleOpenInNewTab = () => {
    const compiled = buildSandboxSrcDoc(files);
    const blob = new Blob([compiled], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'laptop':
        return '1024px';
      case 'desktop':
      case 'responsive':
      default:
        return '100%';
    }
  };

  const errorCount = consoleMessages.filter((m) => m.type === 'error').length;

  return (
    <div className="flex flex-col h-full w-full bg-[#181818] overflow-hidden min-h-0">
      {/* Browser Bar */}
      <div className="h-10 bg-[#252526] border-b border-[#333333] flex items-center justify-between px-3 text-xs select-none gap-2 shrink-0">
        {/* Left: Window Dots & Navigation Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          </div>

          <button
            onClick={onManualRefresh}
            title="Reload Preview Frame"
            className="p-1 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white cursor-pointer"
          >
            <RotateCcw size={13} className={isLoading ? 'animate-spin text-blue-400' : ''} />
          </button>
        </div>

        {/* Center: Address Bar */}
        <div className="flex-1 max-w-xl mx-2 bg-[#1e1e1e] border border-[#3e3e42] rounded px-3 py-1 flex items-center gap-2 text-[#cccccc]">
          <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
          <span className="text-emerald-400 font-mono text-[11px]">https://</span>
          <span className="truncate font-mono text-[11px] text-[#e0e0e0]">
            weblab-preview.local/web-technology-lab/index.html
          </span>
        </div>

        {/* Right: Zoom & Utilities */}
        <div className="flex items-center gap-1">
          {/* Zoom controls */}
          <div className="flex items-center bg-[#1e1e1e] border border-[#3e3e42] rounded px-1 text-[11px]">
            <button
              onClick={() => onChangeZoom(Math.max(50, zoom - 10))}
              title="Zoom Out"
              className="px-1 text-[#888888] hover:text-white cursor-pointer"
            >
              -
            </button>
            <span className="px-1 text-[#cccccc] font-mono">{zoom}%</span>
            <button
              onClick={() => onChangeZoom(Math.min(200, zoom + 10))}
              title="Zoom In"
              className="px-1 text-[#888888] hover:text-white cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Open in New Window */}
          <button
            onClick={handleOpenInNewTab}
            title="Open Live Preview in Separate Tab"
            className="p-1.5 rounded hover:bg-[#333333] text-[#cccccc] hover:text-white cursor-pointer"
          >
            <ExternalLink size={13} />
          </button>

          {/* Console Toggle */}
          <button
            onClick={onToggleConsole}
            title="Toggle Runtime Console"
            className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer transition-colors ${
              showConsole
                ? 'bg-[#0e639c] text-white'
                : 'hover:bg-[#333333] text-[#cccccc]'
            }`}
          >
            <Terminal size={13} />
            <span className="text-[11px]">Console</span>
            {errorCount > 0 && (
              <span className="bg-red-500 text-white text-[9px] px-1 rounded-full font-bold">
                {errorCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 min-h-0 overflow-auto bg-[#181818] flex justify-center items-stretch p-2">
        <div
          style={{
            width: getDeviceWidth(),
            maxWidth: '100%',
            transform: zoom !== 100 ? `scale(${zoom / 100})` : undefined,
            transformOrigin: 'top center',
            transition: 'width 0.2s ease'
          }}
          className={`h-full min-h-[420px] w-full bg-white rounded shadow-2xl overflow-hidden border border-[#444444] flex flex-col ${
            device !== 'responsive' ? 'ring-8 ring-[#2d2d2d]' : ''
          }`}
        >
          <iframe
            ref={iframeRef}
            title="WebLab Live Preview"
            srcDoc={srcDoc}
            sandbox="allow-scripts allow-modals allow-forms"
            className="w-full h-full flex-1 border-0 bg-white block"
          />
        </div>
      </div>
    </div>
  );
};
