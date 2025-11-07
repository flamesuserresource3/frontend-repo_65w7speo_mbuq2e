export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-slate-900" />
          <span className="font-semibold tracking-tight">ScopeGuard</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} ScopeGuard, Inc. Protect your margins.</p>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
