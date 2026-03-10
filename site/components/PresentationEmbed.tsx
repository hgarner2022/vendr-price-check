export function PresentationEmbed() {
  return (
    <section id="presentation" className="relative py-24 md:py-32 px-6 bg-background-secondary">
      <div className="orb orb-gold" style={{ width: 400, height: 400, bottom: "-10%", left: "-5%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-accent-gold mb-4">
          The Full Story
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
            Interactive Presentation
          </h2>
          <a
            href="/presentation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground-muted font-sans text-sm rounded-lg hover:bg-foreground/5 hover:text-foreground transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open Fullscreen
          </a>
        </div>

        {/* Iframe container */}
        <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-background">
          <div className="aspect-video">
            <iframe
              src="/presentation.html"
              title="Vendr Price Check Presentation"
              className="w-full h-full"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>

        <p className="mt-4 text-sm text-foreground-muted font-sans text-center">
          Use arrow keys or scroll to navigate. 15 slides covering problem, strategy, execution, and results.
        </p>
      </div>
    </section>
  );
}
