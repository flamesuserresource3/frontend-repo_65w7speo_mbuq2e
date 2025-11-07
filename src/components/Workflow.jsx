import { ArrowRight, Upload, Filter, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Add your SOW & policies',
    desc: 'Drop in your contract and scope documents — we build a shared understanding of what’s in and what’s not.'
  },
  {
    icon: Filter,
    title: 'Review flagged requests',
    desc: 'Client asks for “one more thing”? We detect scope creep instantly and propose fair options.'
  },
  {
    icon: ClipboardList,
    title: 'Send change order',
    desc: 'Approve our draft with pricing and timeline — clients accept with one click and work continues profitably.'
  }
];

export default function Workflow() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">A simple, respectful workflow</h2>
          <p className="mt-3 text-slate-600">Keep momentum without giving away your time. ScopeGuard makes boundaries clear and collaboration easy.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 text-slate-300">
                  <ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
