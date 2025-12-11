import React from 'react';
import { ShieldCheck } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Prateek Kundu</h3>
            <p className="mb-2">State Medical Field Underwriter [Nationally Registered]</p>
            <p className="font-mono text-trust-400">NPN: 21764476</p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white text-md font-semibold mb-4">Official Verification Status</h4>
            <div className="flex flex-col md:items-end gap-3">
              <div className="inline-flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 shadow-sm transition-all hover:bg-slate-800 hover:border-green-900/50 group cursor-default">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-xs font-medium text-slate-200 tracking-wide group-hover:text-white transition-colors">FBI & DOJ Cleared</span>
                 <ShieldCheck className="w-3.5 h-3.5 text-green-500 ml-1 opacity-90" />
              </div>
              <div className="inline-flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 shadow-sm transition-all hover:bg-slate-800 hover:border-green-900/50 group cursor-default">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-xs font-medium text-slate-200 tracking-wide group-hover:text-white transition-colors">National Producer Registry (NPN)</span>
                 <ShieldCheck className="w-3.5 h-3.5 text-green-500 ml-1 opacity-90" />
              </div>
              <p className="mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center md:justify-end gap-1.5">
                <ShieldCheck className="w-3 h-3" />
                Verified with the National Association of Insurance Commissioners
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-slate-500 leading-relaxed text-center md:text-left mb-10">
          <p className="mb-4">
            Prateek Kundu is a licensed insurance producer (NPN 21764476). 
            All insurance transactions are conducted in accordance with state and federal regulations within authorized jurisdictions.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Prateek Kundu. All rights reserved. 
            EpoxyWealth Partner.
          </p>
        </div>

        {/* Regulatory Disclosures */}
        <div className="border-t border-slate-800 pt-8">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4">Resident State Jurisdiction & Disclosures</h5>
            <div className="text-[10px] text-slate-600 space-y-3 leading-relaxed text-justify opacity-80">
                <p><strong>CALIFORNIA INSURANCE CODE - ARTICLE 12. Conduct of Licensee - Section 1729.2 (Resident State Compliance)</strong></p>
                <p>As a resident licensee of California (License #4501251) operating nationally via reciprocity:</p>
                <p>(a) An applicant or licensee shall notify the commissioner when any of the background information set forth in this section changes after the application has been submitted or the license has been issued. If the licensee is listed as an endorsee on any business entity license, the licensee shall also provide this notice to any officer, director, or partner listed on that business entity license.</p>
                <p>(b) A business entity licensee, upon learning of a change in background information pertaining to any unlicensed person listed on its business entity license or application therefor, shall notify the commissioner of that change. The changes subject to this requirement include changes pertaining to any unlicensed officer, director, partner, member, or controlling person, or any other natural person named under the business entity license or in an application therefor.</p>
                <p>(c) The following definitions apply for the purposes of this section: (1) “License” includes all types of licenses issued by the commissioner pursuant to Chapter 5 (commencing with Section 1621), Chapter 5A (commencing with Section 1759), Chapter 6 (commencing with Section 1760), Chapter 6.5 (commencing with Section 1781.1), Chapter 7 (commencing with Section 1800), and Chapter 8 (commencing with Section 1831) of Part 2 of Division 1, Chapter 1 (commencing with Section 10110) of Part 2 of Division 2, Chapter 4 (commencing with Section 12280) of Part 5 of Division 2, Article 8 (commencing with Section 12418) of Chapter 1 of Part 6 of Division 2, and Chapter 1 (commencing with Section 14000) and Chapter 2 (commencing with Section 15000) of Division 5. (2) “Background information” means any of the following: a misdemeanor or felony conviction; a filing of felony criminal charges in state or federal court; an administrative action regarding a professional or occupational license; any licensee’s discharge or attempt to discharge, in a personal or organizational bankruptcy proceeding, an obligation regarding any insurance premiums or fiduciary funds owed to any company, including a premium finance company, or managing general agent; and any admission, or judicial finding or determination, of fraud, misappropriation or conversion of funds, misrepresentation, or breach of fiduciary duty. (3) “Applicant” and “licensee” include individual and organization applicants and licensees, and officers, directors, partners, members, and controlling persons (as defined in subdivision (b) of Section 1668.5) of an organization.</p>
                <p>(d) Notification to the commissioner shall be in writing and shall be sent within 30 days of the date the applicant or licensee learns of the change in background information.</p>
                <p>(e) The commissioner may adopt regulations necessary or desirable to implement this section.</p>
                <p className="italic">(Amended by Stats. 2015, Ch. 348, Sec. 11. (AB 1515) Effective January 1, 2016.)</p>
            </div>
        </div>
      </div>
    </footer>
  );
};