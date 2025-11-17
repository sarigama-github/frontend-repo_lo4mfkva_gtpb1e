import { BatteryCharging, Cpu, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: BatteryCharging,
    title: "Modularer Speicher",
    desc: "Skalierbare Lithium- und Festkörper-Packs mit Hot-Swap-Redundanz.",
  },
  { icon: Cpu, title: "Intelligente Steuerung", desc: "Edge-AI prognostiziert Lasten und regelt die Abgabe in Echtzeit." },
  { icon: LineChart, title: "Peak Shaving", desc: "Reduzieren Sie Lastspitzen mit automatischem Spitzenlast-Management." },
  { icon: Shield, title: "Sicher & geschützt", desc: "Thermische Überwachung, Brandprävention und verschlüsselte Steuerung." },
];

export default function Features() {
  return (
    <section id="technology" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Technologie, die mitwächst</h2>
          <p className="mt-3 text-slate-300">Entwickelt für Gewerbe, Industrie und Microgrids.</p>
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
