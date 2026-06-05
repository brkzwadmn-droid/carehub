import Link from "next/link";
import { footerLinks } from "@/components/landing/data";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-600 hover:text-brand-blue"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-lg font-bold text-brand-navy">ShiftCare</span>
            <p className="text-sm text-slate-500">
              © 2026 ShiftCare. All rights reserved.
            </p>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold text-slate-500">
              HIPAA COMPLIANT
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">🇺🇸 US ⌵</span>
            <Link href="#" className="text-sm text-slate-500 hover:text-brand-blue">
              Facebook
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-brand-blue">
              Linkedin
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-brand-blue">
              Youtube
            </Link>
          </div>

          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-brand-blue">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-blue">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
