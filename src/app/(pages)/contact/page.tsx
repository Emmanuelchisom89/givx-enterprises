// "use client";

// import { FormEvent, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";

// const contactDetails = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "hello@givxenterprises.com",
//     href: "mailto:hello@givxenterprises.com",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+234 800 000 0000",
//     href: "tel:+2348000000000",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Lagos, Nigeria",
//     href: undefined,
//   },
// ];

// const enquiryTypes = [
//   "General enquiry",
//   "Business partnership",
//   "Brand collaboration",
//   "Business opportunity",
//   "Other",
// ];

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
//       {/* INTRODUCTION */}
//       <section className="container-shell pb-16 pt-28 md:pb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="max-w-4xl"
//         >
//           <p className="section-eyebrow mb-7">CONTACT GIVX</p>

//           <h1 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.94] tracking-[-0.045em]">
//             Let&apos;s start a
//             <br />
//             <span className="text-[#A18A69]">conversation.</span>
//           </h1>

//           <p className="mt-7 max-w-xl text-sm leading-8 text-[#68645E] md:text-base">
//             Have a question, an idea, or an opportunity worth exploring?
//             We&apos;d be glad to hear from you. Get in touch with Givx
//             Enterprises and let&apos;s see where the conversation leads.
//           </p>
//         </motion.div>
//       </section>

//       {/* CONTACT AREA */}
//       <section className="container-shell pb-24 md:pb-32">
//         <div className="grid overflow-hidden rounded-[3px] bg-white lg:grid-cols-[0.85fr_1.15fr]">
//           {/* CONTACT INFORMATION */}
//           <motion.aside
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//             className="relative flex flex-col justify-between overflow-hidden bg-[#1C1C1A] p-8 text-white md:p-12 lg:p-14"
//           >
//             <div className="pointer-events-none absolute -right-28 top-36 h-80 w-80 rounded-full border border-white/[0.07]" />
//             <div className="pointer-events-none absolute -right-16 top-48 h-56 w-56 rounded-full border border-white/[0.07]" />

//             <div className="relative z-10">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7AE8B]">
//                 Get in touch
//               </p>

//               <h2 className="max-w-sm font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
//                 We&apos;re always open to meaningful conversations.
//               </h2>

//               <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
//                 Reach out to us directly or send a message using the enquiry
//                 form. We&apos;ll be happy to hear from you.
//               </p>

//               <div className="mt-14 space-y-9">
//                 {contactDetails.map((detail) => {
//                   const Icon = detail.icon;

//                   return (
//                     <div key={detail.label} className="flex gap-5">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-[#C7AE8B]">
//                         <Icon size={18} strokeWidth={1.5} />
//                       </div>

//                       <div>
//                         <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
//                           {detail.label}
//                         </p>

//                         {detail.href ? (
//                           <a
//                             href={detail.href}
//                             className="text-sm text-white/85 transition-colors hover:text-[#C7AE8B]"
//                           >
//                             {detail.value}
//                           </a>
//                         ) : (
//                           <p className="text-sm text-white/85">
//                             {detail.value}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="relative z-10 mt-20 border-t border-white/10 pt-7">
//               <div className="flex items-center gap-3 text-white/45">
//                 <Clock3 size={15} strokeWidth={1.5} />
//                 <span className="text-xs tracking-wide">
//                   Business hours: Monday – Friday, 9 AM – 5 PM
//                 </span>
//               </div>
//               <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/30">
//                 Givx Enterprises · Lagos, Nigeria
//               </p>
//             </div>
//           </motion.aside>

//           {/* ENQUIRY FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7 }}
//             className="p-8 md:p-12 lg:p-14"
//           >
//             <div className="mb-10">
//               <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#A18A69]">
//                 Send an enquiry
//               </p>

//               <h2 className="font-serif text-3xl tracking-[-0.025em] md:text-4xl">
//                 How can we help?
//               </h2>

//               <p className="mt-3 text-sm leading-7 text-[#77716A]">
//                 Tell us a little about what you have in mind. Fill in the
//                 details below and we&apos;ll take it from there.
//               </p>
//             </div>

//             {submitted ? (
//               <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
//                 <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F2EC] text-[#A18A69]">
//                   <Send size={25} strokeWidth={1.5} />
//                 </div>

//                 <h3 className="font-serif text-3xl">
//                   Thank you for reaching out.
//                 </h3>

//                 <p className="mt-4 max-w-sm text-sm leading-7 text-[#77716A]">
//                   The contact form is currently a design preview and is not
//                   connected to an email service yet. Your message has not been
//                   sent.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setSubmitted(false)}
//                   className="mt-8 border-b border-[#A18A69] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition-colors hover:text-[#A18A69]"
//                 >
//                   Return to form
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-7">
//                 <div className="grid gap-7 sm:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="mb-3 block text-xs font-medium text-[#494641]"
//                     >
//                       Your name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                       className="w-full border-b border-[#DDD8D0] bg-transparent pb-4 text-sm outline-none transition-colors placeholder:text-[#AAA49B] focus:border-[#A18A69]"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-3 block text-xs font-medium text-[#494641]"
//                     >
//                       Email address
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="you@example.com"
//                       required
//                       className="w-full border-b border-[#DDD8D0] bg-transparent pb-4 text-sm outline-none transition-colors placeholder:text-[#AAA49B] focus:border-[#A18A69]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="subject"
//                     className="mb-3 block text-xs font-medium text-[#494641]"
//                   >
//                     What is this about?
//                   </label>

//                   <select
//                     id="subject"
//                     name="subject"
//                     required
//                     defaultValue=""
//                     className="w-full appearance-none border-b border-[#DDD8D0] bg-transparent pb-4 text-sm text-[#77716A] outline-none transition-colors focus:border-[#A18A69]"
//                   >
//                     <option value="" disabled>
//                       Select an enquiry type
//                     </option>
//                     {enquiryTypes.map((type) => (
//                       <option
//                         key={type}
//                         value={type}
//                         className="text-[#171717]"
//                       >
//                         {type}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="mb-3 block text-xs font-medium text-[#494641]"
//                   >
//                     Your message
//                   </label>

//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={5}
//                     placeholder="Tell us what you'd like to discuss..."
//                     required
//                     className="w-full resize-none border-b border-[#DDD8D0] bg-transparent pb-4 text-sm leading-7 outline-none transition-colors placeholder:text-[#AAA49B] focus:border-[#A18A69]"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-5 pt-3 sm:flex-row sm:items-center sm:justify-between">
//                   <p className="max-w-xs text-[11px] leading-5 text-[#969087]">
//                     By submitting this form, you agree to our{" "}
//                     <a
//                       href="/privacy-policy"
//                       className="text-[#6D665D] underline underline-offset-2 hover:text-[#A18A69]"
//                     >
//                       Privacy Policy
//                     </a>
//                     .
//                   </p>

//                   <button
//                     type="submit"
//                     className="group inline-flex items-center justify-center gap-5 bg-[#1C1C1A] px-7 py-4 !text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#A18A69]"
//                   >
//                     Send message
//                     <ArrowUpRight
//                       size={16}
//                       className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </button>
//                 </div>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* CLOSING SECTION */}
//       <section className="border-t border-[#E4DED5]">
//         <div className="container-shell flex flex-col justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
//           <div>
//             <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#A18A69]">
//               Givx Enterprises
//             </p>

//             <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-[-0.025em] md:text-5xl">
//               Good things often begin with a conversation.
//             </h2>
//           </div>

//           <a
//             href="/businesses"
//             className="group inline-flex w-fit items-center gap-3 border-b border-[#A18A69] pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#A18A69]"
//           >
//             Explore our businesses
//             <ArrowUpRight
//               size={16}
//               className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Clock3,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "2348000000000"; // Replace with the actual WhatsApp number

const whatsappMessage =
  "Hello Givx Enterprises, I would like to make an enquiry.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@givxenterprises.com",
    href: "mailto:hello@givxenterprises.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: undefined,
  },
];

const enquiryTypes = [
  "General enquiry",
  "Business partnership",
  "Brand collaboration",
  "Business opportunity",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#F5F2EC] text-[#171717]">
      {/* HERO */}
      <section className="px-6 pb-16 pt-24 md:px-12 md:pb-24 md:pt-28">
        <div className="container-shell mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-eyebrow mb-7 text-[#A18A69]">
                Contact Givx
              </p>

              <h1 className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.94] tracking-[-0.055em]">
                Let&apos;s start a
                <br />
                <span className="text-[#A18A69] italic">conversation.</span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#68645E] md:text-base">
                Have a question, an idea, or an opportunity worth exploring?
                We&apos;d be glad to hear from you. Get in touch with Givx
                Enterprises and let&apos;s see where the conversation leads.
              </p>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative h-[320px] overflow-hidden rounded-[4px] bg-[#EAE5DC] sm:h-[420px] lg:h-[480px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/abg.png')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHATSAPP QUICK CONTACT */}
      <section className="px-6 pb-16 md:px-12 md:pb-20">
        <div className="container-shell mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-6 rounded-[4px] border border-[#A18A69]/30 bg-[#EAE5DC]/70 px-6 py-7 sm:flex-row sm:items-center sm:px-9"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#A18A69]/40 text-[#171717]">
                <MessageCircle size={25} strokeWidth={1.5} />
              </div>

              <div>
                <h2 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
                  Chat with us on WhatsApp
                </h2>

                <p className="mt-2 text-xs leading-6 text-[#77716A] md:text-sm">
                  For quick enquiries, reach us directly on WhatsApp.
                </p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-4 bg-[#1C1C1A] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] !text-white transition-colors duration-300 hover:bg-[#A18A69]"
            >
              Start a chat
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="container-shell pb-24 md:pb-32">
        <div className="grid overflow-hidden rounded-[3px] bg-white lg:grid-cols-[0.85fr_1.15fr]">
          {/* CONTACT INFORMATION */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-between overflow-hidden bg-[#1C1C1A] p-8 text-white md:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute -right-28 top-36 h-80 w-80 rounded-full border border-white/[0.07]" />
            <div className="pointer-events-none absolute -right-16 top-48 h-56 w-56 rounded-full border border-white/[0.07]" />

            <div className="relative z-10">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7AE8B]">
                Get in touch
              </p>

              <h2 className="max-w-sm font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
                We&apos;re always open to meaningful conversations.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                Reach out to us directly or send a message using the enquiry
                form. We&apos;ll be happy to hear from you.
              </p>

              <div className="mt-14 space-y-9">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div key={detail.label} className="flex gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-[#C7AE8B]">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <div>
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                          {detail.label}
                        </p>

                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm text-white/85 transition-colors hover:text-[#C7AE8B]"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white/85">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 mt-20 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3 text-white/45">
                <Clock3 size={15} strokeWidth={1.5} />
                <span className="text-xs tracking-wide">
                  Business hours: Monday – Friday, 9 AM – 5 PM
                </span>
              </div>

              <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/30">
                Givx Enterprises · Lagos, Nigeria
              </p>
            </div>
          </motion.aside>

          {/* ENQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-12 lg:p-14"
          >
            <div className="mb-10">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#A18A69]">
                Send an enquiry
              </p>

              <h2 className="font-serif text-3xl tracking-[-0.025em] md:text-4xl">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#77716A]">
                Tell us a little about what you have in mind. Fill in the
                details below and we&apos;ll take it from there.
              </p>
            </div>

            {submitted ? (
              <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F2EC] text-[#A18A69]">
                  <Send size={25} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-3xl">
                  Thank you for reaching out.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#77716A]">
                  The contact form is currently a design preview and is not
                  connected to an email service yet. Your message has not been
                  sent.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border-b border-[#A18A69] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition-colors hover:text-[#A18A69]"
                >
                  Return to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-xs font-medium text-[#494641]"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full border-b border-[#DDD8D0] bg-transparent pb-4 text-sm outline-none transition-colors placeholder:text-[#AAA49B] focus:border-[#A18A69]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs font-medium text-[#494641]"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full border-b border-[#DDD8D0] bg-transparent pb-4 text-sm outline-none transition-colors placeholder:text-[#AAA49B] focus:border-[#A18A69]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-xs font-medium text-[#494641]"
                  >
                    What is this about?
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full appearance-none border-b border-[#DDD8D0] bg-transparent pb-4 text-sm text-[#77716A] outline-none transition-colors focus:border-[#A18A69]"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    {enquiryTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="text-[#171717]"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs font-medium text-[#494641]"
                  >
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what you'd like to discuss..."
                    required
                    className="w-full resize-none border-b border-[#DDD8D0] bg-transparent pb-4 text-sm leading-7 outline-none transition-colors placeholder:text-[#AAA49B] focus:border-[#A18A69]"
                  />
                </div>

                <div className="flex flex-col gap-5 pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-5 text-[#969087]">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-[#6D665D] underline underline-offset-2 hover:text-[#A18A69]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-5 bg-[#1C1C1A] px-7 py-4 !text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#A18A69]"
                  >
                    Send message
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="border-t border-[#E4DED5]">
        <div className="container-shell flex flex-col justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#A18A69]">
              Givx Enterprises
            </p>

            <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-[-0.025em] md:text-5xl">
              Good things often begin with a conversation.
            </h2>
          </div>

          <a
            href="/businesses"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#A18A69] pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#A18A69]"
          >
            Explore our businesses
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
