// "use client";

// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowDown,
//   ArrowRight,
//   ArrowUpRight,
//   Compass,
//   Layers3,
//   MoveUpRight,
//   Sparkles,
// } from "lucide-react";
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
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
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

// const principles = [
//   {
//     number: "01",
//     title: "Quality in what we offer",
//     description:
//       "We believe the value of a business is reflected in the quality of its products, services, and the experience it creates for the people it serves.",
//   },
//   {
//     number: "02",
//     title: "People at the centre",
//     description:
//       "Understanding customers and responding to their needs should remain central to the way a business operates and grows.",
//   },
//   {
//     number: "03",
//     title: "Integrity in every decision",
//     description:
//       "Trust is built through honesty, responsibility, and consistency. These are principles we believe should guide every business relationship.",
//   },
//   {
//     number: "04",
//     title: "Progress with purpose",
//     description:
//       "Growth should be intentional. We value thoughtful decisions, continuous improvement, and the willingness to adapt as opportunities evolve.",
//   },
// ];

// export default function AboutPage() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
//       {/* Hero */}
//       <section className="relative flex min-h-[78vh] items-end bg-[#171717] pb-20 pt-36 text-white md:min-h-[88vh] md:pb-28">
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-35"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85')",
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/85 to-[#171717]/35" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-[#171717]/20" />
//         </div>

//         <div className="container-shell relative z-10 w-full">
//           <Reveal>
//             <p className="section-eyebrow text-[#c7ae8b]">
//               About Givx Enterprises
//             </p>
//           </Reveal>

//           <Reveal delay={0.12}>
//             <h1 className="mt-8 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.94] tracking-[-0.055em]">
//               Built on purpose.
//               <br />
//               <span className="font-display italic text-[#c7ae8b]">
//                 Growing with direction.
//               </span>
//             </h1>
//           </Reveal>

//           <Reveal delay={0.22}>
//             <div className="mt-9 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
//               <p className="max-w-xl text-base leading-8 text-white/70 md:text-lg">
//                 Givx Enterprises is a Nigerian business organization building a
//                 portfolio of brands and ventures, guided by thoughtful business
//                 decisions and a commitment to meaningful growth.
//               </p>

//               <Link
//                 href="#introduction"
//                 className="group inline-flex shrink-0 items-center gap-3 text-sm text-white transition-colors hover:text-[#c7ae8b]"
//               >
//                 Discover Givx
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#c7ae8b] group-hover:bg-[#c7ae8b] group-hover:text-[#171717]">
//                   <ArrowDown size={16} />
//                 </span>
//               </Link>
//             </div>
//           </Reveal>
//         </div>

//         <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.35em] text-white/40 lg:block">
//           An introduction
//         </div>
//       </section>

//       {/* Introduction */}
//       <section id="introduction" className="section-spacing scroll-mt-20">
//         <div className="container-shell">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
//             <Reveal>
//               <div>
//                 <p className="section-eyebrow text-[#A18A69]">
//                   The organization
//                 </p>

//                 <h2 className="mt-6 max-w-md font-display text-4xl leading-[1.12] tracking-[-0.035em] md:text-5xl">
//                   A business built to explore more possibilities.
//                 </h2>
//               </div>
//             </Reveal>

//             <Reveal delay={0.12}>
//               <div className="space-y-6 text-base leading-8 text-[#55514B] md:text-lg">
//                 <p>
//                   Givx Enterprises is an independent Nigerian business
//                   organization with an ambition to develop and grow across
//                   different areas of business.
//                 </p>

//                 <p>
//                   Our current focus is in the beauty and personal care market
//                   through Aura by GIVX, our fragrance and skincare brand. It
//                   represents the starting point of a broader business journey.
//                 </p>

//                 <p>
//                   We see Givx as more than a single brand. It is the foundation
//                   for a growing portfolio of ventures, shaped by changing
//                   markets, emerging opportunities, and a long-term approach to
//                   building businesses.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Current focus */}
//       <section className="bg-white py-24 md:py-32">
//         <div className="container-shell">
//           <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
//             <Reveal className="relative">
//               <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE5DC]">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.04]"
//                   style={{
//                     backgroundImage:
//                       "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85')",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

//                 <div className="absolute bottom-7 left-7 text-white">
//                   <p className="text-xs uppercase tracking-[0.25em] text-white/75">
//                     Our current focus
//                   </p>
//                   <p className="mt-2 font-display text-3xl italic">
//                     Beauty & Personal Care
//                   </p>
//                 </div>
//               </div>

//               <div className="absolute -bottom-6 -right-5 hidden h-28 w-28 items-center justify-center border border-[#A18A69]/40 bg-[#F5F2EC] md:flex">
//                 <Sparkles
//                   size={34}
//                   strokeWidth={1}
//                   className="text-[#A18A69]"
//                 />
//               </div>
//             </Reveal>

//             <Reveal delay={0.12}>
//               <div className="lg:pl-5">
//                 <p className="section-eyebrow text-[#A18A69]">
//                   Where we are today
//                 </p>

//                 <h2 className="mt-6 max-w-lg font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
//                   Our journey starts with personal care.
//                 </h2>

//                 <p className="mt-8 text-base leading-8 text-[#66615A]">
//                   Our present business focus is fragrance and skincare. Through
//                   Aura by GIVX, we are building a brand around personal care,
//                   everyday routines, and individual expression.
//                 </p>

//                 <p className="mt-5 text-base leading-8 text-[#66615A]">
//                   Aura is currently the first brand within the Givx portfolio.
//                   As the organization develops, we intend to explore additional
//                   opportunities and introduce ventures in other areas of
//                   business.
//                 </p>

//                 <Link
//                   href="/businesses/aura-by-givx"
//                   className="group mt-9 inline-flex items-center gap-3 border-b border-[#A18A69] pb-2 text-sm font-medium transition-colors hover:text-[#A18A69]"
//                 >
//                   Discover Aura by GIVX
//                   <ArrowUpRight
//                     size={17}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Mission and vision */}
//       <section className="bg-[#EAE5DC] py-24 md:py-32">
//         <div className="container-shell">
//           <Reveal>
//             <div className="max-w-2xl">
//               <p className="section-eyebrow text-[#A18A69]">Our direction</p>
//               <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
//                 A clear sense of where we're going.
//               </h2>
//             </div>
//           </Reveal>

//           <div className="mt-16 grid gap-px bg-[#CFC7BB] md:grid-cols-2">
//             <Reveal>
//               <div className="h-full bg-[#EAE5DC] px-7 py-10 md:px-12 md:py-14">
//                 <div className="flex h-12 w-12 items-center justify-center border border-[#A18A69]/50 text-[#A18A69]">
//                   <Compass size={22} strokeWidth={1.3} />
//                 </div>

//                 <p className="mt-9 text-xs uppercase tracking-[0.25em] text-[#A18A69]">
//                   Our mission
//                 </p>

//                 <h3 className="mt-5 max-w-md font-display text-3xl leading-tight md:text-4xl">
//                   To build and grow businesses that create value.
//                 </h3>

//                 <p className="mt-6 max-w-md text-sm leading-7 text-[#66615A] md:text-base">
//                   We aim to develop purposeful brands and ventures by
//                   understanding the people they serve, making considered
//                   decisions, and maintaining a commitment to quality and
//                   responsible business practices.
//                 </p>
//               </div>
//             </Reveal>

//             <Reveal delay={0.12}>
//               <div className="h-full bg-[#EAE5DC] px-7 py-10 md:px-12 md:py-14">
//                 <div className="flex h-12 w-12 items-center justify-center border border-[#A18A69]/50 text-[#A18A69]">
//                   <Layers3 size={22} strokeWidth={1.3} />
//                 </div>

//                 <p className="mt-9 text-xs uppercase tracking-[0.25em] text-[#A18A69]">
//                   Our vision
//                 </p>

//                 <h3 className="mt-5 max-w-md font-display text-3xl leading-tight md:text-4xl">
//                   To grow into a diverse portfolio of businesses.
//                 </h3>

//                 <p className="mt-6 max-w-md text-sm leading-7 text-[#66615A] md:text-base">
//                   We envision Givx Enterprises becoming an organization with a
//                   growing presence across different industries, through brands
//                   and ventures built with purpose, adaptability, and a long-term
//                   perspective.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Principles */}
//       <section className="section-spacing bg-[#171717] text-white">
//         <div className="container-shell">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
//             <Reveal>
//               <div className="lg:sticky lg:top-32">
//                 <p className="section-eyebrow text-[#c7ae8b]">What guides us</p>

//                 <h2 className="mt-6 max-w-md font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
//                   The principles behind our decisions.
//                 </h2>

//                 <p className="mt-7 max-w-sm text-sm leading-7 text-white/55 md:text-base">
//                   As our organization grows, the principles guiding how we
//                   approach business remain important.
//                 </p>
//               </div>
//             </Reveal>

//             <div className="border-t border-white/15">
//               {principles.map((principle, index) => (
//                 <Reveal key={principle.number} delay={index * 0.06}>
//                   <div className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[70px_1fr] sm:gap-7 md:py-10">
//                     <span className="pt-1 text-xs tracking-[0.2em] text-[#c7ae8b]">
//                       {principle.number}
//                     </span>

//                     <div>
//                       <h3 className="font-display text-2xl md:text-3xl">
//                         {principle.title}
//                       </h3>

//                       <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 md:text-base">
//                         {principle.description}
//                       </p>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Looking ahead */}
//       <section className="section-spacing">
//         <div className="container-shell">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
//             <Reveal>
//               <div>
//                 <p className="section-eyebrow text-[#A18A69]">Looking ahead</p>

//                 <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
//                   The next chapter is still being written.
//                 </h2>
//               </div>
//             </Reveal>

//             <Reveal delay={0.12}>
//               <div>
//                 <p className="text-base leading-8 text-[#66615A] md:text-lg">
//                   Givx Enterprises is at the beginning of a broader journey. Our
//                   focus is to continue developing our existing business while
//                   remaining open to opportunities in other industries.
//                 </p>

//                 <p className="mt-6 text-base leading-8 text-[#66615A] md:text-lg">
//                   We believe meaningful growth comes from building carefully,
//                   learning continuously, and recognising where new opportunities
//                   can create lasting value.
//                 </p>

//                 <Link
//                   href="/businesses"
//                   className="group mt-9 inline-flex items-center gap-3 text-sm font-medium"
//                 >
//                   Explore our businesses
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A18A69]/50 transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
//                     <ArrowRight size={16} />
//                   </span>
//                 </Link>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Closing statement */}
//       <section className="relative overflow-hidden bg-[#EAE5DC] py-24 md:py-32">
//         <div className="container-shell">
//           <Reveal>
//             <div className="mx-auto max-w-4xl text-center">
//               <p className="section-eyebrow justify-center text-[#A18A69]">
//                 Givx Enterprises
//               </p>

//               <h2 className="mt-7 font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
//                 One organization.
//                 <br />
//                 <span className="italic text-[#A18A69]">
//                   Many possibilities.
//                 </span>
//               </h2>

//               <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#66615A] md:text-base">
//                 Explore the brands and ventures that make up the Givx
//                 Enterprises journey.
//               </p>

//               <Link
//                 href="/businesses"
//                 className="group mt-9 inline-flex items-center gap-3 bg-[#171717] px-7 py-4 text-sm text-white transition-colors duration-300 hover:bg-[#A18A69]"
//               >
//                 Explore our businesses
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
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers3,
  MoveUpRight,
  Sparkles,
  Target,
  Users,
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const people = [
  {
    name: "Founder Name",
    role: "Founder & Owner",
    description:
      "Add a short biography introducing the founder, their business perspective, and the vision behind Givx Enterprises.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    label: "Leadership",
  },
  {
    name: "Team Member Name",
    role: "Position / Responsibility",
    description:
      "Add a short introduction explaining this person's responsibilities and contribution to the organization.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    label: "Team",
  },
  {
    name: "Team Member Name",
    role: "Position / Responsibility",
    description:
      "Add a short biography highlighting this person's role and the value they bring to the organization.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    label: "Team",
  },
];

const principles = [
  {
    number: "01",
    title: "Quality in what we offer",
    description:
      "We believe the value of a business is reflected in the quality of its products, services, and the experience it creates for the people it serves.",
  },
  {
    number: "02",
    title: "People at the centre",
    description:
      "Understanding customers and responding to their needs should remain central to the way a business operates and grows.",
  },
  {
    number: "03",
    title: "Integrity in every decision",
    description:
      "Trust is built through honesty, responsibility, and consistency. These are principles we believe should guide every business relationship.",
  },
  {
    number: "04",
    title: "Progress with purpose",
    description:
      "Growth should be intentional. We value thoughtful decisions, continuous improvement, and the willingness to adapt as opportunities evolve.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
      {/* HERO */}
      <section className="container-shell pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="section-eyebrow text-[#A18A69]">
                Getting to know Givx
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-8 max-w-4xl font-display text-[clamp(3.6rem,8vw,7.8rem)] leading-[0.91] tracking-[-0.055em]">
                More than a
                <br />
                single business.
                <br />
                <span className="italic text-[#A18A69]">A wider vision.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
                <p className="max-w-md text-base leading-8 text-[#69645D] md:text-lg">
                  An independent business organization with a growing portfolio
                  of brands and ventures, built around purpose, thoughtful
                  decisions, and long-term growth.
                </p>

                <Link
                  href="#our-story"
                  className="group inline-flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em]"
                >
                  Get to know us
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A18A69]/50 transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <ArrowDown size={16} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#DED7CB]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-[1.04]"
                style={{
                  backgroundImage: "url('/abg.png')",
                }}
                //   backgroundImage:
                //     "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85')",
                // }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-[10px] uppercase tracking-[0.23em] text-white/70">
                  Givx Enterprises
                </p>
                <p className="mt-2 font-display text-2xl italic md:text-3xl">
                  A foundation for growth.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-7 hidden h-25 w-25 items-center justify-center border border-[#A18A69]/40 bg-[#F5F2EC] md:flex">
              <Sparkles size={35} strokeWidth={1} className="text-[#A18A69]" />
            </div>

            <div className="absolute -right-5 top-10 hidden rotate-90 text-[9px] uppercase tracking-[0.3em] text-[#81796F] xl:block ">
              An independe
              <span className="text-white">nt business organization</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ORGANIZATION INTRODUCTION */}
      <section
        id="our-story"
        className="scroll-mt-20 border-t border-[#E4DED5] bg-white py-24 md:py-32"
      >
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="section-eyebrow text-[#A18A69]">Who we are</p>

                <h2 className="mt-7 max-w-sm font-display text-4xl leading-[1.12] tracking-[-0.04em] md:text-5xl">
                  An organization with room to grow.
                </h2>

                <div className="mt-9 h-px w-20 bg-[#A18A69]" />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-6 text-base leading-8 text-[#69645D] md:text-lg">
                <p>
                  Givx Enterprises is an independent Nigerian business
                  organization with an ambition to develop and grow across
                  different areas of business.
                </p>

                <p>
                  Our current focus is in the beauty and personal care market
                  through Aura by GIVX, our fragrance and skincare brand. It
                  represents the starting point of a broader business journey.
                </p>

                <p>
                  We see Givx as more than a single brand. It is the foundation
                  for a growing portfolio of ventures, shaped by changing
                  markets, emerging opportunities, and a long-term approach to
                  building businesses.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CURRENT BUSINESS FOCUS */}
      <section className="bg-[#EAE5DC] py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-eyebrow text-[#A18A69]">
                  Our present focus
                </p>

                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  Where our business journey stands today.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#69645D]">
                Every organization has a starting point. For Givx, that starting
                point is in fragrance and skincare.
              </p>
            </div>
          </Reveal>

          <div className="grid overflow-hidden bg-white lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="relative min-h-[360px] lg:min-h-[590px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-[1.04]"
                // style={{
                //   backgroundImage:
                //     "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=85')",
                // }}
                style={{
                  backgroundImage: "url('/abg.png')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white md:bottom-10 md:left-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                  Current brand
                </p>
                <p className="mt-2 font-display text-4xl italic md:text-5xl">
                  Aura by GIVX
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex h-full flex-col justify-center px-8 py-12 md:px-12 md:py-16 lg:px-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A18A69]">
                  Fragrance & Skincare
                </p>

                <h3 className="mt-6 font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-5xl">
                  Personal care is where we begin.
                </h3>

                <p className="mt-7 text-sm leading-8 text-[#69645D] md:text-base">
                  Through Aura by GIVX, we are building a brand around
                  fragrance, skincare, personal care, and everyday routines.
                </p>

                <p className="mt-5 text-sm leading-8 text-[#69645D] md:text-base">
                  Aura is currently the first brand within the Givx portfolio.
                  As the organization develops, we intend to explore additional
                  opportunities and introduce ventures in other areas of
                  business.
                </p>

                <Link
                  href="/businesses/aura-by-givx"
                  className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-[#A18A69] pb-2 text-sm font-medium transition-colors hover:text-[#A18A69]"
                >
                  Discover Aura by GIVX
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

      {/* PEOPLE BEHIND GIVX */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <Users
                    size={18}
                    strokeWidth={1.4}
                    className="text-[#A18A69]"
                  />
                  <p className="section-eyebrow text-[#A18A69]">
                    The people behind Givx
                  </p>
                </div>

                <h2 className="mt-7 max-w-3xl font-display text-4xl leading-[1.08] tracking-[-0.045em] md:text-6xl">
                  People make the organization.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#69645D] md:text-base">
                Behind every business are people whose ideas, decisions, and
                contributions help shape its direction. Meet the individuals
                behind Givx Enterprises.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person, index) => (
              <Reveal key={`${person.role}-${index}`} delay={index * 0.1}>
                <article className="group">
                  <div className="relative aspect-[4/4.7] overflow-hidden bg-[#EAE5DC]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{
                        backgroundImage: `url('${person.image}')`,
                      }}
                    />

                    <div className="absolute left-5 top-5 bg-[#F5F2EC] px-3 py-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B765D]">
                        {person.label}
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-[#E6E0D7] pb-6 pt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A18A69]">
                      {person.role}
                    </p>

                    <h3 className="mt-3 font-display text-3xl tracking-[-0.025em]">
                      {person.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#77716A]">
                      {person.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-[11px] leading-6 text-[#9A9287]">
            Team names, biographies, positions, and photographs shown here are
            placeholders and should be replaced with approved Givx team
            information before publication.
          </p>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#171717] py-24 text-white md:py-32">
        <div className="container-shell">
          <Reveal>
            <div className="max-w-3xl">
              <p className="section-eyebrow text-[#C7AE8B]">
                What moves us forward
              </p>

              <h2 className="mt-7 font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
                Our direction is intentional.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
                The ambition behind Givx is supported by a clear sense of
                purpose and an understanding of the kind of organization we want
                to build.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div>
                <div className="flex h-12 w-12 items-center justify-center border border-[#C7AE8B]/50 text-[#C7AE8B]">
                  <Target size={22} strokeWidth={1.3} />
                </div>

                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#C7AE8B]">
                  Our mission
                </p>

                <h3 className="mt-5 max-w-md font-display text-3xl leading-tight md:text-4xl">
                  To build and grow businesses that create value.
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/55 md:text-base">
                  We aim to develop purposeful brands and ventures by
                  understanding the people they serve, making considered
                  decisions, and maintaining a commitment to quality and
                  responsible business practices.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <div className="flex h-12 w-12 items-center justify-center border border-[#C7AE8B]/50 text-[#C7AE8B]">
                  <Layers3 size={22} strokeWidth={1.3} />
                </div>

                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#C7AE8B]">
                  Our vision
                </p>

                <h3 className="mt-5 max-w-md font-display text-3xl leading-tight md:text-4xl">
                  To grow into a diverse portfolio of businesses.
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/55 md:text-base">
                  We envision Givx Enterprises becoming an organization with a
                  growing presence across different industries, through brands
                  and ventures built with purpose, adaptability, and a long-term
                  perspective.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#F5F2EC] py-24 md:py-32">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <p className="section-eyebrow text-[#A18A69]">What guides us</p>

                <h2 className="mt-7 max-w-md font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                  Principles that shape how we work.
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-7 text-[#69645D] md:text-base">
                  As our organization grows, the principles guiding how we
                  approach business remain important.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-[#DCD5CA]">
              {principles.map((principle, index) => (
                <Reveal key={principle.number} delay={index * 0.07}>
                  <div className="grid gap-4 border-b border-[#DCD5CA] py-9 sm:grid-cols-[65px_1fr] sm:gap-7 md:py-11">
                    <span className="pt-1 text-xs tracking-[0.2em] text-[#A18A69]">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">
                        {principle.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#77716A] md:text-base">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOOKING AHEAD */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
            <Reveal>
              <div>
                <p className="section-eyebrow text-[#A18A69]">Looking ahead</p>

                <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.04em] md:text-6xl">
                  There is more to build.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="text-base leading-8 text-[#69645D] md:text-lg">
                  Givx Enterprises is at the beginning of a broader journey. Our
                  focus is to continue developing our existing business while
                  remaining open to opportunities in other industries.
                </p>

                <p className="mt-6 text-base leading-8 text-[#69645D] md:text-lg">
                  We believe meaningful growth comes from building carefully,
                  learning continuously, and recognising where new opportunities
                  can create lasting value.
                </p>

                <Link
                  href="/businesses"
                  className="group mt-9 inline-flex items-center gap-3 text-sm font-medium"
                >
                  Explore our businesses
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A18A69]/50 transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-[#EAE5DC] py-24 md:py-32">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-eyebrow justify-center text-[#A18A69]">
                Givx Enterprises
              </p>

              <h2 className="mt-7 font-display text-4xl leading-[1.1] tracking-[-0.04em] md:text-6xl">
                A growing organization.
                <br />
                <span className="italic text-[#A18A69]">A wider horizon.</span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#69645D] md:text-base">
                Get to know the brands and ventures that are part of the Givx
                Enterprises journey.
              </p>

              <Link
                href="/businesses"
                className="group mt-9 inline-flex items-center gap-3 bg-[#171717] px-7 py-4 text-sm !text-white transition-colors duration-300 bg-[#A18A69]"
              >
                Explore our businesses
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
