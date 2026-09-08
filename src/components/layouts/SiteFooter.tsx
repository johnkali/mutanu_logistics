import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight, MessageCircle } from "lucide-react";
import { contactDetails } from "../../data/contact";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1b2b] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company information */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              aria-label="Mutanu Holdings home"
              className="inline-block"
            >
              <img
                src="/images/Mutanu-Logo-Final.png"
                alt="Mutanu Holdings"
                className="h-10 w-auto sm:h-11"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-300">
              Trusted freight and logistics support delivered with discretion,
              reliability and personalised service.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#d9232e]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />

              <span>Chat with us on WhatsApp</span>

              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.12em]">
              Quick Links
            </h2>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.12em]">
              Our Services
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Freight Services
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Customs Clearance
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Logistics Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.12em]">
              Get In Touch
            </h2>

            <div className="mt-5 space-y-5">
              {/* Phone */}
              <a
                href={`tel:${contactDetails.phone}`}
                className="group flex items-start gap-3"
              >
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#d9232e]"
                  aria-hidden="true"
                />

                <span className="text-sm text-slate-300 transition group-hover:text-white">
                  +254 700 000 000
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@mutanu.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#d9232e]"
                  aria-hidden="true"
                />

                <span className="text-sm text-slate-300 transition group-hover:text-white">
                  info@mutanu.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#d9232e]"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-slate-300">Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-16">
          <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Mutanu Holdings. All rights reserved.</p>

            <div className="flex items-center gap-5">
              <Link to="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>

              <Link to="/terms" className="transition hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
