"use client";

import { useState } from "react";
import { VariantSwitcher, type VariantId } from "@/components/VariantSwitcher";
import { Option1Nav } from "@/components/navs/Option1Nav";
import { Option2Nav } from "@/components/navs/Option2Nav";
import { Option3Nav } from "@/components/navs/Option3Nav";
import { Option4Nav } from "@/components/navs/Option4Nav";
import { HeroSection } from "@/components/HeroSection";

interface NavProps {
  isSignedIn: boolean;
}

function NavForVariant({ variant, isSignedIn }: { variant: VariantId; isSignedIn: boolean }) {
  switch (variant) {
    case 1: return <Option1Nav isSignedIn={isSignedIn} />;
    case 2: return <Option2Nav isSignedIn={isSignedIn} />;
    case 3: return <Option3Nav isSignedIn={isSignedIn} />;
    case 4: return <Option4Nav isSignedIn={isSignedIn} />;
  }
}

export default function HomePage() {
  const [activeVariant, setActiveVariant] = useState<VariantId>(1);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Sticky variant switcher + auth toggle — always visible at top */}
      <VariantSwitcher
        active={activeVariant}
        onChange={setActiveVariant}
        isSignedIn={isSignedIn}
        onAuthToggle={setIsSignedIn}
      />

      {/* The active nav variant */}
      <NavForVariant variant={activeVariant} isSignedIn={isSignedIn} />

      {/* Hero + body content for the active variant */}
      <HeroSection variant={activeVariant} isSignedIn={isSignedIn} />

      {/* Body content */}
      <div className="max-w-[1312px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl font-bold text-[#111928] mb-4"
              style={{ fontFamily: "Recife, Georgia, serif" }}
            >
              Today&apos;s top rates
            </h2>
            <div className="space-y-4">
              {[
                { product: "30-yr fixed mortgage", rate: "6.49%", change: "↓ 0.08% today" },
                { product: "High-yield savings", rate: "5.25%", change: "Unchanged" },
                { product: "12-month CD", rate: "5.10%", change: "↑ 0.05% today" },
                { product: "Personal loan (excellent credit)", rate: "10.99%", change: "↓ 0.15% today" },
              ].map((row) => (
                <div
                  key={row.product}
                  className="flex items-center justify-between py-3 border-b border-[#E5E2DB]"
                >
                  <span className="text-[#515260]">{row.product}</span>
                  <div className="text-right">
                    <span
                      className="text-xl font-bold text-[#111928] block"
                      style={{ fontFamily: "Recife, Georgia, serif" }}
                    >
                      {row.rate}
                    </span>
                    <span className="text-xs text-[#515260]">{row.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-3xl font-bold text-[#111928] mb-4"
              style={{ fontFamily: "Recife, Georgia, serif" }}
            >
              Why Bankrate is different
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "600+ lenders compete",
                  desc: "More competition means better rates. Our marketplace is the largest in the U.S.",
                },
                {
                  title: "Editorial independence",
                  desc: "Our rankings and reviews are not influenced by advertisers — period.",
                },
                {
                  title: "Exclusive rates",
                  desc: "Many Bankrate rates are negotiated exclusively and can't be found if you go direct.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p
                    className="font-semibold text-[#111928] mb-1"
                    style={{ fontFamily: "Recife, Georgia, serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-[#515260]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
