import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="bg-[#f5f6f8]">
      {/* Page header */}
      <section className="bg-[#0b1b2b] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            Legal
          </p>

          <h1 className="mt-3 font-heading text-3xl font-semibold uppercase text-white sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Terms governing the use of the Mutanu Holdings website.
          </p>
        </div>
      </section>

      {/* Terms content */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <article className="mx-auto max-w-4xl">
          <p className="mb-8 text-xs text-slate-500">
            Last updated: September 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                1. Website Purpose
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                This website provides general information about Mutanu Holdings,
                its freight, customs clearance and logistics services, and
                provides ways for prospective and existing clients to contact
                the company.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                2. Information on This Website
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We make reasonable efforts to ensure that information presented
                on this website is accurate and useful. However, website
                information should not be considered a binding quotation,
                contractual commitment or guarantee of service.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Specific services, pricing, timelines and responsibilities will
                be agreed separately with the client.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                3. Enquiries
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Submitting an enquiry through this website does not
                automatically create a client relationship or service agreement.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Mutanu may contact you to obtain additional information before
                providing a quotation or confirming services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                4. Intellectual Property
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Unless otherwise stated, the website's content, branding,
                graphics, text and other materials belong to Mutanu Holdings or
                are used with permission.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                They may not be reproduced, copied or distributed without
                appropriate permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                5. Third-Party Links
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The website may contain links to third-party websites or
                services. Mutanu Holdings is not responsible for the content,
                availability or privacy practices of third-party websites.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                6. Website Availability
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We aim to keep the website available and functional but do not
                guarantee uninterrupted access or that the website will always
                be free from errors.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                7. Limitation of Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Information provided through this website is general in nature.
                Specific freight, customs, logistics and transportation
                requirements should be assessed and confirmed directly with
                Mutanu before arrangements are made.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                8. Changes
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Mutanu Holdings may update website content or these terms from
                time to time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                9. Applicable Law
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                These terms are intended to be governed by the applicable laws
                of Kenya, unless otherwise agreed in a specific contractual
                arrangement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                10. Contact Us
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                For questions concerning these Terms & Conditions, please
                contact Mutanu Holdings through the contact details provided on
                this website.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6">
            <Link
              to="/"
              className="text-sm font-semibold text-[#d9232e] transition hover:text-[#0b1b2b]"
            >
              ← Back to Home
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
