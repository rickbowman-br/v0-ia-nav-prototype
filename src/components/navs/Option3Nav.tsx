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

function ColHeading({ children, badge }: { children: React.ReactNode; badge?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <p
        className="text-xs font-semibold uppercase tracking-widest text-[#111928]"
        style={{ fontFamily: "Recife, Georgia, serif" }}
      >
        {children}
      </p>
      {badge && (
        <span className="bg-[#0061FE] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          Exclusive
        </span>
      )}
    </div>
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

function MortgageMarketplaceDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <ColHeading>The auction</ColHeading>
          <div>
            <p className="text-base font-bold text-[#111928] mb-1" style={{ fontFamily: "Recife, Georgia, serif" }}>
              600 lenders bidding for your mortgage
            </p>
            <p className="text-sm text-[#515260] mb-3">Beat 99.7% of banks</p>
            <div className="flex flex-col gap-2">
              <CTALink>Get my personalized rate</CTALink>
              <CTALink>Read the HHT research</CTALink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <ColHeading badge>Today's exclusive rates</ColHeading>
          <DropLink>Purchase rates</DropLink>
          <DropLink>30-yr fixed · 15-yr · VA · FHA</DropLink>
          <DropLink>Refinance rates</DropLink>
          <DropLink>Jumbo rates</DropLink>
          <DropLink>Best lenders</DropLink>
        </div>

        <div className="flex flex-col gap-2">
          <ColHeading>Tools & guidance</ColHeading>
          <DropLink>Mortgage calculator</DropLink>
          <DropLink>Affordability calculator</DropLink>
          <DropLink>Rate news</DropLink>
          <DropLink>First-time buyer guide</DropLink>
          <DropLink>How to get a mortgage</DropLink>
        </div>
      </div>
    </div>
  );
}

function BankingRatesDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Savings</ColHeading>
          <DropLink>High-yield savings rates</DropLink>
          <DropLink>CD rates</DropLink>
          <DropLink>Money market rates</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Compare</ColHeading>
          <DropLink>Best online banks</DropLink>
          <DropLink>Best checking accounts</DropLink>
          <DropLink>Bank reviews</DropLink>
        </div>
      </div>
    </div>
  );
}

function CardMarketplaceDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <ColHeading>Match me</ColHeading>
          <DropLink>Find my best card</DropLink>
          <CTALink>See my personalized matches</CTALink>
          <DropLink>Excellent credit cards</DropLink>
          <DropLink>Good credit cards</DropLink>
          <DropLink>Fair credit cards</DropLink>
        </div>

        <div className="flex flex-col gap-2">
          <ColHeading>By category</ColHeading>
          <DropLink>Best cards of 2026</DropLink>
          <DropLink>Cash back cards</DropLink>
          <DropLink>Travel cards</DropLink>
          <DropLink>0% APR · Balance transfer</DropLink>
          <DropLink>Business cards</DropLink>
        </div>

        <div className="flex flex-col gap-2">
          <ColHeading>Tools</ColHeading>
          <DropLink>Payoff calculator</DropLink>
          <DropLink>Balance transfer calc</DropLink>
          <DropLink>Credit score check</DropLink>
          <DropLink>Card comparison guides</DropLink>
        </div>
      </div>
    </div>
  );
}

function LoanRatesDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Personal</ColHeading>
          <DropLink>Personal loan rates</DropLink>
          <DropLink>Debt consolidation</DropLink>
          <DropLink>Home improvement loans</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Auto & other</ColHeading>
          <DropLink>Auto loan rates</DropLink>
          <DropLink>Student loan rates</DropLink>
          <DropLink>Small business loans</DropLink>
        </div>
      </div>
    </div>
  );
}

function InsuranceDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>By type</ColHeading>
          <DropLink>Auto insurance</DropLink>
          <DropLink>Home insurance</DropLink>
          <DropLink>Life insurance</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Tools</ColHeading>
          <DropLink>Compare quotes</DropLink>
          <DropLink>Insurance calculator</DropLink>
          <DropLink>Insurance guides</DropLink>
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
          <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">Saved rates</a>
          <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">Rate alerts</a>
          <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">My pre-qualification</a>
          <div className="flex items-center gap-2">
            <a href="#" className="text-[15px] font-bold text-[#111928] hover:text-[#0061FE] transition-colors">Exclusive offers</a>
            <span className="bg-[#0061FE] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Insider-only</span>
          </div>
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
          <p className="text-base font-semibold text-[#111928] mb-4" style={{ fontFamily: "Recife, Georgia, serif" }}>
            Bankrate's marketplace, embedded in your platform
          </p>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">Lender API</a>
            <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">Distribution SDK</a>
            <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">Employer benefits</a>
            <a href="#" className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block">Retirement plan tools</a>
          </div>
          <div className="mt-4">
            <CTALink>Request a demo</CTALink>
          </div>
        </div>
      </div>
    </div>
  );
}

type DropdownKey = "mortgage" | "banking" | "cards" | "loans" | "insurance" | "mybankrate" | "partners";

const NAV_ITEMS: { label: string; key: DropdownKey }[] = [
  { label: "Mortgage Marketplace", key: "mortgage" },
  { label: "Banking Rates", key: "banking" },
  { label: "Card Marketplace", key: "cards" },
  { label: "Loan Rates", key: "loans" },
  { label: "Insurance", key: "insurance" },
  { label: "My Bankrate", key: "mybankrate" },
  { label: "For Partners", key: "partners" },
];

export function Option3Nav() {
  const [open, setOpen] = useState<DropdownKey | null>(null);

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case "mortgage": return <MortgageMarketplaceDropdown />;
      case "banking": return <BankingRatesDropdown />;
      case "cards": return <CardMarketplaceDropdown />;
      case "loans": return <LoanRatesDropdown />;
      case "insurance": return <InsuranceDropdown />;
      case "mybankrate": return <MyBankrateDropdown />;
      case "partners": return <ForPartnersDropdown />;
    }
  };

  return (
    <nav
      className="sticky top-[57px] z-40 bg-white border-b border-[#E5E2DB]"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="max-w-[1312px] mx-auto px-6 h-[72px] flex items-center justify-between relative">
        <NavLogo />

        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
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
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-[15px] font-medium text-[#515260] hover:text-[#0061FE]">Log in</a>
          <a href="#" className="bg-[#0061FE] text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign up</a>
        </div>
      </div>

      {open && <div className="mega-menu-panel">{renderDropdown(open)}</div>}
    </nav>
  );
}
