import SEO from "../components/seo/SEO";
import AboutHero from "../components/sections/AboutHero";
import AboutIntro from "../components/sections/AboutIntro";
import AboutReasons from "../components/sections/AboutReasons";
import AboutCTA from "../components/sections/AboutCTA";
import Testimonials from "../components/sections/Testimonials";
// import { aboutTestimonials } from "../data/about";

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
      <Testimonials
        eyebrow="Client References"
        title="Trusted Experience"
        description="Our clients' experience reflects the reliability and care we bring to every assignment."
      />
      <AboutCTA />
    </>
  );
}
