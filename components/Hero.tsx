import React from 'react';
import { Badge } from './Badge';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          
          <div className="order-2 lg:order-1 max-w-2xl">
            <div className="mb-6">
              <Badge />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
              The banks always win. <br />
              <span className="text-trust-800">I make sure your family doesn't lose.</span>
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-slate-600">
              State Medical Field Underwriter <span className="text-trust-800 font-semibold">[Nationally Registered]</span>. Federally verified to protect families across state lines.
            </p>
            
            <div className="mt-8 space-y-3">
              <p className="text-lg text-slate-600">Banks require PMI Insurance.</p>
              <p className="text-lg text-slate-600">Lenders require Homeowners insurance.</p>
              <p className="text-xl font-bold text-slate-900">
                Who is protecting <span className="italic text-trust-800">yours</span>, the people inside the home?
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#verification-guide" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-trust-900 rounded-xl hover:bg-trust-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-900"
              >
                Verify National Record
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative lg:ml-auto">
            {/* Image Container with Trust Elements */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-[4/5]">
                <img 
                  src="https://www.dropbox.com/scl/fi/wwlqe48ddaq1mmiz4qiby/image-77.png?rlkey=zru62wuhxj6zctpphfk6q5bvg&st=vb6n3kjk&raw=1" 
                  alt="Prateek Kundu" 
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Floating Card: Immediate Verification Status */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                    <div className="flex items-center gap-4">
                       <div className="relative h-12 w-12 shrink-0">
                          {/* Pulsing Green Check Effect */}
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20"></span>
                          <div className="relative h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                          </div>
                       </div>
                       <div>
                          <div className="flex items-center gap-2 mb-0.5">
                             <h3 className="text-sm font-bold text-slate-900">Field Underwriter</h3>
                             <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide border border-green-200">Verified</span>
                          </div>
                          <p className="text-xs text-slate-500 font-mono">NPN: 21764476 • <span className="text-green-600 font-semibold">Active Status</span></p>
                       </div>
                    </div>
                </div>
              </div>

              {/* Decorative elements behind */}
              <div className="absolute -z-10 top-0 -right-4 w-72 h-72 bg-trust-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};