import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const experiencePoints = [
  "Practical understanding of freight and logistics requirements",
  "Support tailored to individual client needs",
  "Experience across regional trade routes",
  "A focus on reliability, discretion and clear communication",
];

export default function ExperienceSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="overflow-hidden">
          <img
            src="/images/freight.jpg"
            alt="Logistics and freight operations"
            className="aspect-4/3 w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Our Heritage"
            title="Experience You Can Rely On"
            description="
            Over the years, we have developed extensive experience in freight forwarding and logistics, 
            supporting cargo movements across the African continent and working with established industry partners. 
            Our experience allows us to approach each assignment with practical knowledge, 
            attention to detail and an understanding of the challenges involved in moving goods."
          />

          <ul className="mt-8 space-y-4">
            {experiencePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9232e]" />

                <span className="text-sm leading-6 text-slate-600">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-[#d9232e] pl-5 text-sm italic leading-7 text-slate-600">
            Our goal is simple: provide dependable logistics support while
            giving every client confidence in the process.
          </p>
        </div>
      </div>
    </section>
  );
}
