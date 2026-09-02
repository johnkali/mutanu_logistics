import SEO from "../components/seo/SEO";
import ServicesHero from "../components/sections/ServicesHero";
import ServicesList from "../components/sections/ServicesList";
import ServicesCTA from "../components/sections/ServicesCTA";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Mutanu"
        description="Explore Mutanu's freight, customs clearance and logistics support services."
        path="/services"
      />

      <ServicesHero />

      <ServicesList />

      <ServicesCTA />
    </>
  );
}
