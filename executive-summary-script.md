# Price Check — Executive Summary Script
### Loom recording · ~5 minutes · 10 slides

---

## SLIDE 0: Title
**[~20 seconds]**

Hi, I'm Hannah Garner. I'm a Staff Product Manager, and this is the story of Price Check.

I'm going to take you back to the year 2024. A year much like today — except somehow every SaaS vendor on earth had decided that the answer to "how much does your product cost?" was... "let's hop on a call."

Price Check was our answer to that.

---

## SLIDE 1: Company
**[~30 seconds]**

So, quick context on Vendr. Vendr started as an always-service model — we sat alongside buyers and helped them negotiate their software contracts. Think of it as hiring someone to argue with Salesforce on your behalf. Which, honestly? Everyone deserves that.

The result of doing that for years was an incredible asset: over three billion dollars in real transaction data, across five thousand companies and twenty thousand SaaS products. But here's the thing — all of that knowledge was locked inside our service team. If you weren't already a customer, you were on your own. And that never sat right with us. The opportunity was clear: what if we could put that power in every buyer's hands?

---

## SLIDE 2: Problem
**[~30 seconds]**

Here's the problem we were solving. Picture this: you're a head of IT. You've just been handed a $400K Salesforce contract. Your CFO looks at you and says, "is this a good price?" And your honest answer is... "I have absolutely no idea."

That's a terrible position to be in. And it's not your fault.

SaaS pricing is opaque by design. Vendors don't publish real prices. Every deal is "custom." There are no public benchmarks. So buyers are Googling, asking around on Slack, checking G2 — and ultimately just... guessing. Eighty percent of companies overpay for software. And they never even know it. That's not a skills problem — it's an information problem. And we wanted to fix it.

---

## SLIDE 3: Who We're Building For
**[~25 seconds]**

So who exactly were we building this for? Picture the department head — the IT director, the head of finance, the marketing lead. These are smart, capable people. They buy software for their teams, but negotiating vendor contracts is not their full-time job. And right now, they're staring at a renewal that's already been through the sales cycle. They have a number. They just have no idea if it's a good one.

And here's what makes it so unfair — the vendor does this every single day, across hundreds of clients. The buyer does it once every few years. Sixty percent of vendors deliberately mask price increases in their contracts. The deck is stacked against the buyer from day one. And the result? Over eighty percent of companies overpay. These folks don't need a procurement team. They just need someone in their corner. They need confidence.

---

## SLIDE 4: Hypothesis
**[~30 seconds]**

So our hypothesis was pretty simple. What if we just... gave the data away?

If we let any buyer upload a contract and get an instant, data-backed price assessment — free, no sales rep, no login required — then we'd earn trust before they ever entered our funnel, we'd grow top-of-funnel dramatically, and — here's the fun part — every single upload would make the model smarter. Better benchmarks, tighter ranges, more confident answers for the next buyer who needs help.

It's one of those rare product bets where doing right by the customer is also the smartest business move you can make.

---

## SLIDE 5: Team
**[~25 seconds]**

This was a small, senior team — four people. Myself on product, Fabri on design, Andrew leading engineering, and Zach as our VP of Data.

My role was setting the strategic direction — evolving us from a service motion all the way to a self-serve product. I embedded with our procurement specialists to learn the domain, defined the phased rollout, and owned outcomes end to end. Fabri designed the experience that made complex pricing data feel simple and trustworthy. Andrew's team shipped four releases in three months. And Zach built the intelligence layer underneath all of it.

---

## SLIDE 6: Strategy
**[~35 seconds]**

Our approach was: ship small, learn fast, and let each release compound on the last.

Release one was a service-motion MVP. Literally a handcrafted PDF — our team manually pulling data from the back office and assembling a report. No automation whatsoever. We were basically a very fancy copy-paste operation. But it told us something important: buyers were hungry for this. They wanted help, and they wanted it now.

Release two went in-product to existing customers. We instrumented everything and learned which data people actually cared about. Release three opened it to the public — anyone could try it. And release four added AI summaries, no-auth sharing, and tightened our degradation tiers. We also killed features that weren't earning their keep.

Four releases. Three months. Each one built on what we learned from the last.

---

## SLIDE 7: The Product
**[~25 seconds]**

And here's what we shipped. Upload a contract — any contract, any vendor — and in under a minute you get a full price assessment. A bell curve showing where your price sits versus the market. An AI-generated summary in plain English. Competitor alternatives. Negotiation tips specific to your deal.

The goal was simple: you should be able to walk into a renewal meeting feeling prepared, confident, and in control — with more data than the vendor's sales rep has. Which, if you've ever negotiated a SaaS contract, you know is an incredibly empowering feeling.

---

## SLIDE 8: Challenges
**[~35 seconds]**

Now, it wasn't all smooth sailing. Three big challenges.

First, data coverage gaps. We didn't have deep data on every vendor. So we designed graceful degradation — full SKU-level benchmarks where we had depth, and negotiation insights where we didn't. The product met you where our data was.

Second, misaligned expectations. Early on, we showed the full supplier list — which set the wrong expectation. When someone uploaded a contract for a vendor where we only had negotiation insights, they felt let down. And rightfully so — we'd implied we could do more than we could. That showed up in below-three-star ratings. We had to rethink how we framed what we could deliver, because those buyers deserved honesty upfront.

And third, extraction accuracy. Getting our AI to reliably parse ten-plus document types — purchase orders, quotes, renewals, order forms — at ninety-five percent accuracy required serious eval work. Iterating on prompts, tuning edge cases, building evaluation pipelines.

---

## SLIDE 9: Results
**[~30 seconds]**

So — am I getting a fair price? That was the question every buyer was asking. And we gave them a real answer.

Under one minute from contract upload to a full pricing assessment. A 4.5-star average rating — and anything below three stars triggered a personal follow-up from the team, because we genuinely wanted to understand what fell short. Every piece of feedback made us better for the next person.

Ninety million dollars a month in AI-powered pricing recommendations running against live contracts. Price Check fed a marketplace that crossed one billion dollars in annual volume — serving over five thousand companies and nine thousand department heads buying software fair, fast, and with the confidence they deserved from the start.

Thank you.

---

## DELIVERY NOTES

- **Total time**: ~4 minutes 45 seconds at natural pace
- **Tone**: Friendly, confident, deeply empathetic — you care about the buyer's experience and it shows. Light humor still lands, but the throughline is "we built this because people deserved better"
- **Pacing tip**: The humor lands better if you don't rush it. Pause after the jokes ("a very fancy copy-paste operation") and let them breathe
- **Loom tip**: Keep slides advancing ~2 seconds before you start talking about them so the viewer has a moment to read the headline
