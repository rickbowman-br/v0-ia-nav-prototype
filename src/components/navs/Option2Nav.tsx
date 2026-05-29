"use client";

import { useState } from "react";
import { AuthedUserDropdown } from "@/components/AuthedUserDropdown";

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

function FindMyRateDropdown({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>By intent</ColHeading>
          <DropLink>I&apos;m buying a home</DropLink>
          <DropLink>I&apos;m refinancing</DropLink>
          <DropLink>I want the best savings rate</DropLink>
          <DropLink>I need a loan</DropLink>
          <DropLink>I&apos;m comparing insurance</DropLink>
        </div>

        <div className="flex flex-col gap-2">
          <ColHeading>By product</ColHeading>
          <DropLink>Mortgage rates</DropLink>
          <DropLink>CD & savings rates</DropLink>
          <DropLink>Credit card APRs</DropLink>
          <DropLink>Personal loan rates</DropLink>
          <DropLink>Auto loan rates</DropLink>
          <DropLink>Insurance quotes</DropLink>
        </div>

        {/* Right column: personalized rate estimate when signed in, generic callout when not */}
        {isSignedIn ? (
          <div className="bg-[#F2F7FF] rounded-xl p-5 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0061FE]" style={{ fontFamily: "Recife, Georgia, serif" }}>
              Your estimated rate
            </p>
            <p
              className="text-3xl font-bold text-[#111928]"
              style={{ fontFamily: "Recife, Georgia, serif" }}
            >
              5.94% APR
            </p>
            <p className="text-xs text-[#515260]">Based on your profile: 780 credit · $82K down · $410K home</p>
            <a
              href="#"
              className="mt-2 bg-[#0061FE] text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              See your personalized offers
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="bg-[#F2F7FF] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0061FE] mb-2" style={{ fontFamily: "Recife, Georgia, serif" }}>
                Exclusive Rates
              </p>
              <p className="text-sm text-[#515260] italic mb-4">
                &quot;These rates come from our 600-lender marketplace — not available if you go direct&quot;
              </p>
              <div className="flex flex-col gap-2">
                <CTALink>Set a rate alert</CTALink>
                <CTALink>See my personalized matches</CTALink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BorrowSmartDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Borrowing</ColHeading>
          <DropLink>Home buying</DropLink>
          <DropLink>Refinancing</DropLink>
          <DropLink>Debt consolidation</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>More options</ColHeading>
          <DropLink>Auto loans</DropLink>
          <DropLink>Student loans</DropLink>
          <DropLink>Small business</DropLink>
          <DropLink>Home equity</DropLink>
        </div>
      </div>
    </div>
  );
}

function GrowProtectDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>Grow</ColHeading>
          <DropLink>Investing</DropLink>
          <DropLink>Retirement</DropLink>
          <DropLink>Personal finance</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Protect</ColHeading>
          <DropLink>Insurance</DropLink>
          <DropLink>Credit score</DropLink>
          <DropLink>Calculators</DropLink>
        </div>
      </div>
    </div>
  );
}

function NewsResearchDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ColHeading>News</ColHeading>
          <DropLink>Today&apos;s rate changes</DropLink>
          <DropLink>Fed coverage</DropLink>
          <DropLink>Expert contributors</DropLink>
        </div>
        <div className="flex flex-col gap-2">
          <ColHeading>Research</ColHeading>
          <DropLink>Hidden Homeownership Tax research</DropLink>
          <DropLink>Data Center</DropLink>
          <DropLink>Rate archives</DropLink>
        </div>
      </div>
    </div>
  );
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

type ConsumerDropdownKey = "findrate" | "borrow" | "grow" | "news" | "account";
type DropdownKey = ConsumerDropdownKey | "partners";

const NAV_ITEMS: { label: string; key: ConsumerDropdownKey }[] = [
  { label: "Find My Rate", key: "findrate" },
  { label: "Borrow Smart", key: "borrow" },
  { label: "Grow & Protect", key: "grow" },
  { label: "News & Research", key: "news" },
  { label: "My Account", key: "account" },
];

export function Option2Nav({ isSignedIn }: { isSignedIn: boolean }) {
  const [open, setOpen] = useState<DropdownKey | null>(null);

  const renderDropdown = (key: DropdownKey) => {
    if (isSignedIn && key === "account") {
      return <AuthedUserDropdown />;
    }
    switch (key) {
      case "findrate": return <FindMyRateDropdown isSignedIn={isSignedIn} />;
      case "borrow": return <BorrowSmartDropdown />;
      case "grow": return <GrowProtectDropdown />;
      case "news": return <NewsResearchDropdown />;
      case "account":
        return (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
            <div className="max-w-[1312px] mx-auto px-6 py-8">
              <div className="max-w-xs flex flex-col gap-2">
                <DropLink>Saved rates</DropLink>
                <DropLink>Rate alerts</DropLink>
                <DropLink>My pre-qualification</DropLink>
                <DropLink>Account settings</DropLink>
              </div>
            </div>
          </div>
        );
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

        {/* Consumer nav items */}
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

        {/* Right zone: auth CTAs + For Partners separator */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <UserAvatar />
          ) : (
            <>
              <a href="#" className="text-[15px] font-medium text-[#515260] hover:text-[#0061FE]">Log in</a>
              <a href="#" className="bg-[#0061FE] text-white text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign up</a>
            </>
          )}

          {/* Separator + For Partners utility link */}
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
      </div>

      {open && <div className="mega-menu-panel">{renderDropdown(open)}</div>}
    </nav>
  );
}
