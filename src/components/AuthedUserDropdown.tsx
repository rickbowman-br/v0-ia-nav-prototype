"use client";

/**
 * AuthedUserDropdown — shared personalized "My Rates / My Account / My Bankrate" panel.
 * Rendered inside each nav option when isSignedIn is true.
 */

function InsiderBadge() {
  return (
    <span className="bg-[#00A391] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
      Insider exclusive
    </span>
  );
}

function GreenDelta({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#2E7D32] text-xs font-semibold">{children}</span>
  );
}

export function AuthedUserDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Header */}
        <div className="lg:col-span-4 border-b border-[#E5E2DB] pb-4 mb-0">
          <p
            className="text-2xl font-bold text-[#111928]"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            Welcome back, Sarah.
          </p>
        </div>

        {/* Saved Quotes */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#111928]"
            style={{ fontFamily: "Recife, Georgia, serif" }}>
            Saved Quotes
          </p>
          <div className="bg-[#F2F7FF] rounded-xl p-3 flex flex-col gap-1">
            <p className="text-sm font-semibold text-[#111928]">30-yr fixed mortgage — 5.94% APR</p>
            <p className="text-xs text-[#515260]">Saved May 15 · Veterans United</p>
            <GreenDelta>↓ 0.22% since saved</GreenDelta>
          </div>
          <div className="bg-[#F2F7FF] rounded-xl p-3 flex flex-col gap-1">
            <p className="text-sm font-semibold text-[#111928]">High-yield savings — 4.85% APY</p>
            <p className="text-xs text-[#515260]">Saved Apr 28 · Marcus by Goldman Sachs</p>
          </div>
          <a href="#" className="text-[15px] font-medium text-[#0061FE] hover:underline flex items-center gap-1">
            → View all saved quotes
          </a>
        </div>

        {/* Rate Alerts */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#111928]"
            style={{ fontFamily: "Recife, Georgia, serif" }}>
            Rate Alerts
          </p>
          <div className="bg-[#F2F7FF] rounded-xl p-3 flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <span className="text-base">🔔</span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-[#111928]">Your mortgage alert fired</p>
                <p className="text-xs text-[#515260]">30-yr fixed dropped to 6.18% (−0.14% this week)</p>
                <p className="text-xs text-[#515260]">Set at 6.25%</p>
                <a href="#" className="text-xs font-semibold text-[#0061FE] hover:underline">→ Shop now</a>
              </div>
            </div>
          </div>
          <a href="#" className="text-[15px] font-medium text-[#0061FE] hover:underline flex items-center gap-1">
            → Manage alerts
          </a>
        </div>

        {/* Pre-qualification */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#111928]"
            style={{ fontFamily: "Recife, Georgia, serif" }}>
            Pre-Qualification
          </p>
          <div className="bg-[#F2F7FF] rounded-xl p-3 flex flex-col gap-2">
            <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full w-fit">
              Pre-qual in progress
            </span>
            <p className="text-sm text-[#515260]">
              You&apos;re 2 steps from your personalized rate offers
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-[#0061FE] h-1 rounded-full" style={{ width: "60%" }} />
            </div>
            <p className="text-xs text-[#515260]">60% complete</p>
            <a
              href="#"
              className="bg-[#0061FE] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors w-fit"
            >
              Continue
            </a>
          </div>
        </div>

        {/* Exclusive Insider Offers */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#111928]"
              style={{ fontFamily: "Recife, Georgia, serif" }}>
              Exclusive Offers
            </p>
            <InsiderBadge />
          </div>
          <p className="text-xs text-[#515260]">These rates aren&apos;t available to anonymous visitors</p>
          <div className="bg-[#F2F7FF] rounded-xl p-3 flex flex-col gap-2 border border-[#00A391]/20">
            <p
              className="text-xl font-bold text-[#111928]"
              style={{ fontFamily: "Recife, Georgia, serif" }}
            >
              5.71% APR
            </p>
            <p className="text-xs text-[#515260]">30-yr fixed · Exclusive to Bankrate Insiders</p>
            <GreenDelta>0.47% below today&apos;s public rate</GreenDelta>
            <a href="#" className="text-xs font-semibold text-[#0061FE] hover:underline">→ Claim this rate</a>
          </div>
          <a href="#" className="text-[15px] font-medium text-[#0061FE] hover:underline flex items-center gap-1">
            → See all 12 exclusive offers
          </a>
        </div>

      </div>
    </div>
  );
}
