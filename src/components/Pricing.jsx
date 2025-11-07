import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'Protect solo projects and test the waters.',
    features: [
      '1 active project',
      'Contract-aware scope checks',
      'Basic change order templates',
      'Email approvals'
    ],
    cta: 'Start free'
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    highlight: true,
    desc: 'For busy freelancers who value their time.',
    features: [
      'Unlimited projects',
      'AI-generated pricing suggestions',
      'Custom approval flows',
      'Client messaging assistant'
    ],
    cta: 'Try Pro'
  },
  {
    name: 'Studio',
    price: '$79',
    period: '/mo',
    desc: 'Built for agencies that need alignment at scale.',
    features: [
      'Team seats & roles',
      'Shared policy libraries',
      'CRM integrations',
      'Priority support'
    ],
    cta: 'Contact sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Clear pricing that pays for itself</h2>
          <p className="mt-3 text-slate-600">Turn scope creep into revenue with plans that fit every team.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border p-6 shadow-sm ${tier.highlight ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200'}`}>
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-emerald-500 text-white text-xs font-semibold px-2 py-1 shadow">Most popular</span>
              )}
              <div>
                <h3 className={`text-lg font-semibold ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-semibold">{tier.price}</span>
                  {tier.period && <span className="text-sm opacity-70">{tier.period}</span>}
                </div>
                <p className={`mt-3 text-sm ${tier.highlight ? 'text-white/80' : 'text-slate-600'}`}>{tier.desc}</p>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${tier.highlight ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'}`}>
                      <Check size={14} />
                    </span>
                    <span className={tier.highlight ? 'text-white' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className={`inline-flex items-center justify-center w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${tier.highlight ? 'bg-white text-slate-900 hover:bg-white/90' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
