"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
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
      viewport={{ once: true, amount: 0.15 }}
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

export default function AuraProfilePage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#F4EFE7] text-[#29231F]">
      {/* Brand hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#302720] text-white">
        <motion.div
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2200&q=90')",
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#211B17]/85 via-[#211B17]/45 to-[#211B17]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/70 via-transparent to-[#211B17]/15" />

        <div className="container-shell relative z-10 flex min-h-[88vh] flex-col justify-between px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-40">
          <Reveal>
            <div className="flex items-center justify-between">
              <Link
                href="/businesses"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft size={15} />
                All businesses
              </Link>

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                A Givx Enterprises brand
              </span>
            </div>
          </Reveal>

          <div className="pb-6">
            <Reveal delay={0.12}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D6BFA3]">
                Fragrance & skincare
              </p>

              <h1 className="mt-7 font-display text-[clamp(5rem,13vw,12rem)] leading-[0.78] tracking-[-0.075em]">
                Aura
                <span className="block pl-[0.65em] text-[#D6BFA3]">
                  by GIVX.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-12 flex max-w-3xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-lg text-sm leading-8 text-white/75 md:text-base">
                  A beauty and personal care brand focused on fragrance,
                  skincare, and the everyday experience of looking after
                  yourself.
                </p>

                <a
                  href="#brand-story"
                  className="group inline-flex shrink-0 items-center gap-3 text-sm text-white"
                >
                  Discover the brand
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#D6BFA3] group-hover:bg-[#D6BFA3] group-hover:text-[#29231F]">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand introduction */}
      <section
        id="brand-story"
        className="scroll-mt-20 px-6 py-24 md:px-12 md:py-36"
      >
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#A18A69]">
                  The brand
                </p>

                <h2 className="mt-7 max-w-md font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                  Personal care, with a sense of identity.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-6 text-base leading-8 text-[#6D6258] md:text-lg">
                <p>
                  Aura by GIVX is the fragrance and skincare brand within Givx
                  Enterprises. It is built around the everyday importance of
                  personal care and the different ways people express
                  themselves.
                </p>

                <p>
                  From fragrance to skincare, Aura brings together categories
                  that form part of personal care routines. The brand's identity
                  is centred on making these everyday choices feel considered
                  and personal.
                </p>

                <p>
                  As part of the Givx portfolio, Aura By Givx represents the
                  organization's current focus in the beauty and personal care
                  market.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand image and statement */}
      <section className="bg-[#E8DED1] px-6 py-20 md:px-12 md:py-28">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#D4C6B5]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.04]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85')",
                  }}
                />
              </div>

              <div className="absolute -bottom-5 -right-4 hidden bg-[#F4EFE7] p-6 md:block">
                <Sparkles
                  size={28}
                  strokeWidth={1}
                  className="text-[#A18A69]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="lg:pl-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#A18A69]">
                  The Aura perspective
                </p>

                <h2 className="mt-7 max-w-lg font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                  The everyday deserves attention.
                </h2>

                <p className="mt-8 text-base leading-8 text-[#6D6258] md:text-lg">
                  Personal care is part of everyday life. It can be found in the
                  small routines, familiar products, and individual choices that
                  help people feel comfortable in their own expression.
                </p>

                <p className="mt-6 text-base leading-8 text-[#6D6258] md:text-lg">
                  Aura's approach is to build around these everyday moments,
                  with fragrance and skincare at the centre of its brand
                  identity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand categories */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#A18A69]">
                  What Aura offers
                </p>

                <h2 className="mt-6 font-display text-4xl tracking-[-0.04em] md:text-6xl">
                  Two sides of personal care.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#6D6258] md:text-base">
                Aura's current brand focus brings together two familiar areas of
                everyday personal care.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="group relative min-h-[400px] overflow-hidden bg-[#DCD1C3] md:min-h-[520px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white md:bottom-10 md:left-10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    01 / Fragrance
                  </p>

                  <h3 className="mt-3 font-display text-4xl md:text-5xl">
                    The art of scent.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                    Fragrance as part of personal style, daily routines, and
                    individual expression.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="group relative min-h-[400px] overflow-hidden bg-[#DCD1C3] md:min-h-[520px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1200&q=85')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white md:bottom-10 md:left-10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    02 / Skincare
                  </p>

                  <h3 className="mt-3 font-display text-4xl md:text-5xl">
                    The care of skin.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                    Skincare as part of the personal routines people build
                    around looking after themselves.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Parent organization */}
      <section className="bg-[#29231F] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
            <Reveal>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#D6BFA3]">
                  Part of something broader
                </p>

                <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                  An independent brand within a growing portfolio.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="text-base leading-8 text-white/65 md:text-lg">
                  Aura by GIVX is part of Givx Enterprises, an independent
                  Nigerian business organization with ambitions to explore
                  opportunities across different areas of business.
                </p>

                <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
                  While Aura has its own brand identity and market focus, it
                  forms part of a wider organization that intends to develop
                  additional brands and ventures over time.
                </p>

                <Link
                  href="/businesses"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#D6BFA3] pb-3 text-sm text-white transition-colors hover:text-[#D6BFA3]"
                >
                  View the Givx portfolio
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Store link */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden bg-[#E8DED1] px-7 py-16 text-center md:px-16 md:py-24">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#A18A69]">
                Experience Aura
              </p>

              <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                Discover the world of Aura by GIVX.
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#6D6258] md:text-base">
                Visit the official Aura store to explore its products and
                discover more about the brand.
              </p>

              {/* Replace this href with the confirmed Aura store URL */}
              <a
                href="https://aurabygivx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 hover:bg-[#29231F] px-7 py-4 text-sm !text-white transition-colors duration-300 bg-[#A18A69]"
              >
                Visit the Aura store
                <MoveUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
