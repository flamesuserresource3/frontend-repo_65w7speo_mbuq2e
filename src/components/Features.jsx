import { Shield, Wand2, FileCheck2, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Policy Guardrails',
    desc: 'Set scope policies once. Our AI flags out-of-bounds requests before they hit your backlog.'
  },
  {
    icon: Wand2,
    title: 'Smart Change Orders',
    desc: 'Auto-generate clear change orders with timelines, effort estimates, and approval flows.'
  },
  {
    icon: FileCheck2,
    title: 'Contract-aware',
    desc: 'Understands your SOW and contract language to map requests against agreed deliverables.'
  },
  {
    icon: MessageSquare,
    title: 'Client-friendly Replies',
    desc: 'Polished, professional responses that keep relationships strong while protecting margins.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Built-in intelligence that has your back</h2>
          <p className="mt-3 text-slate-600">ScopeGuard reads your agreements, understands context, and helps you turn scope creep into structured, billable work.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
