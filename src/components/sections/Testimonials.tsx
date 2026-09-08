import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";

interface TestimonialsProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  autoPlay?: boolean;
}

export default function Testimonials({
  title = "Trusted by Clients Across Africa",
  eyebrow = "Client References",
  description = "Our work has earned the trust of organisations and clients across different sectors and markets.",
  autoPlay = true,
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalTestimonials = testimonials.length;

  /*
   * Move to the next testimonial.
   * The modulo operator allows the slider to loop continuously.
   */
  const nextTestimonial = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalTestimonials);
  };

  /*
   * Move to the previous testimonial.
   */
  const previousTestimonial = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + totalTestimonials) % totalTestimonials,
    );
  };

  /*
   * Automatically move through testimonials.
   * This can be disabled by passing autoPlay={false}.
   */
  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = window.setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, [autoPlay]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#f5f6f8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            {eyebrow}
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="relative mx-auto mt-10 max-w-4xl sm:mt-12">
          {/* Main card */}
          <div className="relative overflow-hidden border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            {/* Quote icon */}
            <div
              className="mb-6 flex h-10 w-10 items-center justify-center bg-[#0b1b2b]"
              aria-hidden="true"
            >
              <Quote className="h-5 w-5 text-white" strokeWidth={1.5} />
            </div>

            {/* Quote */}
            <blockquote
              key={activeIndex}
              className="animate-[fadeIn_0.4s_ease-in-out]"
            >
              <p className="max-w-3xl font-heading text-base leading-7 text-[#0b1b2b] sm:text-lg sm:leading-8 lg:text-xl">
                “{activeTestimonial.quote}”
              </p>

              {/* Attribution */}
              <footer className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d9232e]">
                  {activeTestimonial.organization}
                </p>

                {activeTestimonial.person && (
                  <p className="mt-2 text-sm font-semibold text-[#0b1b2b]">
                    {activeTestimonial.person}
                  </p>
                )}

                {activeTestimonial.role && (
                  <p className="mt-1 text-xs text-slate-500">
                    {activeTestimonial.role}
                  </p>
                )}
              </footer>
            </blockquote>

            {/* Desktop navigation */}
            <div className="absolute right-6 top-8 hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-[#0b1b2b] transition hover:border-[#d9232e] hover:text-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-[#0b1b2b] transition hover:border-[#d9232e] hover:text-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="mt-5 flex items-center justify-between sm:hidden">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-[#0b1b2b]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.organization}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-6 bg-[#d9232e]"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-[#0b1b2b]"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop indicators */}
          <div className="mt-6 hidden justify-center gap-2 sm:flex">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.organization}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-[#d9232e]"
                    : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
