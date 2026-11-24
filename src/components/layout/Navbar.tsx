"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses" },
  { label: "Philosophy", href: "/our-philosophy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/90 backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex h-[82px] items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Givx Enterprises home"
            className="group flex items-center gap-3"
          >
            <span className="font-display text-[34px] font-semibold tracking-[-0.08em] text-[#171717]">
              GIVX<span className="text-[#A18A69]">.</span>
            </span>
            <span className="hidden border-l border-[#dedbd4] pl-3 text-[9px] font-medium uppercase leading-[1.5] tracking-[0.18em] text-[#77736d] sm:block">
              Enterprises
              <br />
              Brands & Ventures
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[12.5px] font-medium transition-colors duration-300 ${
                    active
                      ? "text-[#A18A69]"
                      : "text-[#55514c] hover:text-[#A18A69]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#A18A69] transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-3 hover:bg-[#171717] px-5 py-3 text-[11.5px] font-medium tracking-wide !text-white transition-colors duration-300 bg-[#A18A69] lg:inline-flex"
          >
            Let's Talk
            <ArrowUpRight size={14} strokeWidth={1.7} />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center border border-[#e9e6df] text-[#171717] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#e9e6df] bg-white lg:hidden"
          >
            <div className="container-shell py-5">
              <div className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.045 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-[#eeeae3] py-4 text-sm ${
                          active ? "text-[#A18A69]" : "text-[#171717]"
                        }`}
                      >
                        {item.label}
                        <ArrowUpRight size={15} strokeWidth={1.5} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-6 flex items-center justify-center gap-3 bg-[#A18A69] px-5 py-4 text-xs font-medium !text-white"
              >
                Start a Conversation
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
