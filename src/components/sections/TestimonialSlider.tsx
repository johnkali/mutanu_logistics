import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function TestimonialSlider({
  testimonials,
  eyebrow = "Client Trust",
  title = "Trusted by Clients Across Africa",
  description,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous testimonial
  const handlePrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  // Move to the next testimonial
  const handleNext = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  // Jump directly to a testimonial
  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section
      className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
            {eyebrow}
          </p>

          <h2
            id="testimonial-heading"
            className="mt-3 text-2xl font-semibold uppercase leading-tight text-[#0b1b2b] sm:text-3xl"
          >
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>

        {/* Slider */}
        <div className="mx-auto mt-10 max-w-4xl">
          {/* Testimonial card */}
          <div
            className="relative border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-14"
            aria-live="polite"
          >
            {/* Decorative quote */}
            <div className="absolute left-6 top-6 opacity-10 sm:left-10 sm:top-8">
              <Quote className="h-16 w-16 text-[#d9232e]" />
            </div>

            <div className="relative">
              <Quote className="h-7 w-7 text-[#d9232e]" aria-hidden="true" />

              <blockquote className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-sm font-semibold text-[#0b1b2b]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Previous button */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-[#0b1b2b] transition hover:border-[#d9232e] hover:text-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Slide indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={currentIndex === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-7 bg-[#d9232e]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-[#0b1b2b] transition hover:border-[#d9232e] hover:text-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
