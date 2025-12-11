import React from 'react';
import { FileCheck, Fingerprint, ShieldCheck, Lock, ExternalLink, CheckCircle } from './Icons';

const CredentialCard: React.FC<{
  title: string;
  value: string;
  subtext: React.ReactNode;
  icon: React.ReactNode;
  verified?: boolean;
  documentUrl?: string;
}> = ({ title, value, subtext, icon, verified, documentUrl }) => (
  <div className="relative group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    <div className="flex items-start justify-between">
      <div className="h-12 w-12 rounded-xl bg-trust-50 text-trust-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      {verified && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      )}
    </div>
    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">{title}</h3>
    <p className="mt-2 text-2xl font-bold text-slate-900 tracking-tight">{value}</p>
    <div className="mt-1 text-sm text-slate-600 mb-4">{subtext}</div>
    
    {documentUrl && (
      <div className="mt-auto pt-4 border-t border-slate-100">
        <a 
          href={documentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-xs font-semibold text-trust-600 hover:text-trust-800 transition-colors"
        >
          View Document
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>
    )}
  </div>
);

export const Credentials: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">National Verification</h2>
          <p className="mt-4 text-slate-600">Verified by the National Association of Insurance Commissioners (NAIC).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: NPN (Primary) */}
          <CredentialCard 
            title="National Producer" 
            value="#21764476" 
            subtext={
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-green-600 text-xs">VERIFIED</span>
                <span className="text-slate-300">|</span>
                <span>NPN Registry</span>
              </span>
            }
            verified={true}
            icon={<ShieldCheck />}
          />

          {/* Card 2: Jurisdiction */}
          <CredentialCard 
            title="Jurisdiction" 
            value="Multi-State" 
            subtext={
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-green-600 text-xs">AUTHORIZED</span>
                <span className="text-slate-300">|</span>
                <span>Reciprocity Active</span>
              </span>
            }
            verified={true}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            }
          />

          {/* Card 3: Background Check */}
          <CredentialCard 
            title="Background Check" 
            value="Cleared" 
            subtext={
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-green-600 text-xs">PASSED</span>
                <span className="text-slate-300">|</span>
                <span>FBI & DOJ</span>
              </span>
            }
            verified={true}
            icon={<Lock />}
          />
          
          {/* Card 4: Identity Status (Replaced Resident License) */}
          <CredentialCard 
            title="Identity Status" 
            value="Confirmed" 
            subtext={
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-green-600 text-xs">MATCHED</span>
                <span className="text-slate-300">|</span>
                <span>Verified Gov. ID</span>
              </span>
            }
            verified={true}
            icon={<CheckCircle />}
          />
        </div>
      </div>
    </section>
  );
};