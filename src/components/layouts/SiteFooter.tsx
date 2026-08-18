import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site";

function SiteFooter() {
  return (
    <footer className="bg-[#0b1b2b] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link to="/" aria-label="Mutanu home">
              <img
                src="/images/Mutanu-Logo-Final.png"
                alt="Mutanu"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Trusted freight and logistics support tailored to your business
              needs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h2>

            <ul className="mt-5 space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>Freight Services</li>
              <li>Customs Clearance</li>
              <li>Logistics Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h2>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>

              <Link
                to="/contact"
                className="inline-block pt-2 font-semibold text-white hover:text-[#d9232e]"
              >
                Contact Mutanu →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Mutanu Logistics. All rights
              reserved.
            </p>

            <p>Freight & Logistics Support</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
