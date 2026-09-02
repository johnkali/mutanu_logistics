import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <section className="bg-[#f4f5f7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="border border-slate-200 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            Need Logistics Support?
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl">
            Let&apos;s Discuss Your Requirements
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Tell us what you need and we&apos;ll discuss the most suitable way
            to support you.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex min-h-11 items-center gap-2 bg-[#d9232e] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
