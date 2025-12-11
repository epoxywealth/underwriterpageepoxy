import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Credentials } from './components/Credentials';
import { About } from './components/About';
import { VerificationGuide } from './components/VerificationGuide';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-trust-100 selection:text-trust-900">
      <Navbar />
      <main>
        <Hero />
        <Credentials />
        <About />
        <VerificationGuide />
      </main>
      <Footer />
    </div>
  );
};

export default App;