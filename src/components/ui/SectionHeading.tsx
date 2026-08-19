interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e] sm:text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0b1b2b] sm:text-4xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
export default SectionHeading;
