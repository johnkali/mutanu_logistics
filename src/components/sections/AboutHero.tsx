function AboutHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/about/about-hero.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark overlay keeps the heading readable */}
      <div className="absolute inset-0 -z-10 bg-[#071522]/75" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071522]/90 via-[#071522]/70 to-transparent" />

      <div className="mx-auto flex min-h-[300px] max-w-7xl items-end px-5 pb-12 sm:min-h-[340px] sm:px-6 sm:pb-14 lg:min-h-[365px] lg:px-8 lg:pb-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9232e]">
            About Mutanu
          </p>

          <h1
            id="about-heading"
            className="mt-3 max-w-2xl text-3xl font-semibold uppercase leading-[1.15] text-white sm:text-4xl lg:text-5xl"
          >
            About Mutanu
          </h1>

          <p className="mt-3 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm">
            Built on experience, reliability and a commitment to doing things
            right.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
