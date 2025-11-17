export default function CTA() {
  return (
    <section id="contact" className="relative bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(239,68,68,0.25),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-10 md:p-14 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Ready to modernize your energy?</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Schedule a demo to see how predictive control and modular storage cut costs and carbon footprint.
          </p>
          <form className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <input className="col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-red-500 outline-none" placeholder="Work email" />
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-red-600 text-white font-medium shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_rgba(239,68,68,0.55)] transition">
              Request demo
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400">No spam. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
