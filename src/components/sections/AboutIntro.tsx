import SectionHeading from "../ui/SectionHeading";

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* About copy */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Discretion First. Absolute Reliability Always."
            />

            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-slate-600">
              <p>
                Mutanu provides specialised freight, customs clearance and
                logistics support tailored to individual client requirements.
              </p>

              <p>
                We understand that every movement comes with its own
                requirements. Our approach is built around dependable service,
                clear communication and practical logistics support.
              </p>
            </div>
          </div>

          {/* Supporting image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="/images/about/handshake.jpeg"
                alt="Freight logistics operations"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Small brand accent */}
            <div
              className="absolute -bottom-2 -left-2 h-12 w-12 bg-[#d9232e] sm:-bottom-3 sm:-left-3"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
