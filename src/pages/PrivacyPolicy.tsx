import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f5f6f8]">
      {/* Page header */}
      <section className="bg-[#0b1b2b] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Legal
          </p>

          <h1 className="mt-3 font-heading text-3xl font-semibold uppercase text-white sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            How Mutanu Holdings collects, uses and protects information provided
            through this website.
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <article className="mx-auto max-w-4xl">
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Last updated: September 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                1. Information We Collect
              </h2>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                When you contact us or submit an enquiry through this website,
                we may collect information such as your name, email address,
                phone number, service requirements and other information you
                voluntarily provide.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                We may also collect limited technical information about website
                usage, such as browser type, device information and general
                website activity.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                2. How We Use Your Information
              </h2>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Information provided through this website may be used to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:text-base">
                <li>Respond to enquiries and requests.</li>
                <li>Understand your freight or logistics requirements.</li>
                <li>Provide information about our services.</li>
                <li>Communicate with you regarding your enquiry.</li>
                <li>Improve our website and services.</li>
                <li>Maintain website security and functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                3. Information Sharing
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Mutanu Holdings does not sell personal information. Information
                may be shared where reasonably necessary to respond to an
                enquiry, provide requested services, operate the website, or
                where required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                4. Data Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We take reasonable measures to protect information submitted
                through this website against unauthorised access, misuse or
                disclosure.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                However, no transmission of information over the internet can be
                guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                5. Data Retention
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We retain information only for as long as reasonably necessary
                for the purpose for which it was collected, to maintain
                appropriate business records, or to meet applicable legal
                requirements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                6. Your Rights
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Depending on applicable law, you may have rights regarding the
                personal information we hold about you, including requesting
                access, correction or deletion of your information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                7. Cookies
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our website may use cookies or similar technologies to support
                website functionality, understand website usage and improve user
                experience.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                8. Third-Party Services
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The website may use third-party services such as analytics,
                hosting, maps, communication or messaging services. These
                services may process information according to their own privacy
                policies.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold uppercase text-[#0b1b2b] sm:text-2xl">
                9. Contact Us
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact Mutanu Holdings through
                the contact details provided on this website.
              </p>
            </section>
          </div>

          {/* Back link */}
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
