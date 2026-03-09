# Price Check — Executive Summary Script
### Loom recording · ~4–5 minutes · 9 slides

---

## SLIDE 0: Title
**[~20 seconds]**

Hi, I'm Hannah Garner. I'm a Staff Product Manager, and this is the story of Price Check.

I'm going to take you back to the year 2024. A year much like today — except somehow every SaaS vendor on earth had decided that the answer to "how much does your product cost?" was... "let's hop on a call."

Price Check was our answer to that.

---

## SLIDE 1: Company
**[~30 seconds]**

So, quick context on Vendr. Vendr started as a concierge service — we helped companies negotiate their software contracts. Think of it as hiring someone to argue with Salesforce on your behalf. Which, honestly, is a service everyone needs.

The result of doing that for years was an incredible asset: over three billion dollars in real transaction data, across five thousand companies and twenty thousand SaaS products. The catch? All of that data was locked inside our service team. If you weren't a paying customer, you didn't get access. The opportunity was obvious: what if we unlocked it for everyone?

---

## SLIDE 2: Problem
**[~30 seconds]**

Here's the problem we were solving. Picture this: you're a head of IT. You've just been handed a $400K Salesforce contract. Your CFO asks, "is this a good price?" And your honest answer is... "I have absolutely no idea."

That's not a fun conversation.

SaaS pricing is opaque by design. Vendors don't publish real prices. Every deal is "custom." There are no public benchmarks. So buyers are Googling, asking around on Slack, checking G2 — and ultimately just... guessing. Eighty percent of companies overpay for software. And they never even know it.

---

## SLIDE 3: Hypothesis
**[~30 seconds]**

So our hypothesis was pretty simple. What if we just... gave the data away?

If we let any buyer upload a contract and get an instant, data-backed price assessment — free, no sales rep, no login required — then we'd build trust before they ever entered our funnel, we'd grow top-of-funnel dramatically, and — here's the fun part — every single upload would make the model smarter. Better benchmarks, tighter ranges, more confident answers for the next person.

It's one of those rare product bets where being generous is also being strategic.

---

## SLIDE 4: Team
**[~25 seconds]**

This was a small, senior team — four people. Myself on product, Fabri on design, Andrew leading engineering, and Zach as our VP of Data.

My role was setting the strategic direction — from manual concierge service all the way to self-serve product. I embedded with our procurement specialists to learn the domain, defined the phased rollout, and owned outcomes end to end. Fabri designed the experience that made complex pricing data feel simple and trustworthy. Andrew's team shipped four releases in three months. And Zach built the intelligence layer underneath all of it.

---

## SLIDE 5: Strategy
**[~35 seconds]**

Our approach was: ship small, learn fast, and let each release compound on the last.

Release one was a concierge MVP. Literally a handcrafted PDF — our team manually pulling data from the back office and assembling a report. No automation whatsoever. We were basically a very fancy copy-paste operation. But it validated that buyers would actually use this.

Release two went in-product to existing customers. We instrumented everything and learned which data people actually cared about. Release three opened it to the public — anyone could try it. And release four added AI summaries, no-auth sharing, and tightened our degradation tiers. We also killed features that weren't earning their keep.

Four releases. Three months. Each one built on what we learned from the last.

---

## SLIDE 6: The Product
**[~25 seconds]**

And here's what we shipped. Upload a contract — any contract, any vendor — and in under a minute you get a full price assessment. A bell curve showing where your price sits versus the market. An AI-generated summary in plain English. Competitor alternatives. Negotiation tips specific to your deal.

The goal was: you should be able to walk into a renewal meeting with more data than the vendor's sales rep has. Which, if you've ever negotiated a SaaS contract, you know is a deeply satisfying feeling.

---

## SLIDE 7: Challenges
**[~35 seconds]**

Now, it wasn't all smooth sailing. Three big challenges.

First, data coverage gaps. We didn't have deep data on every vendor. So we designed graceful degradation — full SKU-level benchmarks where we had depth, and negotiation insights where we didn't. The product met you where our data was.

Second, misaligned expectations. Early on, we showed the full supplier list — which set the wrong expectation. When someone uploaded a contract for a vendor where we only had negotiation insights, they were disappointed. That showed up in below-three-star ratings. We had to rethink how we framed what we could deliver.

And third, extraction accuracy. Getting our AI to reliably parse ten-plus document types — purchase orders, quotes, renewals, order forms — at ninety-five percent accuracy required serious eval work. Iterating on prompts, tuning edge cases, building evaluation pipelines.

---

## SLIDE 8: Results
**[~30 seconds]**

So — am I getting a fair price? That was the question. And we answered it.

Under one minute from contract upload to a full pricing assessment. A 4.5-star average rating — and anything below three stars triggered a personal follow-up from the team, because we wanted to understand what fell short, not just count completions. And ninety million dollars a month in AI-powered pricing recommendations running against live contracts.

Price Check fed a marketplace that crossed one billion dollars in annual volume — serving over five thousand companies and nine thousand department heads buying software fair, fast, and easy.

Thank you.

---

## DELIVERY NOTES

- **Total time**: ~4 minutes 20 seconds at natural pace
- **Tone**: Warm, confident, a little funny — not a standup set, just a person who enjoys what they built
- **Pacing tip**: The humor lands better if you don't rush it. Pause after the jokes ("a very fancy copy-paste operation") and let them breathe
- **Loom tip**: Keep slides advancing ~2 seconds before you start talking about them so the viewer has a moment to read the headline
