import { Sparkles, Shield, Lock } from "lucide-react";
// import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Lock,
    title: "Trusted Experience",
    description:
      "With decades of experience in freight and logistics, we bring practical knowledge to complex shipping requirements.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We coordinate every shipment with care and consistency, keeping your cargo moving safely and according to plan.",
  },
  {
    icon: Sparkles,
    title: "Personalised Support",
    description:
      "Logistics plans are built entirely from the ground up, based on your specific urgency, budget, and cargo needs.",
  },
];

export default function ServicesIntro() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="About Mutanu Logistics"
            title="Logistics Support Built Around Your Needs"
          />

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Logistics Support, Delivered with Care.
              <br /> <br />
              At Mutanu, we take a practical and personalized approach to freight and logistics, working closely with our clients to understand their requirements and provide solutions suited to each situation. Our approach is built on reliability, adaptability and personal service.
            </p>
            {/* 
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b1b2b] transition hover:text-[#d9232e]"
            >
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </Link> */}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#0b1b2b] text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#0b1b2b]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
