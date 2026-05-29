import type { VariantId } from "./VariantSwitcher";

const HERO_CONTENT: Record<
  VariantId,
  { headline: string; subhead: string }
> = {
  1: {
    headline: "We have a better rate. Here’s why.",
    subhead:
      "Bankrate’s 600-lender marketplace means the best rate wins — not the bank with the biggest ad budget.",
  },
  2: {
    headline: "Find the rate that’s right for you.",
    subhead:
      "Tell us what you’re trying to do — we’ll show you every option, ranked by what’s actually best for you.",
  },
  3: {
    headline:
      "The only mortgage marketplace where 600 lenders compete for your loan.",
    subhead:
      "That competition is why Bankrate rates aren’t available if you go directly to the bank.",
  },
  4: {
    headline: "Rates you can trust. On your side, not theirs.",
    subhead:
      "Bankrate’s editorial independence and 600-lender marketplace mean the best rate appears first — every time.",
  },
};

interface HeroSectionProps {
  variant: VariantId;
}

export function HeroSection({ variant }: HeroSectionProps) {
  const { headline, subhead } = HERO_CONTENT[variant];

  return (
    <section className="bg-[#F5F2EB] py-24 px-6">
      <div className="max-w-[1312px] mx-auto">
        <h1
          className="text-5xl font-bold text-[#111928] max-w-[720px] leading-tight mb-6"
          style={{ fontFamily: "Recife, Georgia, serif" }}
        >
          {headline}
        </h1>
        <p
          className="text-xl text-[#515260] max-w-[600px] leading-relaxed"
          style={{ fontFamily: "Instrument Sans, system-ui, sans-serif" }}
        >
          {subhead}
        </p>

        {/* Sample body content below hero */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Today’s Best Mortgage Rate",
              value: "6.49%",
              note: "30-yr fixed · Exclusive via marketplace",
            },
            {
              label: "Top CD Rate",
              value: "5.25%",
              note: "12-month · 600+ lenders compared",
            },
            {
              label: "Best Credit Card APR",
              value: "0% intro",
              note: "15 months · No annual fee",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl p-6 border border-[#E5E2DB]"
            >
              <p className="text-sm text-[#515260] mb-1">{card.label}</p>
              <p
                className="text-3xl font-bold text-[#111928] mb-1"
                style={{ fontFamily: "Recife, Georgia, serif" }}
              >
                {card.value}
              </p>
              <p className="text-sm text-[#515260]">{card.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
