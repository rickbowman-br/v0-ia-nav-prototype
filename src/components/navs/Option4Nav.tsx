"use client";

import { useState } from "react";
import { AuthedUserDropdown } from "@/components/AuthedUserDropdown";
import { AvatarProfileDropdown, SignInPromptDropdown } from "@/components/AvatarProfileDropdown";

function NavLogo() {
  return (
    <a href="#" className="flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://bfletnsjftkxgijnmjdp.supabase.co/storage/v1/object/public/rebrand-logos/Bankrate-logo-blue-black.svg"
        alt="Bankrate"
        width={120}
        height={32}
      />
    </a>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-widest text-[#111928] mb-2"
      style={{ fontFamily: "Recife, Georgia, serif" }}
    >
      {children}
    </p>
  );
}

function DropLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">
      {children}
    </a>
  );
}

function CTALink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="text-[15px] font-medium text-[#0061FE] hover:underline flex items-center gap-1">
      → {children}
    </a>
  );
}

/* ---- Rates dropdown: adds saved rates section for signed-in users ---- */
function RatesDropdown({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-3 gap-8">

        {/* Left column — always shown */}
        <div className="flex flex-col gap-2">
          {/* When signed in: show saved rates section above regular Mortgage links */}
          {isSignedIn && (
            <div className="mb-3 pb-3 border-b border-[#E5E2DB]">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-[#111928] mb-2"
                style={{ fontFamily: "Recife, Georgia, serif" }}
              >
                Your saved rates
              </p>
              <div className="bg-[#F2F7FF] rounded-lg p-3 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#515260]">Mortgage</span>
                  <span className="text-sm font-bold text-[#111928]" style={{ fontFamily: "Recife, Georgia, serif" }}>5.94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#515260]">Savings</span>
                  <span className="text-sm font-bold text-[#111928]" style={{ fontFamily: "Recife, Georgia, serif" }}>4.85%</span>
                </div>
              </div>
            </div>
          )}
          <ColHeading>Mortgage</ColHeading>
          <DropLink>Mortgage rates</DropLink>
          <DropLink>Refi rates</DropLink>
          <DropLink>VA rates</DropLink>
        </div>

        <div className="flex flex-col gap-2">
          <ColHeading>Banking</ColHeading>
          <DropLink>CD rates</DropLink>
          <DropLink>High-yield savings</DropLink>
          <DropLink>Money market</DropLink>
          <ColHeading>Cards & Loans</ColHeading>
          <DropLink>Credit card APRs</DropLink>
          <DropLink>Balance transfer</DropLink>
          <DropLink>Personal loan rates</DropLink>
          <DropLink>Auto loan rates</DropLink>
          <DropLink>Insurance quotes</DropLink>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-sm text-[#515260] border-t border-[#E5E2DB] pt-4 italic">
            All rates sourced exclusively from our marketplace — not available if you go direct
          </p>
        </div>
      </div>
    </div>
  );
}

function CompareDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Lenders</ColHeading>
          <DropLink>Best mortgage lenders</DropLink>
          <DropLink>Best savings accounts</DropLink>
          <DropLink>Best CD rates</DropLink>
          <DropLink>Best investing accounts</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Products</ColHeading>
          <DropLink>Best credit cards</DropLink>
          <DropLink>Best personal loans</DropLink>
          <DropLink>Best insurance companies</DropLink>
        </div>
      </div>
    </div>
  );
}

function CalculatorsDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Home & loans</ColHeading>
          <DropLink>Mortgage calculator</DropLink>
          <DropLink>Affordability calculator</DropLink>
          <DropLink>Home equity calculator</DropLink>
          <DropLink>Loan calculator</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Savings & cards</ColHeading>
          <DropLink>CD calculator</DropLink>
          <DropLink>Savings calculator</DropLink>
          <DropLink>Payoff calculator</DropLink>
          <DropLink>Insurance calculator</DropLink>
          <CTALink>All calculators</CTALink>
        </div>
      </div>
    </div>
  );
}

function NewsDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Today</ColHeading>
          <DropLink>Today&apos;s rate changes</DropLink>
          <DropLink>Fed coverage</DropLink>
          <DropLink>Expert analysis</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Research</ColHeading>
          <DropLink>HHT research</DropLink>
          <DropLink>Data Center</DropLink>
          <DropLink>Rate archives</DropLink>
        </div>
      </div>
    </div>
  );
}

/* ---- Why Trust Us: personalised note at top when signed in ---- */
function WhyTrustUsDropdown({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          {isSignedIn && (
            <div className="bg-[#F2F7FF] rounded-xl p-4 mb-2">
              <p className="text-sm font-semibold text-[#111928] mb-1">
                Sarah, your data is yours. Here&apos;s exactly what we store and how it&apos;s used.
              </p>
              <a href="#" className="text-[15px] font-medium text-[#0061FE] hover:underline flex items-center gap-1">
                → View your data profile
              </a>
            </div>
          )}
          <p
            className="text-base font-bold text-[#111928] mb-1"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            How our marketplace works
          </p>
          <DropLink>Editorial independence pledge</DropLink>
          <DropLink>Our methodology & rankings</DropLink>
          <DropLink>How we&apos;re paid (Radical Transparency)</DropLink>
          <DropLink>Who we are — founder story</DropLink>
          <DropLink>Meet our experts</DropLink>
        </div>

        <div className="bg-[#F2F7FF] rounded-xl p-5">
          <p
            className="text-base italic text-[#515260] leading-relaxed"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            &quot;Robert Heady didn&apos;t build this company to sell leads. He built it to give the little guy a break.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

function MyBankrateDropdown({ isSignedIn }: { isSignedIn: boolean }) {
  if (isSignedIn) {
    return <AuthedUserDropdown />;
  }
  return <SignInPromptDropdown />;
}

/* ------------------------------------------------------------------ */
/* For Partners dropdown — anchored right, enterprise treatment         */
/* ------------------------------------------------------------------ */

function ForPartnersDropdown() {
  return (
    <div className="absolute top-full right-0 w-80 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40 overflow-hidden">
      {/* Enterprise header band */}
      <div className="bg-[#F5F2EB] px-5 py-4 border-b border-[#E5E2DB]">
        <p
          className="text-[16px] font-semibold text-[#111928] leading-snug"
          style={{ fontFamily: "Recife, Georgia, serif" }}
        >
          Bankrate for business
        </p>
        <p
          className="text-[13px] text-[#6C6A67] mt-0.5"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Power your platform with Bankrate&apos;s marketplace
        </p>
      </div>

      {/* Links */}
      <div className="px-5 py-4 flex flex-col gap-2.5">
        <DropLink>Lender API integration</DropLink>
        <DropLink>Distribution SDK</DropLink>
        <DropLink>Employer benefits portal</DropLink>
        <DropLink>Partner documentation</DropLink>
        <div className="mt-1">
          <CTALink>Request access</CTALink>
        </div>
      </div>

      {/* Footer band */}
      <div className="bg-[#FAFAF8] border-t border-[#E5E2DB] px-5 py-3">
        <a
          href="#"
          className="text-[13px] text-[#6C6A67] hover:text-[#111928] transition-colors"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Already a partner? Sign in →
        </a>
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#0061FE] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        SM
      </div>
      <span className="text-[15px] font-medium text-[#111928]">Sarah M.</span>
    </div>
  );
}

type ConsumerDropdownKey = "rates" | "compare" | "calculators" | "news" | "trust" | "mybankrate";
type DropdownKey = ConsumerDropdownKey | "partners" | "avatar";

/* Left zone: product nav */
const LEFT_ITEMS: { label: string; key: ConsumerDropdownKey }[] = [
  { label: "Rates", key: "rates" },
  { label: "Compare", key: "compare" },
  { label: "Calculators", key: "calculators" },
  { label: "News", key: "news" },
];

/* Right zone: identity/trust nav (For Partners removed — moved to far-right enterprise zone) */
const RIGHT_ITEMS: { label: string; key: ConsumerDropdownKey }[] = [
  { label: "Why Trust Us", key: "trust" },
  { label: "My Bankrate", key: "mybankrate" },
];

export function Option4Nav({ isSignedIn }: { isSignedIn: boolean }) {
  const [open, setOpen] = useState<DropdownKey | null>(null);

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case "rates": return <RatesDropdown isSignedIn={isSignedIn} />;
      case "compare": return <CompareDropdown />;
      case "calculators": return <CalculatorsDropdown />;
      case "news": return <NewsDropdown />;
      case "trust": return <WhyTrustUsDropdown isSignedIn={isSignedIn} />;
      case "mybankrate": return <MyBankrateDropdown isSignedIn={isSignedIn} />;
      case "partners": return <ForPartnersDropdown />;
      case "avatar": return <AvatarProfileDropdown />;
    }
  };

  function NavBtn({ item }: { item: { label: string; key: ConsumerDropdownKey } }) {
    return (
      <button
        key={item.key}
        onMouseEnter={() => setOpen(item.key)}
        onClick={() => setOpen(open === item.key ? null : item.key)}
        className={`
          px-3 py-2 text-[15px] font-medium rounded-md transition-colors whitespace-nowrap
          ${open === item.key ? "text-[#0061FE] border-b-2 border-[#0061FE]" : "text-[#515260] hover:text-[#0061FE]"}
        `}
      >
        {item.label}
      </button>
    );
  }

  return (
    <nav
      className="sticky top-[57px] z-40 bg-white border-b border-[#E5E2DB]"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="max-w-[1312px] mx-auto px-6 h-[72px] flex items-center gap-4 relative">
        {/* Logo */}
        <NavLogo />

        {/* Left zone — product nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          {LEFT_ITEMS.map((item) => (
            <NavBtn key={item.key} item={item} />
          ))}
        </div>

        {/* Divider between left and right consumer zones */}
        <div className="hidden lg:block w-px h-6 bg-[#E5E2DB] mx-2 flex-shrink-0" />

        {/* Right zone — identity/trust nav */}
        <div className="hidden lg:flex items-center gap-1">
          {RIGHT_ITEMS.map((item) => (
            <NavBtn key={item.key} item={item} />
          ))}
        </div>

        {/* Auth CTAs / Avatar */}
        <div className="flex items-center gap-3 ml-4">
          {isSignedIn ? (
            /* Avatar — triggers its own profile management dropdown */
            <div className="relative">
              <button
                onMouseEnter={() => setOpen("avatar")}
                onClick={() => setOpen(open === "avatar" ? null : "avatar")}
                aria-expanded={open === "avatar"}
                aria-haspopup="true"
                aria-label="Open profile menu for Sarah M."
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full bg-[#0061FE] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  SM
                </div>
                <span className="text-[15px] font-medium text-[#111928]">Sarah M.</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className={`text-[#515260] transition-transform ${open === "avatar" ? "rotate-180" : ""}`}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === "avatar" && <AvatarProfileDropdown />}
            </div>
          ) : (
            <>
              <a href="#" className="text-[15px] font-medium text-[#515260] hover:text-[#0061FE]">Log in</a>
              <a href="#" className="bg-[#0061FE] text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign up</a>
            </>
          )}
        </div>

        {/* Separator + For Partners utility link — enterprise zone, far right */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-px h-5 bg-[#E5E2DB] flex-shrink-0" />
          <button
            onMouseEnter={() => setOpen("partners")}
            onClick={() => setOpen(open === "partners" ? null : "partners")}
            className="text-[13px] text-[#6C6A67] hover:text-[#111928] transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            For partners ↗
          </button>
        </div>
      </div>

      {open && open !== "avatar" && <div className="mega-menu-panel">{renderDropdown(open)}</div>}
    </nav>
  );
}
