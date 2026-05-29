"use client";

export type VariantId = 1 | 2 | 3 | 4;

const VARIANTS: { id: VariantId; label: string }[] = [
  { id: 1, label: "Option 1 — Marketplace Augmentation" },
  { id: 2, label: "Option 2 — Job-to-be-Done" },
  { id: 3, label: "Option 3 — Auction-Forward" },
  { id: 4, label: "Option 4 — Two-Zone Trust" },
];

interface VariantSwitcherProps {
  active: VariantId;
  onChange: (id: VariantId) => void;
}

export function VariantSwitcher({ active, onChange }: VariantSwitcherProps) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#E5E2DB] shadow-sm">
      <div className="max-w-[1312px] mx-auto px-6 py-3">
        <div className="flex flex-wrap gap-2">
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              onClick={() => onChange(v.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap
                ${
                  active === v.id
                    ? "bg-[#13223B] text-white border-[#13223B]"
                    : "bg-white text-[#515260] border-[#E5E2DB] hover:border-[#0061FE] hover:text-[#0061FE]"
                }
              `}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
