import SEO from "../components/seo/SEO";

import Hero from "../components/sections/Hero";
import ServicesIntro from "../components/sections/ServicesIntro";
import ApproachSection from "../components/sections/ApproachSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ServicesShowcase from "../components/sections/ServicesShowcase";
import RegionalSection from "../components/sections/RegionalSection";
import ReviewsSlider from "../components/sections/ReviewsSlider";
import HomeCTA from "../components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="Mutanu | Trusted Freight & Logistics Support"
        description="Trusted freight and logistics support tailored to your business needs."
        path="/"
      />

      <Hero />

      <ServicesIntro />

      <ApproachSection />

      <ExperienceSection />

      <ServicesShowcase />

      <RegionalSection />

      <ReviewsSlider />

      <HomeCTA />
    </>
  );
}
