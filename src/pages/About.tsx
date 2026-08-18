import SEO from "../components/seo/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Mutanu | Freight & Logistics"
        description="Learn more about Mutanu and its freight and logistics support."
        path="/about"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#d9232e]">
          About
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[#0b1b2b]">About Mutanu</h1>
      </section>
    </>
  );
}
