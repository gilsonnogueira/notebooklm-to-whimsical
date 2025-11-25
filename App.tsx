import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { generateMindMapMarkdown } from './services/geminiService';
import { GenerationStatus } from './types';
import { 
  Wand2, 
  Copy, 
  Check, 
  RotateCcw, 
  Loader2, 
  AlertCircle,
  Eraser
} from 'lucide-react';

const DEFAULT_PLACEHOLDER = `Paste your content here (e.g., NotebookLM summary, meeting notes)...

Example:
"A jurisdição é a função do Estado de aplicar o direito.
Características:
- Substitutividade: substitui vontade das partes.
- Definitividade: gera coisa julgada.
- Imperatividade: decisões são obrigatórias."`;

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = useCallback(async () => {
    if (!input.trim()) return;

    setStatus(GenerationStatus.LOADING);
    setErrorMessage('');
    
    try {
      const markdown = await generateMindMapMarkdown(input);
      setOutput(markdown);
      setStatus(GenerationStatus.SUCCESS);
    } catch (error) {
      setStatus(GenerationStatus.ERROR);
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }, [input]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [output]);

  const handleClear = useCallback(() => {
    setInput('');
    setOutput('');
    setStatus(GenerationStatus.IDLE);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">
          
          {/* Left Panel: Input */}
          <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="font-semibold text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                Source Material
              </h2>
              <button
                onClick={handleClear}
                className="text-slate-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-md"
                title="Clear all"
              >
                <Eraser className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-grow relative">
              <textarea
                className="w-full h-full p-5 resize-none focus:ring-0 focus:outline-none text-slate-600 leading-relaxed font-sans text-sm placeholder:text-slate-300"
                placeholder={DEFAULT_PLACEHOLDER}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={status === GenerationStatus.LOADING}
              />
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={handleGenerate}
                  disabled={status === GenerationStatus.LOADING || !input.trim()}
                  className="flex items-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none transition-all"
                >
                  {status === GenerationStatus.LOADING ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" />
                      Generate Structure
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Output */}
          <div className="flex flex-col h-full bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden transition-all hover:shadow-md group">
            <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/30">
              <h2 className="font-semibold text-slate-200 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === GenerationStatus.SUCCESS ? 'bg-pink-400' : 'bg-slate-600'}`}></span>
                Whimsical Output
              </h2>
              
              {output && (
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                    copied
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy for Whimsical'}
                </button>
              )}
            </div>
            
            <div className="flex-grow relative bg-slate-900">
              {status === GenerationStatus.ERROR ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-red-400 p-6 text-center animate-in fade-in zoom-in duration-300">
                  <div className="bg-red-500/10 p-4 rounded-full mb-4">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <p className="font-medium text-lg">Generation Failed</p>
                  <p className="text-sm mt-2 text-red-300/70 max-w-xs">{errorMessage}</p>
                  <button 
                    onClick={handleGenerate}
                    className="mt-6 flex items-center gap-2 text-pink-400 hover:text-pink-300 text-sm font-medium"
                  >
                    <RotateCcw className="w-4 h-4" /> Try Again
                  </button>
                </div>
              ) : output ? (
                <pre className="absolute inset-0 w-full h-full p-6 overflow-auto text-sm font-mono leading-relaxed custom-scrollbar">
                  <code className="text-pink-200 block whitespace-pre-wrap">
                    {output}
                  </code>
                </pre>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 p-6 text-center select-none">
                  <div className={`p-6 rounded-2xl border-2 border-dashed border-slate-800 mb-4 transition-all duration-700 ${status === GenerationStatus.LOADING ? 'scale-110 opacity-50 border-pink-500/30' : ''}`}>
                    {status === GenerationStatus.LOADING ? (
                       <Wand2 className="w-10 h-10 text-pink-500 animate-pulse" />
                    ) : (
                       <div className="relative">
                          <div className="absolute -inset-2 bg-pink-500/20 rounded-full blur-xl"></div>
                          <Wand2 className="w-10 h-10 text-slate-700 relative z-10" />
                       </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    {status === GenerationStatus.LOADING 
                      ? 'Structuring for Whimsical...' 
                      : 'Ready to generate outline'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;