import { Server, Battery, Gauge } from "lucide-react";

const items = [
  {
    icon: Battery,
    title: "Rack-Batterien",
    desc: "Hochdichte 48V-Racks für Rechenzentren und Microgrids.",
    spec: "Bis zu 3,2 MWh pro Container",
  },
  {
    icon: Server,
    title: "Energy Server",
    desc: "All-in-One Wechselrichter + BMS mit nahtlosem Inselbetrieb.",
    spec: "98,5% Round-Trip-Wirkungsgrad",
  },
  {
    icon: Gauge,
    title: "Schnelle Entladung",
    desc: "Millisekundenschnelle Reaktion für Peak-Shaving und Notstrom.",
    spec: "<10 ms Umschaltzeit",
  },
];

export default function Storage() {
  return (
    <section id="storage" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Energiespeicher mit Wirkung</h2>
          <p className="mt-3 text-slate-300">Modulare Systeme, die sich an Ihr Lastprofil und Ihr Wachstum anpassen.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, spec }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-red-600/10 blur-3xl" />
              <div className="w-12 h-12 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
              <div className="mt-6 inline-flex text-red-400 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                {spec}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
