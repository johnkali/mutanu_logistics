import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site";

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero/hero_image.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0D1B2A]/45" />

      {/* Additional subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0D1B2A] via-[#0D1B2A]85 to-[#0D1B2A]/20" />

      <div className="mx-auto flex min-h-130 max-w-7xl items-center px-5 py-10 sm:px-6 sm:py-24 lg:min-h-162.5 lg:px-8 lg:py-28">
        <div className="max-w-none">
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e] sm:text-sm">
            Trusted Freight & Logistics Support
          </p>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="max-w-5xl text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Trusted Freight & Logistics Support,
            <span className="mt-2 block"> Delivered with Discretion.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            Mutanu provides specialized freight forwarding, customs clearance
            and logistics support tailored to the individual needs of our
            clients. With an experienced, hands-on approach, we help individuals
            and organizations manage their logistics requirements reliably and
            professionally.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#d9232e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b91d27] focus:outline-none focus:ring-2 focus:ring-[#d9232e] focus:ring-offset-2 focus:ring-offset-[#071522]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#071522]"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
