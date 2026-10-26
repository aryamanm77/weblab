import React, { useState } from 'react';
import {
  Terminal,
  Trash2,
  X,
  AlertTriangle,
  Info,
  AlertCircle,
  CheckCircle,
  Filter
} from 'lucide-react';
import { ConsoleMessage } from '../types';

interface ConsolePanelProps {
  messages: ConsoleMessage[];
  onClear: () => void;
  onClose: () => void;
}

export const ConsolePanel: React.FC<ConsolePanelProps> = ({ messages, onClear, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'error' | 'warn' | 'log'>('all');

  const filtered = messages.filter((m) => {
    if (filter === 'all') return true;
    return m.type === filter;
  });

  return (
    <div className="h-44 bg-[#181818] border-t border-[#3e3e42] flex flex-col font-mono text-xs select-none">
      {/* Console Header */}
      <div className="h-8 bg-[#252526] border-b border-[#333333] flex items-center justify-between px-3 text-[#cccccc]">
        <div className="flex items-center gap-2">
          <Terminal size={13} className="text-[#007acc]" />
          <span className="font-semibold text-white">Browser Console &amp; Output</span>
          <span className="text-[10px] bg-[#333333] px-1.5 py-0.2 rounded text-[#aaaaaa]">
            {messages.length} events
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Filter tabs */}
          <div className="flex items-center bg-[#1e1e1e] rounded p-0.5 border border-[#3e3e42] text-[10px]">
            <button
              onClick={() => setFilter('all')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${
                filter === 'all' ? 'bg-[#37373d] text-white' : 'text-[#888888]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('error')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${
                filter === 'error' ? 'bg-red-900/60 text-red-200' : 'text-[#888888]'
              }`}
            >
              Errors ({messages.filter((m) => m.type === 'error').length})
            </button>
            <button
              onClick={() => setFilter('warn')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${
                filter === 'warn' ? 'bg-amber-900/60 text-amber-200' : 'text-[#888888]'
              }`}
            >
              Warnings
            </button>
          </div>

          <button
            onClick={onClear}
            title="Clear Console Output"
            className="p-1 rounded hover:bg-[#333333] text-[#888888] hover:text-white cursor-pointer"
          >
            <Trash2 size={13} />
          </button>

          <button
            onClick={onClose}
            title="Close Console Panel"
            className="p-1 rounded hover:bg-[#333333] text-[#888888] hover:text-white cursor-pointer"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Console Stream */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 select-text">
        {filtered.length === 0 ? (
          <div className="text-[#666666] italic py-2 px-1">
            Console empty. Run code or call console.log() to see live outputs.
          </div>
        ) : (
          filtered.map((msg) => {
            let textColor = 'text-[#cccccc]';
            let icon = <Info size={12} className="text-blue-400 shrink-0" />;

            if (msg.type === 'error') {
              textColor = 'text-red-400 bg-red-950/20';
              icon = <AlertCircle size={12} className="text-red-400 shrink-0" />;
            } else if (msg.type === 'warn') {
              textColor = 'text-amber-400 bg-amber-950/20';
              icon = <AlertTriangle size={12} className="text-amber-400 shrink-0" />;
            }

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2 py-1 px-1.5 rounded font-mono text-[11px] leading-tight ${textColor}`}
              >
                <span className="text-[#666666] text-[10px] shrink-0 pt-0.5">
                  [{msg.timestamp}]
                </span>
                {icon}
                <span className="break-all whitespace-pre-wrap">{msg.text}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
