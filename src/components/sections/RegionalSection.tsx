import { Globe2, MapPin, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const regions = [
  {
    icon: MapPin,
    title: "Kenya",
    description: "Supporting logistics and freight requirements within Kenya.",
  },
  {
    icon: Globe2,
    title: "Southern Africa",
    description:
      "Experience supporting movement along key Southern African trade routes.",
  },
  {
    icon: ShieldCheck,
    title: "Regional Support",
    description:
      "Practical support for clients navigating cross-border logistics requirements.",
  },
];

function RegionalSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Reach"
          title="Trusted by Clients Across Africa"
          description="Our regional experience helps us understand the practical requirements involved in moving goods across borders."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {regions.map((region) => {
            const Icon = region.icon;

            return (
              <article
                key={region.title}
                className="border border-slate-200 p-6 text-center sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#0b1b2b] text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0b1b2b]">
                  {region.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {region.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RegionalSection;
