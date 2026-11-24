import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Our Philosophy", href: "/our-philosophy" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="container-shell">
        <div className="grid gap-14 py-20 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-24">
          <div>
            <Link
              href="/"
              className="inline-block font-display text-[42px] font-semibold tracking-[-0.07em]"
            >
              GIVX<span className="text-[#A18A69]">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-8 text-white/55">
              An independent business organization with a growing portfolio of
              brands and ventures.
            </p>

            <Link
              href="/businesses"
              className="mt-7 inline-flex items-center gap-3 text-xs font-medium text-[#c4ad8c] transition-colors hover:text-white"
            >
              Explore our businesses
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a18a69]">
              Explore
            </p>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a18a69]">
              Our Brand
            </p>

            <Link
              href="/businesses/aura-by-givx"
              className="group inline-flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
            >
              Aura by GIVX
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <p className="mt-10 mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a18a69]">
              Legal
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Givx Enterprises. All rights reserved.
          </p>

          <p>Building with purpose. Growing with intention.</p>
        </div>
      </div>
    </footer>
  );
}
