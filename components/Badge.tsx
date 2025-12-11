import React from 'react';
import { ShieldCheck } from './Icons';

export const Badge: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes badge-enter {
            0% { 
              opacity: 0; 
              transform: scale(0.95) translateY(2px); 
            }
            100% { 
              opacity: 1; 
              transform: scale(1) translateY(0); 
            }
          }
        `}
      </style>
      <div 
        className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full shadow-sm"
        style={{ animation: 'badge-enter 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}
      >
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span className="text-xs font-semibold uppercase tracking-wide text-green-700">
          Officially Verified & Cleared
        </span>
      </div>
    </>
  );
};