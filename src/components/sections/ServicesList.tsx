import { services } from "../../data/services";
import ServiceFeature from "./ServiceFeature";

export default function ServicesList() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            Our Expertise
          </p>

          <h2 className="mt-3 text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl lg:text-4xl">
            Logistics Solutions Built Around Your Needs
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            We provide practical and personalised support across freight,
            customs clearance and logistics.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceFeature service={service} reverse={index % 2 !== 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
