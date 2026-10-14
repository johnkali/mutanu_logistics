
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ReferenceCard from "../components/sections/ReferenceCard";
import { clientReferences } from "../data/references";

export default function References() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#0b1b2b] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d9232e]">
            Our credentials
          </p>

          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Client References &amp; Testimonials
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore reference letters from organisations that have
            engaged Mutanu for freight forwarding, shipping and
            logistics support. View the original documents to learn
            more about our experience and client relationships.
          </p>

          <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
            <ShieldCheck
              size={20}
              className="shrink-0 text-[#d9232e]"
              aria-hidden="true"
            />
            Original client reference documents
          </div>
        </div>
      </section>

      {/* Reference documents */}
      <section
        aria-labelledby="references-heading"
        className="bg-slate-50 px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d9232e]">
              Our track record
            </p>

            <h2
              id="references-heading"
              className="font-heading text-2xl font-bold uppercase leading-snug text-[#0b1b2b] sm:text-3xl"
            >
              References from our clients
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Select a reference to open the full letter. PDF
              documents can also be downloaded for convenient
              viewing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {clientReferences.map((reference) => (
              <ReferenceCard
                key={reference.id}
                reference={reference}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-l-4 border-[#d9232e] bg-slate-50 p-6 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d9232e]">
              Work with Mutanu
            </p>

            <h2 className="font-heading text-2xl font-bold uppercase text-[#0b1b2b] sm:text-3xl">
              Need dependable freight and logistics support?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Tell us about your shipment and requirements.
              Our team can discuss the support you need.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#d9232e] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
          >
            Get in Touch
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
