import { Check, ShieldCheck, UserRound, Workflow } from "lucide-react";

import { aboutReasons } from "../../data/about";

const icons = [ShieldCheck, Workflow, UserRound];

export default function AboutReasons() {
  return (
    <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl">
            Why Corporate & Private Clients Choose Us
          </h2>
        </div>

        {/* Reasons */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {aboutReasons.map((reason, index) => {
            const Icon = icons[index];

            return (
              <article
                key={reason.title}
                className="group border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d9232e]/30 hover:shadow-lg sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center bg-[#0b1b2b] text-white transition-colors group-hover:bg-[#d9232e]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0b1b2b]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>

                {/* Supporting points */}
                <ul className="mt-5 space-y-2.5">
                  {reason.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#d9232e]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
