"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const principles = [
  {
    number: "01",
    title: "Quality is a standard, not a feature.",
    description:
      "We believe quality should be considered from the beginning of every business decision. It influences what we offer, how we operate, and the experience people associate with our brands.",
    note: "The standard",
  },
  {
    number: "02",
    title: "Understand people before serving markets.",
    description:
      "Businesses exist because people have needs, preferences, and expectations. Understanding these should inform the products we offer and the experiences we create.",
    note: "The perspective",
  },
  {
    number: "03",
    title: "Trust must be earned consistently.",
    description:
      "Integrity is reflected in everyday decisions. We value honesty, accountability, and consistency because lasting business relationships depend on trust.",
    note: "The foundation",
  },
  {
    number: "04",
    title: "Growth should have direction.",
    description:
      "Expansion alone is not the measure of progress. We believe in recognising opportunities, adapting thoughtfully, and building ventures with a clear sense of purpose.",
    note: "The ambition",
  },
];

export default function OurPhilosophyPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
      {/* Opening */}
      <section className="relative min-h-[78vh] border-b border-[#171717]/15 px-6 pb-16 pt-32 md:min-h-[85vh] md:px-12 md:pb-20">
        <div className="container-shell flex min-h-[58vh] flex-col justify-between">
          <Reveal>
            <div className="flex items-center justify-between">
              <p className="section-eyebrow text-[#A18A69]">
                Givx Enterprises / Philosophy
              </p>
              <span className="hidden text-xs uppercase tracking-[0.2em] text-[#77716A] md:block">
                The thinking behind the work
              </span>
            </div>
          </Reveal>

          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <Reveal delay={0.1}>
              <h1 className="max-w-5xl text-[clamp(3.8rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.065em]">
                How we
                <br />
                <span className="font-display italic text-[#A18A69]">
                  believe
                </span>{" "}
                business
                <br />
                should be built.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="max-w-sm lg:justify-self-end">
                <p className="text-base leading-8 text-[#625D56] md:text-lg">
                  Our philosophy is rooted in the belief that meaningful
                  businesses are built through thoughtful decisions, genuine
                  value, and a willingness to keep improving.
                </p>

                <Link
                  href="#principles"
                  className="group mt-8 inline-flex items-center gap-4 text-sm font-medium"
                >
                  Explore our principles
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171717]/25 transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <ArrowDown size={16} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 right-12 hidden font-display text-[12rem] leading-none text-[#171717]/[0.035] lg:block">
          G.
        </div>
      </section>

      {/* Central philosophy */}
      <section className="bg-[#171717] px-6 py-28 text-white md:px-12 md:py-40">
        <div className="container-shell">
          <Reveal>
            <p className="section-eyebrow text-[#c7ae8b]">A guiding belief</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.25fr_1.75fr] lg:gap-16">
              <div className="hidden pt-5 lg:block">
                <span className="text-xs tracking-[0.25em] text-white/35">
                  G / 01
                </span>
                <div className="mt-5 h-px w-12 bg-[#c7ae8b]" />
              </div>

              <div>
                <h2 className="max-w-6xl font-display text-4xl leading-[1.12] tracking-[-0.035em] md:text-6xl lg:text-7xl">
                  We believe a business should be measured not only by what it
                  achieves, but by the{" "}
                  <span className="italic text-[#c7ae8b]">
                    value it creates
                  </span>{" "}
                  along the way.
                </h2>

                <p className="mt-10 max-w-xl text-sm leading-7 text-white/55 md:ml-auto md:text-base">
                  This belief influences how we think about our brands, the
                  people we serve, the decisions we make, and the opportunities
                  we choose to pursue.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section
        id="principles"
        className="scroll-mt-20 px-6 py-28 md:px-12 md:py-36"
      >
        <div className="container-shell">
          <Reveal>
            <div className="mb-20 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow text-[#A18A69]">The principles</p>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                  Ideas that shape our decisions.
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-7 text-[#77716A]">
                Four beliefs that inform how we approach the work of building
                and growing businesses.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-[#171717]/20">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 0.07}>
                <div className="group grid gap-6 border-b border-[#171717]/20 py-10 md:grid-cols-[0.35fr_1.15fr_1fr] md:gap-12 md:py-14">
                  <div className="flex items-start justify-between md:block">
                    <span className="text-xs tracking-[0.2em] text-[#A18A69]">
                      {principle.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#999188] md:mt-6 md:block">
                      {principle.note}
                    </span>
                  </div>

                  <h3 className="max-w-md font-display text-3xl leading-[1.12] tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#A18A69] md:text-4xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-[#706A62] md:pt-2 md:text-base">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy in practice */}
      <section className="bg-[#EAE5DC] px-6 py-24 md:px-12 md:py-32">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="section-eyebrow text-[#A18A69]">
                  Beyond the words
                </p>

                <h2 className="mt-6 max-w-lg font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                  Beliefs matter most when they influence action.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-7 text-base leading-8 text-[#625D56] md:text-lg">
                <p>
                  A philosophy should be more than a statement on a website. It
                  should provide a useful way to think through decisions,
                  evaluate opportunities, and understand what a business stands
                  for.
                </p>

                <p>
                  At Givx Enterprises, these principles represent the standards
                  we intend to carry into our current operations and every
                  venture we develop in the future.
                </p>

                <p>
                  As our portfolio evolves, we want the businesses within it to
                  reflect a consistent commitment to quality, responsibility,
                  and meaningful value.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-28 md:px-12 md:py-40">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 border-t border-[#171717]/20 pt-10 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow text-[#A18A69]">
                  The way forward
                </p>

                <h2 className="mt-7 max-w-3xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  Build thoughtfully.
                  <br />
                  <span className="italic text-[#A18A69]">
                    Grow meaningfully.
                  </span>
                </h2>
              </div>

              <Link
                href="/businesses"
                className="group inline-flex shrink-0 items-center gap-4 border-b border-[#A18A69] pb-3 text-sm font-medium transition-colors hover:text-[#A18A69]"
              >
                Discover our businesses
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
