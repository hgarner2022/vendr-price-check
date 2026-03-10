const stats = [
  { value: "$900B", label: "spent on SaaS in 2023", color: "text-accent-gold" },
  { value: "20\u201325%", label: "overpaid on average", color: "text-accent-pink" },
  { value: "1,490+", label: "comparable transactions", color: "text-accent-sage" },
];

export function ExecutiveSummary() {
  return (
    <section id="overview" className="relative py-24 md:py-32 px-6">
      <div className="orb orb-sage" style={{ width: 350, height: 350, top: "10%", right: "-5%" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-accent-gold mb-4">
          Executive Summary
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-12">
          The problem &amp; the product
        </h2>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <span className={`block font-serif text-3xl md:text-4xl font-light ${stat.color}`}>
                {stat.value}
              </span>
              <span className="block mt-2 text-sm text-foreground-muted font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Body text */}
        <div className="space-y-6 text-foreground-muted font-sans text-base md:text-lg leading-relaxed max-w-3xl">
          <p>
            SaaS pricing is completely opaque. Companies spend nearly a trillion dollars on software every year, yet not a single vendor publishes what their product actually costs. There are no benchmarks, no comparables, and no way to know if the number on the table is fair.
          </p>
          <p>
            Big companies solve this with dedicated procurement teams, pricing data, and negotiation experts. Everyone else is left guessing — or hoping they got a &ldquo;good deal.&rdquo;
          </p>
          <p>
            <strong className="text-foreground">Price Check</strong> was my bet to change that. As a product manager at Vendr, I led the design and launch of a free, self-serve benchmarking tool. Upload a contract, and in under a minute you see exactly where your price falls against thousands of comparable purchases — median, percentiles, and a clear fair-price range.
          </p>
          <p>
            Every upload feeds the flywheel: more data in, smarter answers out. Price Check became Vendr&apos;s top-of-funnel growth engine, turning anonymous buyers into engaged leads.
          </p>
        </div>
      </div>
    </section>
  );
}
