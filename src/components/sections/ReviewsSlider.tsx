import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { homeReviews } from "../../data/home";

function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  const review = homeReviews[current];

  const previous = () => {
    setCurrent((index) => (index === 0 ? homeReviews.length - 1 : index - 1));
  };

  const next = () => {
    setCurrent((index) => (index === homeReviews.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="bg-[#0b1b2b] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e] sm:text-sm">
            Client Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative mt-12" aria-live="polite">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-10 w-10 text-[#d9232e]" />

            <blockquote className="mt-6 text-xl leading-9 text-slate-100 sm:text-2xl">
              “{review.quote}”
            </blockquote>

            <div className="mt-8">
              <p className="font-semibold">{review.name}</p>

              <p className="mt-1 text-sm text-slate-400">{review.role}</p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {homeReviews.map((item, index) => (
                <button
                  key={item.name + index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={current === index}
                  className={`h-2 rounded-full transition-all ${
                    current === index ? "w-7 bg-[#d9232e]" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSlider;
