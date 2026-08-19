import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section className="bg-[#f4f5f7] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#d9232e] px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Ready to Move Your Business Forward?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Get in touch with Mutanu to discuss your freight and logistics
              requirements.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-12 items-center gap-2 bg-[#0b1b2b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#071522] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#d9232e]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border-[50px] border-white/5" />
        </div>
      </div>
    </section>
  );
}
