import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homeServices } from "../../data/home";
import SectionHeading from "../ui/SectionHeading";

function ServicesShowcase() {
  return (
    <section className="bg-[#f4f5f7] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Core Competencies"
          title="Bespoke Services Rendered Globally"
          description="Explore the services we provide to support the movement of goods and simplify logistics requirements."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeServices.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6 sm:p-7">
                {/* <p className="text-xs font-semibold uppercase tracking-widest text-[#d9232e]">
                  Mutanu
                </p> */}

                <h3 className="mt-3 text-xl font-bold text-[#0b1b2b]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d9232e] hover:text-[#0b1b2b]"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;
