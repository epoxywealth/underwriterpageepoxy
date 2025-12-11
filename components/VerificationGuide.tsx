import React from 'react';
import { Search, ExternalLink } from './Icons';

export const VerificationGuide: React.FC = () => {
  return (
    <section id="verification-guide" className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Verify Credentials</h2>
          <p className="mt-2 text-slate-600">
            Verify National Producer Number (NPN) via the National Registry.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8">
            <ol className="relative border-l border-slate-200 ml-4">
              
              <li className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-trust-100 rounded-full -left-4 ring-8 ring-white">
                  <span className="text-trust-700 font-bold text-sm">1</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900">
                  Access the National Producer Registry
                </h3>
                <p className="mb-4 text-base font-normal text-slate-500">
                  Use the National Association of Insurance Commissioners (NAIC) lookup tool or your state's DOI lookup.
                </p>
                <a 
                  href="https://nipr.com/help/look-up-your-npn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-trust-700 bg-white border border-trust-200 rounded-lg hover:bg-trust-50 focus:z-10 focus:ring-4 focus:outline-none focus:ring-trust-100"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  NIPR Producer Lookup
                </a>
              </li>

              <li className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-trust-100 rounded-full -left-4 ring-8 ring-white">
                  <span className="text-trust-700 font-bold text-sm">2</span>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-slate-900">Enter National Producer Number</h3>
                <p className="text-base font-normal text-slate-500">
                  In the search box, enter the NPN: <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">21764476</span>
                </p>
              </li>

              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-8 ring-white">
                   <Search className="w-4 h-4 text-green-600" />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-slate-900">Confirm Multi-State Status</h3>
                <p className="text-base font-normal text-slate-500">
                  Verify that the status is listed as <span className="text-green-600 font-bold">Active</span> for your specific jurisdiction.
                </p>
              </li>
            </ol>
          </div>
          <div className="bg-slate-50 px-8 py-4 border-t border-slate-200">
             <p className="text-xs text-slate-500 text-center">
               This verification process ensures you are dealing with an authorized National Producer.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};