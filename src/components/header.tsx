import Link from "next/link";
import { navLinks, promoBanner } from "@/components/landing/data";

export function Header() {
  return (
    <>
      <div className="bg-brand-blue text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
          <span className="flex-1 text-center">
            {promoBanner.text}{" "}
            <Link href="#" className="font-semibold underline hover:no-underline">
              {promoBanner.linkText}
            </Link>
          </span>
          <button
            type="button"
            aria-label="Dismiss banner"
            className="ml-4 shrink-0 text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-end gap-4 py-2 text-xs text-slate-500">
            <a href="tel:+18885464180" className="hover:text-brand-blue">
              +1 888 546 4180
            </a>
            <Link href="#" className="hover:text-brand-blue">
              Login
            </Link>
            <Link href="#" className="hover:text-brand-blue">
              Contact Us
            </Link>
            <span className="flex items-center gap-1">
              🇺🇸 US
            </span>
          </div>

          <div className="flex items-center justify-between gap-6 pb-4">
            <Link href="/" className="text-xl font-bold text-brand-navy">
              ShiftCare
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-navy"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <span className="ml-0.5 text-[10px]">⌵</span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="hidden rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark sm:inline"
              >
                Book a demo
              </Link>
              <Link
                href="#"
                className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-slate-200"
              >
                Try for free
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
