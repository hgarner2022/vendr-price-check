const stats = [
  { value: "$900B", label: "spent on SaaS annually", color: "text-accent-gold" },
  { value: "20\u201325%", label: "overpaid on average", color: "text-accent-pink" },
  { value: "250+", label: "products in their tech stack", color: "text-accent-sage" },
];

export function ExecutiveSummary() {
  return (
    <section id="overview" className="relative py-24 md:py-32 px-6">
      <div className="orb orb-sage" style={{ width: 350, height: 350, top: "10%", right: "-5%" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Hook */}
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-accent-gold mb-4">
          The Problem
        </p>

        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Nobody knows what software should cost.
        </h2>

        <p className="font-sans text-lg text-foreground-muted mb-12 max-w-2xl mx-auto">
          I built <strong className="text-foreground">Price Check</strong> — a free, instant benchmarking tool that shows buyers exactly where their price falls against thousands of real transactions. Upload a contract, get the truth in under a minute.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-card border border-border rounded-xl p-4 md:p-6 text-center card-hover"
            >
              <span className={`block font-serif text-2xl md:text-4xl font-light ${stat.color}`}>
                {stat.value}
              </span>
              <span className="block mt-1 md:mt-2 text-xs md:text-sm text-foreground-muted font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <p className="font-sans text-lg text-foreground-muted mt-10 max-w-2xl mx-auto">
          <strong className="text-foreground">Vendr</strong> negotiates software contracts alongside buyers — amassing <strong className="text-accent-gold">$3B+ in real transaction data</strong>. I saw the chance to flip the leverage.
        </p>
      </div>
    </section>
  );
}
