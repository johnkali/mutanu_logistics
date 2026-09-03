import SEO from "../components/seo/SEO";
import ContactHero from "../components/sections/ContactHero";
import ContactContent from "../components/sections/ContactContent";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Mutanu | Get in Touch"
        description="Get in touch with Mutanu for freight and logistics support."
        path="/contact"
      />

      <ContactHero />
      <ContactContent />
    </>
  );
}
