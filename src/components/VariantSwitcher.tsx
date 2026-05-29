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
  isSignedIn: boolean;
  onAuthToggle: (signedIn: boolean) => void;
}

export function VariantSwitcher({ active, onChange, isSignedIn, onAuthToggle }: VariantSwitcherProps) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#E5E2DB] shadow-sm">
      <div className="max-w-[1312px] mx-auto px-6 py-3">
        <div className="flex flex-wrap items-center gap-2 justify-between">
          {/* Variant tabs */}
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

          {/* Auth state toggle — pill with two side-by-side options */}
          <div className="flex items-center gap-0 border border-[#E5E2DB] rounded-full overflow-hidden flex-shrink-0">
            <button
              onClick={() => onAuthToggle(false)}
              className={`
                px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap
                ${!isSignedIn ? "bg-gray-200 text-gray-700" : "bg-white text-[#515260] hover:bg-gray-50"}
              `}
            >
              Anonymous
            </button>
            <button
              onClick={() => onAuthToggle(true)}
              className={`
                px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1.5
                ${isSignedIn ? "bg-[#13223B] text-white" : "bg-white text-[#515260] hover:bg-gray-50"}
              `}
            >
              {isSignedIn && (
                <span className="w-5 h-5 rounded-full bg-[#0061FE] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  SM
                </span>
              )}
              Signed in as Sarah M.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
