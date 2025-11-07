import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-[600px] md:h-[700px]">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
        <div className="container mx-auto px-6 pt-28 md:pt-32 pb-16 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium ring-1 ring-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI-powered scope control
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Stop losing money to scope creep.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
              ScopeGuard turns extra client requests into profitable, structured change orders. Empower your freelance practice or agency with intelligent boundaries that clients respect.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 transition">
                Start free — lock in your margins
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold ring-1 ring-slate-200 hover:bg-slate-50 transition">
                See how it works
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
