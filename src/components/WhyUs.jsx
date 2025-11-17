export default function WhyUs() {
  const items = [
    { k: "98.9%", v: "Uptime SLA backed by automated failover" },
    { k: "< 50 ms", v: "Response for grid events and demand spikes" },
    { k: "45%", v: "Avg. savings on demand charges" },
  ];

  return (
    <section id="why-us" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Built for reliability and ROI</h2>
            <p className="mt-4 text-slate-600">
              Our platform blends premium hardware with predictive control software, delivering safe and efficient energy storage for campuses, factories, and data centers.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {items.map((it) => (
                <div key={it.k} className="rounded-2xl border border-slate-200 p-5 bg-white">
                  <div className="text-2xl font-semibold text-slate-900">{it.k}</div>
                  <div className="text-slate-600 text-sm mt-1">{it.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white grid grid-cols-3">
              <div className="p-6 border-r border-slate-100">
                <div className="text-xs font-medium text-slate-500">Power flow</div>
                <div className="mt-4 h-2 bg-emerald-100 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-2/3 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6 border-r border-slate-100">
                <div className="text-xs font-medium text-slate-500">State of charge</div>
                <div className="mt-4 h-2 bg-sky-100 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-4/5 bg-sky-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-slate-500">Thermals</div>
                <div className="mt-4 h-2 bg-amber-100 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Illustrative dashboard view</p>
          </div>
        </div>
      </div>
    </section>
  );
}
