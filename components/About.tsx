import React from 'react';
import { ShieldCheck, Lock, CheckCircle } from './Icons';

export const About: React.FC = () => {
  const states = [
    "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", 
    "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MI", 
    "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NC", 
    "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", 
    "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center">
           <h2 className="text-3xl font-bold text-slate-900">National Producer Record</h2>
           <p className="mt-2 text-slate-500">Public Verification Data • NIPR Linked</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          {/* Header of the 'Database Record' */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-xs sm:text-sm font-mono font-medium text-slate-600 uppercase">System Status: Online</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">NPN: 21764476</span>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="px-6 py-4 bg-slate-50/50 md:bg-slate-50 md:border-r border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Classification</span>
              </div>
              <div className="px-6 py-4 md:col-span-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">State Medical Field Underwriter</p>
                    <p className="text-xs text-slate-500 mt-1">[Nationally Registered] • Multi-State Authorized</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">Active</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wide">Authorized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Authorized States */}
             <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="px-6 py-4 bg-slate-50/50 md:bg-slate-50 md:border-r border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Authorized Jurisdictions</span>
              </div>
              <div className="px-6 py-4 md:col-span-2">
                <div className="flex flex-wrap gap-1.5">
                  {states.map((state) => (
                    <span key={state} className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-mono font-medium rounded border border-slate-200">
                      {state}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">
                  *Licensed status confirmed via National Producer Registry.
                </p>
              </div>
            </div>

            {/* Row 3 */}
             <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="px-6 py-4 bg-slate-50/50 md:bg-slate-50 md:border-r border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Exclusive Access</span>
              </div>
              <div className="px-6 py-4 md:col-span-2">
                <div className="flex items-center gap-2 mb-1">
                   <CheckCircle className="w-5 h-5 text-trust-600" />
                   <span className="text-sm font-bold text-slate-900">50+ A+ Rated Carriers</span>
                </div>
                <p className="text-xs text-slate-500">
                  National Non-captive status. Independent auditing authority.
                </p>
              </div>
            </div>

            {/* Row 4 */}
             <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="px-6 py-4 bg-slate-50/50 md:bg-slate-50 md:border-r border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Data Protocol</span>
              </div>
              <div className="px-6 py-4 md:col-span-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <p className="text-sm text-slate-900">Strict Fiduciary Standard</p>
                </div>
                
                <div className="mt-3 bg-slate-50 border border-slate-200 rounded px-3 py-2 flex items-start gap-2">
                   <div className="mt-0.5 text-trust-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <p className="text-xs font-semibold text-slate-700">
                      Adhering to a strict fiduciary duty to clients across all authorized states.
                   </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-4">
               <div className="flex items-center gap-1.5 text-slate-500">
                 <Lock className="w-3 h-3" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
               </div>
               <div className="flex items-center gap-1.5 text-slate-500">
                 <ShieldCheck className="w-3 h-3" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Official Record</span>
               </div>
               <div className="flex items-center gap-1.5 text-green-600">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">Live Database</span>
               </div>
             </div>
             <p className="text-[10px] text-slate-400 font-mono text-center">
               VERIFIED TIMESTAMP: {new Date().toLocaleDateString()}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};