import { Shield } from "lucide-react";

export default function PrivacyCard() {
  return (
    <div className="border border-slate-200 bg-white mt-3 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        {/* Privacy icon */}
        <div className="mt-0.5 shrink-0">
          <Shield
            className="h-5 w-5 text-[#385675]"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-[#0b1b2b]">
            We Value Your Privacy
          </h3>

          <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            Mutanu handles logistics with military-grade privacy guidelines. No
            client data is ever sold or cataloged outside direct operational
            clearance workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
