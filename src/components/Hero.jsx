import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-red-500 font-medium bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Hochdichte Energie, präzise gesteuert
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Energiespeicher neu gedacht
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-300">
            Modulare Batteriesysteme, ultraschnelle Leistungsregelung und prädiktive Optimierung für resiliente Microgrids und kritische Infrastruktur.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-red-600 text-white font-medium shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:shadow-[0_0_35px_rgba(239,68,68,0.65)] transition">
              Loslegen
            </a>
            <a href="#technology" className="inline-flex items-center px-5 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5">
              Technologie erkunden
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
    </section>
  );
}
