// "use client";

// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";

// const businesses = [
//   {
//     number: "01",
//     name: "Aura by GIVX",
//     category: "Beauty & Personal Care",
//     description:
//       "A beauty and personal care brand focused on fragrance, skincare and everyday self-care.",
//     image:
//       "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
//     href: "/businesses/aura-by-givx",
//   },
// ];

// const values = [
//   {
//     number: "01",
//     title: "Quality",
//     description:
//       "We believe that quality should be reflected in the products, services and experiences associated with our businesses.",
//   },
//   {
//     number: "02",
//     title: "Integrity",
//     description:
//       "We value honesty, accountability and responsible decisions in the way we operate.",
//   },
//   {
//     number: "03",
//     title: "Adaptability",
//     description:
//       "We remain open to new ideas, changing needs and opportunities to improve.",
//   },
//   {
//     number: "04",
//     title: "Long-term thinking",
//     description:
//       "We approach business development with patience, intention and a commitment to lasting value.",
//   },
// ];

// function Reveal({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{
//         duration: shouldReduceMotion ? 0 : 0.8,
//         delay: shouldReduceMotion ? 0 : delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function HomePage() {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <main className="overflow-hidden bg-white">
//       {/* HERO */}
//       <section className="relative flex min-h-[760px] items-center overflow-hidden bg-[#171717] text-white lg:min-h-[850px]">
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-45"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90')",
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/85 to-[#171717]/25" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-[#171717]/20" />
//         </div>

//         <div className="container-shell relative z-10 pb-24 pt-36 lg:pb-32">
//           <div className="max-w-5xl">
//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="section-eyebrow !text-[#c7ae8b]"
//             >
//               An independent business organization
//             </motion.div>

//             <motion.h1
//               initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 1,
//                 delay: 0.12,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="mt-9 max-w-5xl text-[clamp(3.6rem,8.5vw,8rem)] leading-[0.91] tracking-[-0.055em]"
//             >
//               Building with
//               <br />
//               <span className="font-display italic text-[#c7ae8b]">
//                 purpose.
//               </span>{" "}
//               Growing with
//               <br className="hidden md:block" />
//               intention.
//             </motion.h1>

//             <motion.p
//               initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="mt-9 max-w-xl text-base leading-8 text-white/70 md:text-lg"
//             >
//               Givx Enterprises is an independent business organization
//               developing a growing portfolio of brands and ventures, guided by
//               quality, thoughtful decisions and long-term vision.
//             </motion.p>

//             <motion.div
//               initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.45 }}
//               className="mt-11 flex flex-wrap items-center gap-6"
//             >
//               <Link
//                 href="/businesses"
//                 className="group inline-flex items-center gap-8 bg-[#c7ae8b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717] transition-colors hover:bg-white"
//               >
//                 Explore our businesses
//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 href="/about"
//                 className="group inline-flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#c7ae8b]"
//               >
//                 Discover Givx
//                 <ArrowRight
//                   size={16}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>
//             </motion.div>
//           </div>

//           <div className="mt-24 flex items-end justify-between border-t border-white/20 pt-6">
//             <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
//               Independent thinking. Intentional growth.
//             </span>

//             <a
//               href="#introduction"
//               className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
//             >
//               Scroll to explore
//               <ArrowDown size={14} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <section id="introduction" className="section-spacing bg-[#f5f2ec]">
//         <div className="container-shell">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
//             <Reveal>
//               <span className="section-eyebrow">01 / Who we are</span>

//               <h2 className="mt-7 max-w-md text-5xl leading-[1.05] tracking-[-0.045em] text-[#171717] md:text-6xl">
//                 A business built around{" "}
//                 <span className="italic text-[#a18a69]">possibility.</span>
//               </h2>
//             </Reveal>

//             <Reveal delay={0.15}>
//               <div className="max-w-2xl pt-2 lg:pt-12">
//                 <p className="text-xl leading-[1.7] text-[#33312e] md:text-2xl">
//                   We see business as an opportunity to create meaningful
//                   products, develop distinctive brands and build value over
//                   time.
//                 </p>

//                 <p className="mt-7 text-sm leading-8 text-[#77736d] md:text-base">
//                   Givx Enterprises brings together business ideas and ventures
//                   under one organization. Our focus is on developing each
//                   venture with its own identity while remaining guided by a
//                   shared commitment to quality, integrity and purposeful growth.
//                 </p>

//                 <Link
//                   href="/about"
//                   className="group mt-9 inline-flex items-center gap-4 border-b border-[#a18a69] pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717]"
//                 >
//                   More about Givx
//                   <ArrowUpRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* BUSINESSES */}
//       <section className="section-spacing bg-white">
//         <div className="container-shell">
//           <Reveal>
//             <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
//               <div>
//                 <span className="section-eyebrow">02 / Our portfolio</span>

//                 <h2 className="mt-7 max-w-2xl text-5xl tracking-[-0.045em] text-[#171717] md:text-7xl">
//                   Businesses with
//                   <br />
//                   <span className="italic text-[#a18a69]">
//                     their own identity.
//                   </span>
//                 </h2>
//               </div>

//               <p className="max-w-sm text-sm leading-7 text-[#77736d]">
//                 Every venture has a purpose, an audience and a story of its own.
//                 Discover the brands within our growing portfolio.
//               </p>
//             </div>
//           </Reveal>

//           <div className="mt-16 grid gap-8 lg:grid-cols-2">
//             {businesses.map((business, index) => (
//               <Reveal key={business.number} delay={index * 0.12}>
//                 <Link href={business.href} className="group block">
//                   <div className="relative aspect-[1.25/1] overflow-hidden bg-[#f5f2ec]">
//                     <motion.div
//                       className="absolute inset-0 bg-cover bg-center"
//                       style={{
//                         backgroundImage: `url('${business.image}')`,
//                       }}
//                       whileHover={
//                         shouldReduceMotion ? undefined : { scale: 1.055 }
//                       }
//                       transition={{ duration: 0.9, ease: "easeOut" }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//                     <span className="absolute left-7 top-7 text-xs tracking-[0.2em] text-white">
//                       {business.number}
//                     </span>

//                     <span className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#171717] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#c7ae8b]">
//                       <ArrowUpRight size={20} />
//                     </span>
//                   </div>

//                   <div className="flex flex-col justify-between gap-5 border-b border-[#e9e6df] py-7 sm:flex-row sm:items-end">
//                     <div>
//                       <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a18a69]">
//                         {business.category}
//                       </span>

//                       <h3 className="mt-3 text-4xl tracking-[-0.035em] text-[#171717]">
//                         {business.name}
//                       </h3>

//                       <p className="mt-3 max-w-md text-sm leading-7 text-[#77736d]">
//                         {business.description}
//                       </p>
//                     </div>

//                     <span className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#171717]">
//                       Explore brand
//                       <ArrowRight
//                         size={15}
//                         className="transition-transform group-hover:translate-x-1"
//                       />
//                     </span>
//                   </div>
//                 </Link>
//               </Reveal>
//             ))}
//           </div>

//           <Reveal>
//             <div className="mt-14 flex flex-col justify-between gap-5 border border-[#e9e6df] p-7 md:flex-row md:items-center md:p-10">
//               <div>
//                 <p className="text-xl text-[#171717]">
//                   Our portfolio is growing.
//                 </p>
//                 <p className="mt-2 text-sm text-[#77736d]">
//                   More ideas and ventures may become part of the Givx story.
//                 </p>
//               </div>

//               <Link
//                 href="/businesses"
//                 className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#a18a69]"
//               >
//                 View our portfolio
//                 <ArrowUpRight
//                   size={16}
//                   className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* APPROACH */}
//       <section className="section-spacing bg-[#171717] text-white">
//         <div className="container-shell">
//           <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
//             <Reveal>
//               <span className="section-eyebrow !text-[#c7ae8b]">
//                 03 / Our approach
//               </span>

//               <h2 className="mt-7 max-w-xl text-5xl leading-[1.05] tracking-[-0.045em] md:text-7xl">
//                 Thoughtful
//                 <br />
//                 decisions.
//                 <br />
//                 <span className="italic text-[#c7ae8b]">
//                   Meaningful direction.
//                 </span>
//               </h2>
//             </Reveal>

//             <Reveal delay={0.15}>
//               <div className="flex h-full flex-col justify-between">
//                 <p className="max-w-xl text-lg leading-8 text-white/65 md:text-xl">
//                   We believe that building a business goes beyond launching a
//                   product or creating a brand. It requires understanding people,
//                   paying attention to detail and making decisions with the
//                   bigger picture in mind.
//                 </p>

//                 <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
//                   <div>
//                     <span className="text-xs uppercase tracking-[0.18em] text-[#c7ae8b]">
//                       The perspective
//                     </span>
//                     <p className="mt-4 text-2xl text-white">
//                       Understand before building.
//                     </p>
//                   </div>

//                   <div>
//                     <span className="text-xs uppercase tracking-[0.18em] text-[#c7ae8b]">
//                       The ambition
//                     </span>
//                     <p className="mt-4 text-2xl text-white">
//                       Build with the future in mind.
//                     </p>
//                   </div>
//                 </div>

//                 <Link
//                   href="/our-philosophy"
//                   className="group mt-12 inline-flex w-fit items-center gap-4 border-b border-[#c7ae8b] pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#c7ae8b]"
//                 >
//                   Explore our philosophy
//                   <ArrowUpRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* VALUES */}
//       <section className="section-spacing bg-[#f5f2ec]">
//         <div className="container-shell">
//           <Reveal>
//             <span className="section-eyebrow">04 / What guides us</span>

//             <div className="mt-7 flex flex-col justify-between gap-8 md:flex-row md:items-end">
//               <h2 className="max-w-2xl text-5xl tracking-[-0.045em] text-[#171717] md:text-7xl">
//                 Principles behind
//                 <br />
//                 <span className="italic text-[#a18a69]">every decision.</span>
//               </h2>

//               <p className="max-w-sm text-sm leading-7 text-[#77736d]">
//                 The values we believe in shape how we think, operate and
//                 approach the opportunities ahead.
//               </p>
//             </div>
//           </Reveal>

//           <div className="mt-16 grid border-t border-[#dcd6cb] sm:grid-cols-2">
//             {values.map((value, index) => (
//               <Reveal key={value.number} delay={index * 0.1}>
//                 <div className="group border-b border-[#dcd6cb] py-9 sm:px-8 sm:first:pl-0 sm:nth-2:pr-0 sm:nth-3:pl-0">
//                   <div className="flex items-start justify-between">
//                     <span className="text-xs tracking-[0.15em] text-[#a18a69]">
//                       {value.number}
//                     </span>

//                     <MoveUpRight
//                       size={18}
//                       className="text-[#a18a69] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </div>

//                   <h3 className="mt-8 text-3xl text-[#171717] md:text-4xl">
//                     {value.title}
//                   </h3>

//                   <p className="mt-4 max-w-md text-sm leading-7 text-[#77736d]">
//                     {value.description}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* VISION */}
//       <section className="relative overflow-hidden bg-white">
//         <div className="grid lg:min-h-[650px] lg:grid-cols-2">
//           <div className="relative min-h-[420px] overflow-hidden bg-[#e7e0d5] lg:min-h-full">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85')",
//               }}
//             />
//             <div className="absolute inset-0 bg-black/10" />
//           </div>

//           <div className="flex items-center px-7 py-24 md:px-16 lg:px-20 lg:py-32">
//             <Reveal>
//               <span className="section-eyebrow">05 / Looking ahead</span>

//               <h2 className="mt-8 text-5xl leading-[1.05] tracking-[-0.045em] text-[#171717] md:text-7xl">
//                 There is more
//                 <br />
//                 <span className="italic text-[#a18a69]">to build.</span>
//               </h2>

//               <p className="mt-8 max-w-lg text-sm leading-8 text-[#77736d] md:text-base">
//                 We are focused on developing our existing ventures while
//                 remaining open to new ideas and opportunities. Our ambition is
//                 to build a portfolio of businesses that each bring something
//                 meaningful to the people they serve.
//               </p>

//               <Link
//                 href="/about"
//                 className="group mt-10 inline-flex items-center gap-4 border-b border-[#a18a69] pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#171717]"
//               >
//                 Learn about our vision
//                 <ArrowUpRight
//                   size={16}
//                   className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT CTA */}
//       <section className="section-spacing bg-[#171717] text-white">
//         <div className="container-shell">
//           <Reveal>
//             <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
//               <div className="max-w-3xl">
//                 <span className="section-eyebrow !text-[#c7ae8b]">
//                   Start a conversation
//                 </span>

//                 <h2 className="mt-8 text-5xl leading-[1.05] tracking-[-0.05em] md:text-8xl">
//                   Have an idea
//                   <br />
//                   <span className="italic text-[#c7ae8b]">
//                     worth exploring?
//                   </span>
//                 </h2>

//                 <p className="mt-8 max-w-lg text-sm leading-8 text-white/60 md:text-base">
//                   We welcome conversations around business enquiries, potential
//                   partnerships and opportunities to create something meaningful.
//                 </p>
//               </div>

//               <Link
//                 href="/contact"
//                 className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#c7ae8b] text-[#171717] transition-all duration-300 hover:scale-110 hover:bg-white md:h-24 md:w-24"
//                 aria-label="Contact Givx Enterprises"
//               >
//                 <ArrowUpRight
//                   size={30}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
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
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";

const businesses = [
  {
    number: "01",
    name: "Aura by GIVX",
    category: "Fragrance & Skincare",
    description:
      "Our beauty and personal care brand, offering fragrance and skincare products for people who value personal care and everyday self-expression.",
    image: "/abg.png",
    // image:
    //   "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
    href: "/businesses/aura-by-givx",
  },
];

const values = [
  {
    number: "01",
    title: "Quality",
    description:
      "We place importance on the quality of the products we offer and the experience customers have with our brands.",
  },
  {
    number: "02",
    title: "Customer focus",
    description:
      "Understanding customer needs is central to how we approach our products, services and business decisions.",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We believe in conducting business responsibly, communicating honestly and treating customers with respect.",
  },
  {
    number: "04",
    title: "Progress",
    description:
      "We remain open to new ideas, better ways of working and opportunities to develop our business activities.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}

      <section className="relative flex min-h-[760px] items-center overflow-hidden bg-[#171717] text-white lg:min-h-[850px]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/85 to-[#171717]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-[#171717]/20" />
        </div>

        <div className="container-shell relative z-10 pb-20 pt-30 lg:pb-28">
          <div className="max-w-5xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-eyebrow !text-[#c7ae8b]"
            >
              Givx Enterprises
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 max-w-5xl text-[clamp(3.4rem,7.5vw,7rem)] leading-[0.91] tracking-[-0.055em]"
            >
              A business
              <br />
              <span className="font-display italic text-[#c7ae8b]">
                organization
              </span>{" "}
              with
              <br />a vision for growth.
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 max-w-xl text-base leading-8 text-white/70 md:text-lg"
            >
              A registered business organization currently operating in the
              beauty and personal care market through its brands with a vision
              to expand into other business areas.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-11 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/businesses"
                className="group inline-flex items-center gap-8 bg-[#c7ae8b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717] transition-colors hover:bg-white"
              >
                Explore our business
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#c7ae8b]"
              >
                About Givx Enterprises
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          <div className="mt-24 flex items-end justify-between border-t border-white/20 pt-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              An independent Nigerian business
            </span>

            <a
              href="#introduction"
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
            >
              Scroll to explore
              <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="introduction" className="section-spacing bg-[#f5f2ec]">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <span className="section-eyebrow">01 / Welcome to GIVX</span>

              <h2 className="mt-7 max-w-md text-5xl leading-[1.05] tracking-[-0.045em] text-[#171717] md:text-6xl">
                One organization.
                <br />
                <span className="italic text-[#a18a69]">
                  Growing possibilities.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="max-w-2xl pt-2 lg:pt-12">
                <p className="text-xl leading-[1.7] text-[#33312e] md:text-2xl">
                  Givx Enterprises is the business organization behind a growing
                  range of commercial interests, with its current focus on
                  fragrance and skincare.
                </p>

                <p className="mt-7 text-sm leading-8 text-[#77736d] md:text-base">
                  Through Aura by GIVX, we serve the beauty and personal care
                  market with products centred on fragrance and skincare. Beyond
                  our present activities, Givx Enterprises is positioned to
                  explore additional products, markets and business
                  opportunities as the organization develops.
                </p>

                <Link
                  href="/about"
                  className="group mt-9 inline-flex items-center gap-4 border-b border-[#a18a69] pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717]"
                >
                  Learn about the organization
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUSINESSES */}
      <section className="section-spacing bg-white">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <span className="section-eyebrow">02 / Our business</span>

                <h2 className="mt-7 max-w-2xl text-5xl tracking-[-0.045em] text-[#171717] md:text-7xl">
                  Introducing
                  <br />
                  <span className="italic text-[#a18a69]">our brand.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#77736d]">
                Our current business activity is in beauty and personal care,
                represented by Aura by GIVX.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {businesses.map((business, index) => (
              <Reveal key={business.number} delay={index * 0.12}>
                <Link href={business.href} className="group block">
                  <div className="relative aspect-[1.25/1] overflow-hidden bg-[#f5f2ec]">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${business.image}')`,
                      }}
                      whileHover={
                        shouldReduceMotion ? undefined : { scale: 1.055 }
                      }
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <span className="absolute left-7 top-7 text-xs tracking-[0.2em] text-white">
                      {business.number}
                    </span>

                    <span className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#171717] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#c7ae8b]">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-5 border-b border-[#e9e6df] py-7 sm:flex-row sm:items-end">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a18a69]">
                        {business.category}
                      </span>

                      <h3 className="mt-3 text-4xl tracking-[-0.035em] text-[#171717]">
                        {business.name}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-[#77736d]">
                        {business.description}
                      </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#171717]">
                      Discover Aura
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col justify-between gap-5 border border-[#e9e6df] p-7 md:flex-row md:items-center md:p-10">
              <div>
                <p className="text-xl text-[#171717]">
                  Our business interests extend beyond today.
                </p>
                <p className="mt-2 text-sm text-[#77736d]">
                  We remain open to developing new products, brands and business
                  activities.
                </p>
              </div>

              <Link
                href="/businesses"
                className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#a18a69]"
              >
                View our business
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-spacing bg-[#171717] text-white">
        <div className="container-shell">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <span className="section-eyebrow !text-[#c7ae8b]">
                03 / How we do business
              </span>

              <h2 className="mt-7 max-w-xl text-5xl leading-[1.05] tracking-[-0.045em] md:text-7xl">
                Business built
                <br />
                on quality.
                <br />
                <span className="italic text-[#c7ae8b]">
                  Focused on people.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-between">
                <p className="max-w-xl text-lg leading-8 text-white/65 md:text-xl">
                  The products a business offers matter, but so does how it
                  delivers them. We consider product quality, customer needs and
                  responsible business practices in the way we approach our
                  activities.
                </p>

                <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#c7ae8b]">
                      Our priority
                    </span>
                    <p className="mt-4 text-2xl text-white">
                      Products customers can value.
                    </p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#c7ae8b]">
                      Our responsibility
                    </span>
                    <p className="mt-4 text-2xl text-white">
                      Business conducted with integrity.
                    </p>
                  </div>
                </div>

                <Link
                  href="/our-philosophy"
                  className="group mt-12 inline-flex w-fit items-center gap-4 border-b border-[#c7ae8b] pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#c7ae8b]"
                >
                  Read our business philosophy
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-spacing bg-[#f5f2ec]">
        <div className="container-shell">
          <Reveal>
            <span className="section-eyebrow">04 / Our values</span>

            <div className="mt-7 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-5xl tracking-[-0.045em] text-[#171717] md:text-7xl">
                What matters
                <br />
                <span className="italic text-[#a18a69]">in our business.</span>
              </h2>

              <p className="max-w-sm text-sm leading-7 text-[#77736d]">
                These principles influence how we select opportunities, develop
                our products and relate with our customers.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-t border-[#dcd6cb] sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.number} delay={index * 0.1}>
                <div className="group border-b border-[#dcd6cb] py-9 sm:px-8 sm:first:pl-0 sm:nth-2:pr-0 sm:nth-3:pl-0">
                  <div className="flex items-start justify-between">
                    <span className="text-xs tracking-[0.15em] text-[#a18a69]">
                      {value.number}
                    </span>

                    <MoveUpRight
                      size={18}
                      className="text-[#a18a69] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="mt-8 text-3xl text-[#171717] md:text-4xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#77736d]">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE DIRECTION */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:min-h-[650px] lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden bg-[#e7e0d5] lg:min-h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85')",
              }}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="flex items-center px-7 py-24 md:px-16 lg:px-20 lg:py-32">
            <Reveal>
              <span className="section-eyebrow">05 / The way forward</span>

              <h2 className="mt-8 text-5xl leading-[1.05] tracking-[-0.045em] text-[#171717] md:text-7xl">
                Growing beyond
                <br />
                <span className="italic text-[#a18a69]">our beginnings.</span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-8 text-[#77736d] md:text-base">
                Givx Enterprises has room to grow beyond its present business
                activities. As the organization develops, our direction is to
                explore other industries, introduce new brands and build
                additional business ventures, while maintaining the standards
                that guide our work.
              </p>

              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-4 border-b border-[#a18a69] pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#171717]"
              >
                More about Givx
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-spacing bg-[#171717] text-white">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <span className="section-eyebrow !text-[#c7ae8b]">
                  Contact Givx Enterprises
                </span>

                <h2 className="mt-8 text-5xl leading-[1.05] tracking-[-0.05em] md:text-8xl">
                  Get in touch
                  <br />
                  <span className="italic text-[#c7ae8b]">
                    with our business.
                  </span>
                </h2>

                <p className="mt-8 max-w-lg text-sm leading-8 text-white/60 md:text-base">
                  For general enquiries or information about Givx Enterprises
                  and its business activities, please get in touch with us.
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#c7ae8b] text-[#171717] transition-all duration-300 hover:scale-110 hover:bg-white md:h-24 md:w-24"
                aria-label="Contact Givx Enterprises"
              >
                <ArrowUpRight
                  size={30}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
