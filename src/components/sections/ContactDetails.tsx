import { Mail, MessageCircle, Phone } from "lucide-react";
import PrivacyCard from "./PrivacyCard";
import { contactDetails } from "../../data/contact";

export default function ContactDetails() {
  // Create the WhatsApp URL from the configured number.
  const whatsappUrl = `https://wa.me/${contactDetails.whatsappNumber}`;

  return (
    <aside className="lg:pt-1">
      <div className="bg-[#0b1b2b] p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
          Prefer To Talk?
        </p>

        <h2 className="mt-3 text-2xl font-semibold uppercase leading-tight sm:text-3xl">
          Speak With Us Directly
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          For a quicker response, reach us directly through WhatsApp or use the
          contact details below.
        </p>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex items-center justify-center gap-2 bg-[#d9232e] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b1b2b]"
        >
          <MessageCircle className="h-4 w-4" />
          Chat On WhatsApp
        </a>
      </div>

      {/* Contact information */}
      <div className="mt-5 space-y-3">
        <a
          href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-4 border border-slate-200 bg-white p-5 transition hover:border-[#d9232e]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f4f5f7]">
            <Phone className="h-4 w-4 text-[#d9232e]" />
          </span>

          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Phone
            </span>

            <span className="mt-1 block text-sm font-medium text-[#0b1b2b]">
              {contactDetails.phone}
            </span>
          </span>
        </a>

        <a
          href={`mailto:${contactDetails.email}`}
          className="flex items-center gap-4 border border-slate-200 bg-white p-5 transition hover:border-[#d9232e]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f4f5f7]">
            <Mail className="h-4 w-4 text-[#d9232e]" />
          </span>

          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Email
            </span>

            <span className="mt-1 block text-sm font-medium text-[#0b1b2b]">
              {contactDetails.email}
            </span>
          </span>
        </a>
      </div>

      <PrivacyCard />
    </aside>
  );
}
