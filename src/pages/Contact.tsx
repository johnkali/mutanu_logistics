import SEO from "../components/seo/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Mutanu | Get in Touch"
        description="Get in touch with Mutanu for freight and logistics support."
        path="/contact"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#d9232e]">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[#0b1b2b]">Get in Touch</h1>
      </section>
    </>
  );
}
