import { BatteryCharging, Cpu, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: BatteryCharging,
    title: "Modular Storage",
    desc: "Scalable lithium and solid‑state packs with hot‑swap redundancy.",
  },
  { icon: Cpu, title: "Smart Control", desc: "Edge AI forecasts demand and tunes discharge in real time." },
  { icon: LineChart, title: "Peak Shaving", desc: "Reduce demand charges with automated peak management." },
  { icon: Shield, title: "Safe & Secure", desc: "Thermal monitoring, fire mitigation, and encrypted controls." },
];

export default function Features() {
  return (
    <section id="technology" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Technology that scales</h2>
          <p className="mt-3 text-slate-300">Purpose‑built for commercial, industrial, and micro‑grid applications.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-6 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] transition-shadow bg-black/60">
              <div className="w-11 h-11 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
