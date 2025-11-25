import React from 'react';
import { Network, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-pink-600 p-2 rounded-lg shadow-lg shadow-pink-200">
            <Network className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              Whimsical Architect
              <span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 text-xs font-medium border border-pink-100">
                AI Powered
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-medium">Convert notes to Whimsical mind maps</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Powered by Gemini 2.5 Flash</span>
        </div>
      </div>
    </header>
  );
};