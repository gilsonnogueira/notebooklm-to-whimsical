import React from 'react';
import { ArrowRight, FileText, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 text-blue-600">
          <FileText className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1">1. Input Content</h3>
        <p className="text-sm text-slate-600">Paste your rough notes, NotebookLM summaries, or chaotic brain dumps into the left panel.</p>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-3 text-purple-600">
          <ArrowRight className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1">2. Generate</h3>
        <p className="text-sm text-slate-600">Click generate. AI structures it into a Whimsical-ready indented outline.</p>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3 text-teal-600">
          <Share2 className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1">3. Export to Whimsical</h3>
        <p className="text-sm text-slate-600">Copy the result. In Whimsical, choose "Paste as Mind Map" (or paste text and select Mind Map).</p>
      </div>
    </div>
  );
};