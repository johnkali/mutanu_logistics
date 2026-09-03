import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <section className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl lg:text-4xl">
            Let&apos;s Talk About Your Logistics Needs
          </h2>
        </div>

        {/* Form + contact details */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>

          <ContactDetails />
        </div>
      </div>
    </section>
  );
}
