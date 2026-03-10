export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      {/* Background orbs */}
      <div className="orb orb-gold" style={{ width: 500, height: 500, top: "-10%", right: "-10%" }} />
      <div className="orb orb-sage" style={{ width: 400, height: 400, bottom: "5%", left: "-5%" }} />
      <div className="orb orb-pink" style={{ width: 300, height: 300, top: "40%", left: "50%" }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-accent-gold mb-6 animate-fade-in-up">
          Product Case Study
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-6 animate-fade-in-up animation-delay-200">
          Vendr Price Check
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          Building pricing transparency in SaaS — turning the richest procurement dataset into a free, instant benchmarking tool for every software buyer.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#presentation"
            className="px-8 py-3 bg-accent-gold text-background font-sans font-medium text-sm tracking-wide rounded-lg hover:bg-accent-gold/90 transition-colors"
          >
            View Presentation
          </a>
          <a
            href="#video"
            className="px-8 py-3 border border-border text-foreground font-sans font-medium text-sm tracking-wide rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Watch Executive Summary
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted animate-fade-in-up animation-delay-600">
        <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-foreground-muted/30" />
      </div>
    </section>
  );
}
