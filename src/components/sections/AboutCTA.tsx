import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold uppercase text-[#0b1b2b] sm:text-3xl">
          Have Questions? We&apos;re Here to Help.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
          Speak with us about your freight and logistics requirements.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex min-h-10 items-center gap-2 bg-[#d9232e] px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
        >
          Get in Touch
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
