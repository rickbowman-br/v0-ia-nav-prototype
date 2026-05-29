"use client";

/**
 * AvatarProfileDropdown — compact profile management panel triggered by the
 * "SM" avatar + "Sarah M. ▾" button in the signed-in state across all four nav
 * options. Renders a right-anchored ~280px panel with account management links,
 * financial quick-access, and a sign-out row.
 *
 * Anonymous state: avatar is not shown; nav item dropdowns handle their own
 * sign-in prompt via <SignInPromptDropdown />.
 */

/* ------------------------------------------------------------------ */
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-widest text-[#AAAAAA] px-4 pt-3 pb-1"
      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
    >
      {children}
    </p>
  );
}

function ProfileRow({
  children,
  badge,
}: {
  children: React.ReactNode;
  badge?: React.ReactNode;
}) {
  return (
    <a
      href="#"
      className="flex items-center justify-between px-4 py-2 text-[14px] text-[#374151] hover:text-[#0061FE] hover:bg-[#F5F8FF] transition-colors rounded-lg mx-1"
      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
    >
      <span>{children}</span>
      {badge && <span className="ml-2 flex-shrink-0">{badge}</span>}
    </a>
  );
}

function Divider() {
  return <div className="my-1 border-t border-[#F0EDE8] mx-4" />;
}

/* ------------------------------------------------------------------ */
/* Signed-in panel                                                      */
/* ------------------------------------------------------------------ */

export function AvatarProfileDropdown() {
  return (
    <div
      className="absolute top-full right-0 w-[280px] bg-white rounded-2xl shadow-lg border border-[#F0EDE8] z-50 overflow-hidden"
      style={{ marginTop: "8px" }}
    >
      {/* Header: avatar + name + email */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[#F0EDE8]">
        <div className="w-10 h-10 rounded-full bg-[#0061FE] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          SM
        </div>
        <div className="flex flex-col min-w-0">
          <span
            className="text-[15px] font-semibold text-[#111928] leading-tight truncate"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            Sarah M.
          </span>
          <span
            className="text-[13px] text-[#6C6A67] leading-tight truncate"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            sarah.m@gmail.com
          </span>
        </div>
      </div>

      {/* Account section */}
      <SectionLabel>Account</SectionLabel>
      <ProfileRow>My profile</ProfileRow>
      <ProfileRow>Notification preferences</ProfileRow>
      <ProfileRow>Privacy &amp; data settings</ProfileRow>
      <ProfileRow>Connected accounts</ProfileRow>

      <Divider />

      {/* Quick access section */}
      <SectionLabel>Quick access</SectionLabel>

      {/* My saved rates — links into the My Rates dropdown content */}
      <ProfileRow>My saved rates</ProfileRow>

      {/* My rate alerts — fired mortgage alert dot */}
      <ProfileRow
        badge={
          <span className="w-2 h-2 rounded-full bg-[#E5665E] inline-block" aria-label="Alert fired" />
        }
      >
        My rate alerts
      </ProfileRow>

      {/* My pre-qualification — in progress badge */}
      <ProfileRow
        badge={
          <span
            className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-200 text-[#374151] leading-none"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            In progress
          </span>
        }
      >
        My pre-qualification
      </ProfileRow>

      {/* Exclusive Insider offers — teal count badge */}
      <ProfileRow
        badge={
          <span
            className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-[#00A391] text-white leading-none"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            12
          </span>
        }
      >
        Exclusive Insider offers
      </ProfileRow>

      <Divider />

      {/* Sign out */}
      <div className="pb-2">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-[13px] text-[#6C6A67] hover:text-[#E5665E] transition-colors rounded-lg mx-1"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          aria-label="Sign out"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sign-in prompt panel (anonymous state for My Rates nav item)        */
/* ------------------------------------------------------------------ */

export function SignInPromptDropdown() {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-[#E5E2DB] z-40">
      <div className="max-w-[1312px] mx-auto px-6 py-8">
        <div className="max-w-sm flex flex-col gap-3">
          <p
            className="text-[16px] font-semibold text-[#111928] leading-snug"
            style={{ fontFamily: "Recife, Georgia, serif" }}
          >
            Sign in to save rates and set alerts
          </p>
          <p
            className="text-[13px] text-[#515260] leading-relaxed"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Get personalized rate matches, exclusive Insider offers, and rate change notifications.
          </p>
          <a
            href="#"
            className="mt-1 bg-[#0061FE] text-white text-[15px] font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-center"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Log in
          </a>
          <a
            href="#"
            className="text-[14px] text-[#515260] hover:text-[#0061FE] text-center transition-colors"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
