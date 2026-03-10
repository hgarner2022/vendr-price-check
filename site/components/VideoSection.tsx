export function VideoSection() {
  return (
    <section id="video" className="relative py-24 md:py-32 px-6">
      <div className="orb orb-pink" style={{ width: 350, height: 350, top: "20%", right: "-8%" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-accent-gold mb-4">
          Watch
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8">
          Video Walkthrough
        </h2>

        {/* Video player */}
        <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
          <video
            controls
            preload="metadata"
            className="w-full aspect-video bg-black"
            poster=""
          >
            <source
              src="/vendr-price-check/vendr-price-check-assets/Unlocking%20SaaS%20Pricing%20Transparency_%20The%20Price%20Check%20Journey%20%F0%9F%9A%80.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mt-4 text-sm text-foreground-muted font-sans text-center">
          A narrated walkthrough of the Price Check product journey — from problem to results.
        </p>
      </div>
    </section>
  );
}
