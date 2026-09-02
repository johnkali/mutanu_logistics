import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../data/services";

interface ServiceFeatureProps {
  service: Service;
  reverse?: boolean;
}

export default function ServiceFeature({
  service,
  reverse = false,
}: ServiceFeatureProps) {
  return (
    <article
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Service image */}
      <div className="group relative overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Service number */}
        <div className="absolute left-0 top-0 bg-[#d9232e] px-4 py-3">
          <span className="font-sans text-xs font-bold tracking-widest text-white">
            {service.number}
          </span>
        </div>
      </div>

      {/* Service content */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
          Service {service.number}
        </p>

        <h2 className="mt-3 text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl">
          {service.title}
        </h2>

        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {service.description}
        </p>

        {/* Service highlights */}
        <ul className="mt-6 space-y-3">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm text-slate-600"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#f4f5f7]">
                <Check className="h-3 w-3 text-[#d9232e]" />
              </span>

              {point}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="group mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#0b1b2b] transition-colors hover:text-[#d9232e]"
        >
          Enquire About This Service
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
