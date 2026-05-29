"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/* Shared primitives                                                    */
/* ------------------------------------------------------------------ */

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

interface DropdownColumnProps {
  heading: string;
  children: React.ReactNode;
}

function DropdownColumn({ heading, children }: DropdownColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="text-xs font-semibold uppercase tracking-widest text-[#111928] mb-1"
        style={{ fontFamily: "Recife, Georgia, serif" }}
      >
        {heading}
      </p>
      {children}
    </div>
  );
}

function DropLink({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[15px] text-[#515260] hover:text-[#0061FE] hover:pl-1 transition-all block"
    >
      {children}
    </a>
  );
}

function CTALink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="text-[15px] font-medium text-[#0061FE] hover:underline flex items-center gap-1"
    >
      → {children}
    </a>
  );
}

function ExclusiveBadge() {
  return (
    <span className="bg-[#0061FE] text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-2">
      Exclusive
    </span>
  );
}

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F2F7FF] rounded-xl p-4 text-sm text-[#515260]">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dropdown panels                                                      */
/* ------------------------------------------------------------------ */

function OurMarketplaceDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <DropdownColumn heading="The Auction Story">
          <DropLink>How our marketplace works</DropLink>
          <DropLink>Why our rates beat direct</DropLink>
          <DropLink>600 lenders competing for your loan</DropLink>
          <CTALink>The Hidden Homeownership Tax</CTALink>
          <CalloutBox>
            <em>Exclusive rates — not available direct</em>
          </CalloutBox>
        </DropdownColumn>

        <DropdownColumn heading="Enter by product">
          <DropLink>Mortgage rates</DropLink>
          <DropLink>CD & savings rates</DropLink>
          <DropLink>Credit card rates</DropLink>
          <DropLink>Personal loan rates</DropLink>
          <DropLink>Insurance quotes</DropLink>
        </DropdownColumn>

        <DropdownColumn heading="Trust signals">
          <DropLink>Editorial independence</DropLink>
          <DropLink>Our methodology</DropLink>
          <DropLink>How we're paid</DropLink>
          <DropLink>About our rankings</DropLink>
          <DropLink>Founder story</DropLink>
        </DropdownColumn>
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
            Power your platform with Bankrate rates
          </p>
          <DropLink>Lender API integration</DropLink>
          <DropLink>Distribution SDK</DropLink>
          <DropLink>Employer benefits portal</DropLink>
          <DropLink>Partner documentation</DropLink>
          <div className="mt-4">
            <CTALink>Request access</CTALink>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyRatesDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8">
        <div className="max-w-xs">
          <DropLink>Saved rates</DropLink>
          <DropLink>Rate alerts</DropLink>
          <DropLink>My pre-qualification</DropLink>
          <DropLink>Exclusive Insider offers</DropLink>
        </div>
      </div>
    </div>
  );
}

function SimpleDropdown({ links }: { links: string[] }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          {links.slice(0, 3).map((l) => (
            <DropLink key={l}>{l}</DropLink>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {links.slice(3).map((l) => (
            <DropLink key={l}>{l}</DropLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav items config                                                     */
/* ------------------------------------------------------------------ */

type DropdownKey =
  | "marketplace"
  | "banking"
  | "mortgages"
  | "investing"
  | "cards"
  | "loans"
  | "insurance"
  | "myrates"
  | "partners";

interface NavItemDef {
  label: string;
  key: DropdownKey;
}

const NAV_ITEMS: NavItemDef[] = [
  { label: "Our Marketplace", key: "marketplace" },
  { label: "Banking", key: "banking" },
  { label: "Mortgages", key: "mortgages" },
  { label: "Investing", key: "investing" },
  { label: "Credit Cards", key: "cards" },
  { label: "Loans", key: "loans" },
  { label: "Insurance", key: "insurance" },
  { label: "My Rates", key: "myrates" },
  { label: "For Partners", key: "partners" },
];

const SIMPLE_LINKS: Record<string, string[]> = {
  banking: [
    "Checking accounts",
    "Savings accounts",
    "Money market accounts",
    "CD rates",
    "Online banks",
    "Bank reviews",
  ],
  mortgages: [
    "Mortgage rates",
    "Refinance rates",
    "Mortgage calculator",
    "Best mortgage lenders",
    "FHA loans",
    "VA loans",
  ],
  investing: [
    "Best brokerages",
    "Robo-advisors",
    "IRAs",
    "401(k) guide",
    "Stock market",
    "Investing basics",
  ],
  cards: [
    "Best credit cards",
    "Cash back cards",
    "Travel cards",
    "0% APR cards",
    "Balance transfer",
    "Card comparison",
  ],
  loans: [
    "Personal loans",
    "Auto loans",
    "Student loans",
    "Home equity",
    "Small business loans",
    "Loan calculator",
  ],
  insurance: [
    "Car insurance",
    "Home insurance",
    "Life insurance",
    "Health insurance",
    "Compare quotes",
    "Insurance guides",
  ],
};

/* ------------------------------------------------------------------ */
/* Main nav component                                                   */
/* ------------------------------------------------------------------ */

export function Option1Nav() {
  const [open, setOpen] = useState<DropdownKey | null>(null);

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case "marketplace":
        return <OurMarketplaceDropdown />;
      case "partners":
        return <ForPartnersDropdown />;
      case "myrates":
        return <MyRatesDropdown />;
      default:
        return <SimpleDropdown links={SIMPLE_LINKS[key] ?? []} />;
    }
  };

  return (
    <nav
      className="sticky top-[57px] z-40 bg-white border-b border-[#E5E2DB]"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="max-w-[1312px] mx-auto px-6 h-[72px] flex items-center justify-between relative">
        {/* Logo */}
        <NavLogo />

        {/* Nav items */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onMouseEnter={() => setOpen(item.key)}
              onClick={() => setOpen(open === item.key ? null : item.key)}
              className={`
                px-3 py-2 text-[15px] font-medium rounded-md transition-colors whitespace-nowrap
                ${
                  open === item.key
                    ? "text-[#0061FE] border-b-2 border-[#0061FE]"
                    : "text-[#515260] hover:text-[#0061FE]"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[15px] font-medium text-[#515260] hover:text-[#0061FE]"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-[#0061FE] text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>

      {/* Dropdown panel */}
      {open && (
        <div className="mega-menu-panel">{renderDropdown(open)}</div>
      )}
    </nav>
  );
}
