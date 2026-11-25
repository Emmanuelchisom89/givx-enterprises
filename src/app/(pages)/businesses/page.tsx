// "use client";

// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowDown, ArrowUpRight, MoveUpRight, Plus } from "lucide-react";
// import type { ReactNode } from "react";

// function Reveal({
//   children,
//   className = "",
//   delay = 0,
// }: {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
// }) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={reduceMotion ? false : { opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: 0.8,
//         delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function BusinessesPage() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
//       {/* Editorial introduction */}
//       <section className="relative px-6 pb-20 pt-22 md:px-12 md:pb-28">
//         <div className="container-shell">
//           <Reveal>
//             <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#171717]/20 pb-6">
//               <p className="section-eyebrow text-[#A18A69]">
//                 Givx Enterprises / Our Businesses
//               </p>
//               <span className="text-[10px] uppercase tracking-[0.25em] text-[#77716A]">
//                 A growing portfolio
//               </span>
//             </div>
//           </Reveal>

//           <div className="grid gap-12 pb-10 pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pt-24">
//             <Reveal delay={0.1}>
//               <h1 className="max-w-5xl text-[clamp(3.5rem,7.2vw,6.5rem)] leading-[0.9] tracking-[-0.065em]">
//                 Different ideas.
//                 <br />
//                 <span className="font-display italic text-[#A18A69]">
//                   One growing
//                 </span>
//                 <br />
//                 organization.
//               </h1>
//             </Reveal>

//             <Reveal delay={0.2}>
//               <div className="max-w-sm lg:justify-self-end">
//                 <p className="text-base leading-8 text-[#625D56] md:text-lg">
//                   Givx Enterprises brings together brands and business ventures
//                   with room to grow, evolve, and serve different markets.
//                 </p>

//                 <a
//                   href="#portfolio"
//                   className="group mt-8 inline-flex items-center gap-4 text-sm font-medium"
//                 >
//                   Explore the portfolio
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171717]/25 transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
//                     <ArrowDown size={16} />
//                   </span>
//                 </a>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio heading */}
//       <section
//         id="portfolio"
//         className="scroll-mt-20 border-t border-[#171717]/15 bg-white px-6 py-16 md:px-12 md:py-20"
//       >
//         <div className="container-shell">
//           <Reveal>
//             <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//               <div>
//                 <p className="section-eyebrow text-[#A18A69]">The portfolio</p>
//                 <h2 className="mt-5 font-display text-4xl tracking-[-0.04em] md:text-5xl">
//                   Brands within Givx
//                 </h2>
//               </div>

//               <p className="max-w-sm text-sm leading-7 text-[#77716A]">
//                 Each venture has its own identity and purpose, while forming
//                 part of the wider Givx business organization.
//               </p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Aura feature */}
//       <section className="bg-white px-6 pb-24 md:px-12 md:pb-32">
//         <div className="container-shell">
//           <Reveal>
//             <div className="grid overflow-hidden bg-[#EAE5DC] lg:grid-cols-[1.05fr_0.95fr]">
//               {/* Brand image */}
//               <div className="group relative min-h-[420px] overflow-hidden md:min-h-[600px]">
//                 <motion.div
//                   initial={reduceMotion ? false : { scale: 1.08 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//                   className="absolute inset-0"
//                 >
//                   <div
//                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
//                     style={{
//                       backgroundImage:
//                         "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=85')",
//                     }}
//                   />
//                 </motion.div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

//                 <div className="absolute left-7 top-7 flex items-center gap-3 text-white">
//                   <span className="h-2 w-2 rounded-full bg-[#c7ae8b]" />
//                   <span className="text-[10px] uppercase tracking-[0.25em]">
//                     Current brand
//                   </span>
//                 </div>

//                 <div className="absolute bottom-8 left-7 right-7 text-white md:bottom-10 md:left-10">
//                   <p className="text-xs uppercase tracking-[0.25em] text-white/75">
//                     Fragrance & Skincare
//                   </p>
//                   <p className="mt-3 font-display text-5xl italic md:text-7xl">
//                     Aura by GIVX
//                   </p>
//                 </div>
//               </div>

//               {/* Brand description */}
//               <div className="flex flex-col justify-between px-7 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs tracking-[0.2em] text-[#A18A69]">
//                       01 / 01
//                     </span>
//                     <span className="text-[10px] uppercase tracking-[0.2em] text-[#77716A]">
//                       Beauty & Personal Care
//                     </span>
//                   </div>

//                   <h3 className="mt-12 font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl">
//                     Personal care, expressed through its own identity.
//                   </h3>

//                   <p className="mt-7 text-sm leading-8 text-[#625D56] md:text-base">
//                     Aura by GIVX is our fragrance and skincare brand. It brings
//                     together products for personal care, everyday routines, and
//                     individual expression.
//                   </p>

//                   <p className="mt-5 text-sm leading-8 text-[#625D56] md:text-base">
//                     As the first brand within the Givx portfolio, Aura
//                     represents our current focus in the beauty and personal care
//                     market.
//                   </p>
//                 </div>

//                 <div className="mt-14 border-t border-[#171717]/15 pt-7">
//                   <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//                     <div>
//                       <p className="text-xs uppercase tracking-[0.2em] text-[#A18A69]">
//                         Explore the brand
//                       </p>
//                       <p className="mt-2 text-sm text-[#77716A]">
//                         Discover Aura by GIVX in more detail.
//                       </p>
//                     </div>

//                     <Link
//                       href="/businesses/aura-by-givx"
//                       aria-label="Explore Aura by GIVX"
//                       className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full hover:bg-[#171717] !text-white transition-colors duration-300 bg-[#A18A69]"
//                     >
//                       <ArrowUpRight
//                         size={20}
//                         className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Future portfolio */}
//       <section className="bg-[#171717] px-6 py-24 text-white md:px-12 md:py-32">
//         <div className="container-shell">
//           <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
//             <Reveal>
//               <div>
//                 <p className="section-eyebrow text-[#c7ae8b]">
//                   Beyond the present
//                 </p>

//                 <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
//                   There is room for more.
//                 </h2>

//                 <p className="mt-7 max-w-md text-sm leading-8 text-white/55 md:text-base">
//                   Our portfolio begins with beauty and personal care, but our
//                   long-term direction extends beyond a single market.
//                 </p>
//               </div>
//             </Reveal>

//             <Reveal delay={0.12}>
//               <div className="flex h-full flex-col justify-between border-t border-white/20 pt-8 md:pt-10">
//                 <div>
//                   <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c7ae8b]/50 text-[#c7ae8b]">
//                     <Plus size={25} strokeWidth={1.2} />
//                   </div>

//                   <p className="mt-10 text-xs uppercase tracking-[0.25em] text-[#c7ae8b]">
//                     Future opportunities
//                   </p>

//                   <h3 className="mt-5 max-w-lg font-display text-3xl leading-tight md:text-4xl">
//                     New brands. New markets. New possibilities.
//                   </h3>

//                   <p className="mt-6 max-w-lg text-sm leading-8 text-white/55 md:text-base">
//                     We intend to explore additional business areas over time,
//                     developing new ventures where there is a clear opportunity
//                     to create value. Each addition will have its own identity
//                     while contributing to the wider direction of Givx.
//                   </p>
//                 </div>

//                 <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-6">
//                   <span className="text-xs uppercase tracking-[0.2em] text-white/40">
//                     A portfolio in progress
//                   </span>
//                   <span className="font-display text-3xl italic text-[#c7ae8b]">
//                     Givx.
//                   </span>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Closing */}
//       <section className="px-6 py-24 md:px-12 md:py-32">
//         <div className="container-shell">
//           <Reveal>
//             <div className="flex flex-col justify-between gap-8 border-t border-[#171717]/20 pt-9 md:flex-row md:items-end">
//               <div>
//                 <p className="section-eyebrow text-[#A18A69]">A closer look</p>

//                 <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-5xl">
//                   Every brand has a story of its own.
//                 </h2>
//               </div>

//               <Link
//                 href="/businesses/aura-by-givx"
//                 className="group inline-flex items-center gap-3 border-b border-[#A18A69] pb-3 text-sm font-medium transition-colors hover:text-[#A18A69]"
//               >
//                 Meet Aura by GIVX
//                 <MoveUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, MoveUpRight, Plus } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const businesses = [
  {
    id: "aura-by-givx",
    number: "01",
    name: "Aura by GIVX",
    category: "Fragrance & Skincare",
    industry: "Beauty & Personal Care",
    heading: "Personal care, expressed through its own identity.",
    description:
      "Aura by GIVX is our fragrance and skincare brand. It brings together products for personal care, everyday routines, and individual expression.",
    additionalDescription:
      "As the first brand within the Givx portfolio, Aura represents our current focus in the beauty and personal care market.",
    image:
      "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=85')",
    href: "/businesses/aura-by-givx",
    linkDescription: "Discover Aura by GIVX in more detail.",
  },

  {
    id: "new-business",
    number: "02",
    name: "New Business",
    category: "Its Category",
    industry: "Its Industry",
    heading: "A short headline introducing the business.",
    description: "The business description goes here.",
    additionalDescription: "Additional information goes here.",
    image: "url('/images/new-business.jpg')",
    href: "/businesses/new-business",
    linkDescription: "Discover this business in more detail.",
  },
];

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

export default function BusinessesPage() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBusiness = businesses[activeIndex];

  useEffect(() => {
    if (businesses.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % businesses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
      {/* Editorial introduction */}
      <section className="relative px-6 pb-20 pt-22 md:px-10 md:pb-28">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#171717]/20 pb-6">
              <p className="section-eyebrow text-[#A18A69]">
                Givx Enterprises / Our Businesses
              </p>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#77716A]">
                A growing portfolio
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 pb-10 pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pt-24">
            <Reveal delay={0.1}>
              <h1 className="max-w-5xl text-[clamp(3.5rem,7.2vw,6.5rem)] leading-[0.9] tracking-[-0.065em]">
                Different ideas.
                <br />
                <span className="font-display italic text-[#A18A69]">
                  One growing
                </span>
                <br />
                organization.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="max-w-sm lg:justify-self-end">
                <p className="text-base leading-8 text-[#625D56] md:text-lg">
                  We bring together our brands and business ventures with room
                  to grow, evolve, and serve different markets.
                </p>

                <a
                  href="#portfolio"
                  className="group mt-8 inline-flex items-center gap-4 text-sm font-medium"
                >
                  Explore the portfolio
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171717]/25 transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio heading */}
      <section
        id="portfolio"
        className="scroll-mt-20 border-t border-[#171717]/15 bg-white px-6 py-16 md:px-12 md:py-20"
      >
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow text-[#A18A69]">The portfolio</p>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.04em] md:text-5xl">
                  Brands within Givx
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#77716A]">
                Each venture has its own identity and purpose, while forming
                part of the wider Givx business organization.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand carousel */}
      <section className="bg-white px-4 pb-24 md:px-12 md:pb-32">
        <div className="container-shell">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeBusiness.id}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: "easeInOut",
              }}
            >
              <div className="grid overflow-hidden bg-[#EAE5DC] lg:grid-cols-[1.05fr_0.95fr]">
                {/* Brand image */}
                <div className="group relative min-h-[420px] overflow-hidden md:min-h-[600px]">
                  <motion.div
                    initial={reduceMotion ? false : { scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{
                        backgroundImage: activeBusiness.image,
                      }}
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                  <div className="absolute left-7 top-7 flex items-center gap-3 text-white">
                    <span className="h-2 w-2 rounded-full bg-[#c7ae8b]" />
                    <span className="text-[10px] uppercase tracking-[0.25em]">
                      Current brand
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-7 right-7 text-white md:bottom-10 md:left-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/75">
                      {activeBusiness.category}
                    </p>
                    <p className="mt-3 font-display text-5xl italic md:text-7xl">
                      {activeBusiness.name}
                    </p>
                  </div>
                </div>

                {/* Brand description */}
                <div className="flex flex-col justify-between px-7 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] text-[#A18A69]">
                        {activeBusiness.number} /{" "}
                        {String(businesses.length).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#77716A]">
                        {activeBusiness.industry}
                      </span>
                    </div>

                    <h3 className="mt-12 font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-5xl">
                      {activeBusiness.heading}
                    </h3>

                    <p className="mt-7 text-sm leading-8 text-[#625D56] md:text-base">
                      {activeBusiness.description}
                    </p>

                    <p className="mt-5 text-sm leading-8 text-[#625D56] md:text-base">
                      {activeBusiness.additionalDescription}
                    </p>
                  </div>

                  <div className="mt-14 border-t border-[#171717]/15 pt-7">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#A18A69]">
                          Explore the brand
                        </p>
                        <p className="mt-2 text-sm text-[#77716A]">
                          {activeBusiness.linkDescription}
                        </p>
                      </div>

                      <Link
                        href={activeBusiness.href}
                        aria-label={`Explore ${activeBusiness.name}`}
                        className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A18A69] !text-white transition-colors duration-300 hover:bg-[#171717]"
                      >
                        <ArrowUpRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel indicators */}
          {businesses.length > 1 && (
            <div
              className="mt-8 flex items-center justify-center gap-3"
              aria-label="Choose a brand"
            >
              {businesses.map((business, index) => (
                <button
                  key={business.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${business.name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-[#A18A69]"
                      : "w-5 bg-[#171717]/20 hover:bg-[#A18A69]/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Future portfolio */}
      <section className="bg-[#171717] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="section-eyebrow text-[#c7ae8b]">
                  Beyond the present
                </p>

                <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  There is room for more.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-8 text-white/55 md:text-base">
                  Our portfolio begins with beauty and personal care, but our
                  long-term direction extends beyond a single market.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex h-full flex-col justify-between border-t border-white/20 pt-8 md:pt-10">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c7ae8b]/50 text-[#c7ae8b]">
                    <Plus size={25} strokeWidth={1.2} />
                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.25em] text-[#c7ae8b]">
                    Future opportunities
                  </p>

                  <h3 className="mt-5 max-w-lg font-display text-3xl leading-tight md:text-4xl">
                    New brands. New markets. New possibilities.
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-8 text-white/55 md:text-base">
                    We intend to explore additional business areas over time,
                    developing new ventures where there is a clear opportunity
                    to create value. Each addition will have its own identity
                    while contributing to the wider direction of Givx.
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    A portfolio in progress
                  </span>
                  <span className="font-display text-3xl italic text-[#c7ae8b]">
                    Givx.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 border-t border-[#171717]/20 pt-9 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow text-[#A18A69]">A closer look</p>

                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-5xl">
                  Every brand has a story of its own.
                </h2>
              </div>

              <Link
                href="/businesses/aura-by-givx"
                className="group inline-flex items-center gap-3 border-b border-[#A18A69] pb-3 text-sm font-medium transition-colors hover:text-[#A18A69]"
              >
                Meet Aura by GIVX
                <MoveUpRight
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
