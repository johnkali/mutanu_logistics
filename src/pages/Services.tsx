import SEO from "../components/seo/SEO";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Mutanu"
        description="Explore Mutanu's freight, customs clearance and logistics support services."
        path="/services"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#d9232e]">
          Services
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[#0b1b2b]">Our Services</h1>
      </section>
    </>
  );
}
