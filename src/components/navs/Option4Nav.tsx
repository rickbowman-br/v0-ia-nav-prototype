"use client";

import { useState } from "react";

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

/* ---- Rates dropdown: single wide column listing all verticals ---- */
function RatesDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
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
          <DropLink>Today's rate changes</DropLink>
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

/* ---- Why Trust Us: trust story as destination ---- */
function WhyTrustUsDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <p
            className="text-base font-bold text-[#111928] mb-1"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            How our marketplace works
          </p>
          <DropLink>Editorial independence pledge</DropLink>
          <DropLink>Our methodology & rankings</DropLink>
          <DropLink>How we're paid (Radical Transparency)</DropLink>
          <DropLink>Who we are — founder story</DropLink>
          <DropLink>Meet our experts</DropLink>
        </div>

        <div className="bg-[#F2F7FF] rounded-xl p-5">
          <p
            className="text-base italic text-[#515260] leading-relaxed"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            "Robert Heady didn't build this company to sell leads. He built it to give the little guy a break."
          </p>
        </div>
      </div>
    </div>
  );
}

function MyBankrateDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8">
        <div className="max-w-xs flex flex-col gap-2">
          <DropLink>Saved rates</DropLink>
          <DropLink>Rate alerts</DropLink>
          <DropLink>Exclusive Insider offers</DropLink>
          <DropLink>Pre-qualification</DropLink>
          <DropLink>Account settings</DropLink>
        </div>
      </div>
    </div>
  );
}

function ForPartnersDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8">
        <div className="max-w-xs">
          <p
            className="text-base font-semibold text-[#111928] mb-4"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            Bankrate's platform, built for distribution
          </p>
          <div className="flex flex-col gap-2">
            <DropLink>Lender API</DropLink>
            <DropLink>Distribution SDK</DropLink>
            <DropLink>Employer portal</DropLink>
            <DropLink>Retirement plan tools</DropLink>
            <DropLink>API documentation</DropLink>
          </div>
          <div className="mt-4">
            <CTALink>Partner with us</CTALink>
          </div>
        </div>
      </div>
    </div>
  );
}

type DropdownKey = "rates" | "compare" | "calculators" | "news" | "trust" | "mybankrate" | "partners";

/* Left zone: product nav */
const LEFT_ITEMS: { label: string; key: DropdownKey }[] = [
  { label: "Rates", key: "rates" },
  { label: "Compare", key: "compare" },
  { label: "Calculators", key: "calculators" },
  { label: "News", key: "news" },
];

/* Right zone: identity/trust nav */
const RIGHT_ITEMS: { label: string; key: DropdownKey }[] = [
  { label: "Why Trust Us", key: "trust" },
  { label: "My Bankrate", key: "mybankrate" },
  { label: "For Partners", key: "partners" },
];

export function Option4Nav() {
  const [open, setOpen] = useState<DropdownKey | null>(null);

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case "rates": return <RatesDropdown />;
      case "compare": return <CompareDropdown />;
      case "calculators": return <CalculatorsDropdown />;
      case "news": return <NewsDropdown />;
      case "trust": return <WhyTrustUsDropdown />;
      case "mybankrate": return <MyBankrateDropdown />;
      case "partners": return <ForPartnersDropdown />;
    }
  };

  function NavBtn({ item }: { item: { label: string; key: DropdownKey } }) {
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

        {/* Divider */}
        <div className="hidden lg:block w-px h-6 bg-[#E5E2DB] mx-2 flex-shrink-0" />

        {/* Right zone — identity/trust nav */}
        <div className="hidden lg:flex items-center gap-1">
          {RIGHT_ITEMS.map((item) => (
            <NavBtn key={item.key} item={item} />
          ))}
        </div>

        {/* Auth CTAs */}
        <div className="flex items-center gap-3 ml-4">
          <a href="#" className="text-[15px] font-medium text-[#515260] hover:text-[#0061FE]">Log in</a>
          <a href="#" className="bg-[#0061FE] text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign up</a>
        </div>
      </div>

      {open && <div className="mega-menu-panel">{renderDropdown(open)}</div>}
    </nav>
  );
}
