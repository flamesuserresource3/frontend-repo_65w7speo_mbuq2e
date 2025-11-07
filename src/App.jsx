import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-slate-900" />
            <span className="font-semibold tracking-tight">ScopeGuard</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Sign in</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
