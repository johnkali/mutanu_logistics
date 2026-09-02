import SEO from "../components/seo/SEO";
import AboutHero from "../components/sections/AboutHero";
import AboutIntro from "../components/sections/AboutIntro";
import AboutReasons from "../components/sections/AboutReasons";
import AboutCTA from "../components/sections/AboutCTA";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import { aboutTestimonials } from "../data/about";

export default function About() {
  return (
    <>
      <SEO
        title="About Mutanu | Freight & Logistics"
        description="Learn more about Mutanu and its freight and logistics support."
        path="/about"
      />
      <AboutHero />
      <AboutIntro />
      <AboutReasons />
      <TestimonialSlider
        testimonials={aboutTestimonials}
        eyebrow="Client Trust"
        title="Trusted by Clients Across Africa"
      />
      <AboutCTA />
    </>
  );
}
