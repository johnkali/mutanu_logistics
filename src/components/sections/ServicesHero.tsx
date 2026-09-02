import SEO from "../seo/SEO";

export default function ServicesHero() {
  return (
    <>
      <SEO
        title="Our Services | Freight, Customs & Logistics | Mutanu"
        description="Explore Mutanu's freight, customs clearance and logistics support services."
        path="/services"
      />

      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/services-hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-[#071522]/80" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071522]/90 via-[#071522]/70 to-transparent" />

        <div className="mx-auto flex min-h-[300px] max-w-7xl items-end px-5 pb-12 sm:min-h-[340px] sm:px-6 sm:pb-14 lg:min-h-[365px] lg:px-8 lg:pb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9232e]">
              What We Do
            </p>

            <h1
              id="services-heading"
              className="mt-3 max-w-2xl text-3xl font-semibold uppercase leading-[1.15] text-white sm:text-4xl lg:text-5xl"
            >
              Our Services
            </h1>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm">
              Practical freight and logistics support built around your
              requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
