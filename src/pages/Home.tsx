import SEO from "../components/seo/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Mutanu | Trusted Freight & Logistics Support"
        description="Trusted freight and logistics support tailored to your business needs."
        path="/"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#d9232e]">
          Home
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[#0b1b2b]">Mutanu</h1>

        <p className="mt-4 text-slate-600">
          Home page development starts next.
        </p>
      </section>
    </>
  );
}
