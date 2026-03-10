export function PDFDownload() {
  return (
    <section id="download" className="relative py-24 md:py-32 px-6 bg-background-secondary">
      <div className="orb orb-sage" style={{ width: 300, height: 300, bottom: "10%", left: "50%" }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Section label */}
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-accent-gold mb-4">
          Download
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
          Sample Price Check Report
        </h2>

        <p className="font-sans text-foreground-muted mb-10 max-w-lg mx-auto">
          See what a buyer receives — a real Price Check output showing benchmark data, percentiles, and the fair-price range for a SaaS contract.
        </p>

        {/* Download card */}
        <div className="inline-block bg-card border border-border rounded-xl p-8 card-hover">
          {/* PDF icon */}
          <div className="w-16 h-20 mx-auto mb-6 bg-accent-terracotta/10 border border-accent-terracotta/20 rounded-lg flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-terracotta"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>

          <p className="font-sans font-medium text-foreground mb-1">
            Price Report Sample.pdf
          </p>
          <p className="text-sm text-foreground-muted mb-6">
            PDF Report
          </p>

          <a
            href="/vendr-price-check/vendr-price-check-assets/Price%20report%20sample2.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent-gold text-background font-sans font-medium text-sm tracking-wide rounded-lg hover:bg-accent-gold/90 transition-colors"
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
