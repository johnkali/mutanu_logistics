import SectionHeading from "../ui/SectionHeading";
import { homeApproach } from "../../data/home";

function ApproachSection() {
  return (
    <section className="bg-[#f4f5f7] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Mutanu"
          title="A More Personalised Approach to Logistics"
          //   description="We combine practical experience, personalised support and clear communication to help clients navigate freight and logistics with greater confidence."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {homeApproach.map((item) => (
            <article key={item.number} className="bg-white p-6 sm:p-7 lg:p-8">
              <span className="text-xs font-bold tracking-widest text-[#d9232e]">
                {item.number}
              </span>

              <h3 className="mt-5 text-lg font-bold text-[#0b1b2b]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ApproachSection;
