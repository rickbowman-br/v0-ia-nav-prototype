import type { VariantId } from "./VariantSwitcher";

const HERO_CONTENT: Record<
  VariantId,
  { headline: string; subhead: string }
> = {
  1: {
    headline: "We have a better rate. Here's why.",
    subhead:
      "Bankrate's 600-lender marketplace means the best rate wins — not the bank with the biggest ad budget.",
  },
  2: {
    headline: "Find the rate that's right for you.",
    subhead:
      "Tell us what you're trying to do — we'll show you every option, ranked by what's actually best for you.",
  },
  3: {
    headline:
      "The only mortgage marketplace where 600 lenders compete for your loan.",
    subhead:
      "That competition is why Bankrate rates aren't available if you go directly to the bank.",
  },
  4: {
    headline: "Rates you can trust. On your side, not theirs.",
    subhead:
      "Bankrate's editorial independence and 600-lender marketplace mean the best rate appears first — every time.",
  },
};

interface HeroSectionProps {
  variant: VariantId;
  isSignedIn: boolean;
}

/** Returns the headline to show — authenticated state may override it. */
function getHeadline(variant: VariantId, isSignedIn: boolean): string {
  if (isSignedIn && variant === 2) {
    return "Pick up where you left off, Sarah.";
  }
  return HERO_CONTENT[variant].headline;
}

/** Returns the subhead — authenticated state may override it. */
function getSubhead(variant: VariantId, isSignedIn: boolean): string {
  if (isSignedIn && variant === 2) {
    return "Your 30-yr mortgage pre-qual is 60% complete. You're close to your personalized rate.";
  }
  if (isSignedIn && variant === 4) {
    return "Your rates are saved. Your alerts are active. Bankrate is working for you.";
  }
  return HERO_CONTENT[variant].subhead;
}

/** Personalized addendum shown below the subhead for some variants when signed in. */
function PersonalizedHeroNote({ variant }: { variant: VariantId }) {
  if (variant === 1) {
    return (
      <p className="mt-4 text-base text-[#515260]">
        Sarah, you have 1 rate alert and 2 saved quotes.{" "}
        <a href="#" className="text-[#0061FE] font-medium hover:underline">
          → Resume your search
        </a>
      </p>
    );
  }
  if (variant === 3) {
    return (
      <div className="mt-4 inline-block bg-white border border-[#00A391]/30 rounded-xl px-5 py-3">
        <p
          className="text-[#00A391] font-bold text-xl"
          style={{ fontFamily: "Recife, Georgia, serif" }}
        >
          Your marketplace rate today: 5.94% APR
        </p>
        <p className="text-sm text-[#515260]">0.62% below what you&apos;d get direct</p>
      </div>
    );
  }
  return null;
}

export function HeroSection({ variant, isSignedIn }: HeroSectionProps) {
  const headline = getHeadline(variant, isSignedIn);
  const subhead = getSubhead(variant, isSignedIn);

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

        {isSignedIn && <PersonalizedHeroNote variant={variant} />}

        {/* Sample body content below hero */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Today's Best Mortgage Rate",
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
