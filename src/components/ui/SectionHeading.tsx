import Reveal from "@/components/animations/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <Reveal>
        <span className="section-eyebrow">{eyebrow}</span>

        <h2
          className={`mt-6 max-w-3xl text-4xl leading-[1.12] tracking-[-0.045em] text-[#171717] sm:text-5xl lg:text-[64px] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mt-6 max-w-2xl text-sm leading-8 text-[#77736d] sm:text-base ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </Reveal>
    </div>
  );
}
