"use client";

import Link from "next/link";
import { useState } from "react";
import { pricingPlans } from "./data";

const MIN_STAFF = 5;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 ${className ?? "text-brand-red"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PlanCards() {
  const [staffCount, setStaffCount] = useState(MIN_STAFF);
  const [annual, setAnnual] = useState(true);

  const effectiveStaff = Math.max(MIN_STAFF, staffCount);

  return (
    <section id="pricing" className="bg-brand-lavender pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <Link
            href="#compare"
            className="inline-block rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white"
          >
            Compare Plans ↓
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-md text-center">
          <p className="font-semibold text-brand-navy">How many staff do you have?</p>
          <input
            type="number"
            min={MIN_STAFF}
            value={staffCount}
            onChange={(e) => setStaffCount(Number(e.target.value) || MIN_STAFF)}
            className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-lg font-semibold text-brand-navy outline-none focus:border-brand-blue"
          />
          <p className="mt-2 text-sm text-slate-500">Staff = admins + care workers</p>
          <p className="text-sm text-slate-500">
            All of our plans fees start with a minimum of 5 staff.
          </p>
        </div>

        <label className="mx-auto mt-8 flex max-w-md cursor-pointer items-center justify-center gap-3">
          <input
            type="checkbox"
            checked={annual}
            onChange={(e) => setAnnual(e.target.checked)}
            className="h-5 w-5 rounded accent-green-600"
          />
          <span className="text-sm font-medium text-brand-navy">
            Pay annually and save up to 20%
          </span>
        </label>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {pricingPlans.map((plan) => {
            const monthlyTotal =
              plan.id === "custom"
                ? null
                : plan.annualPricePerUser * effectiveStaff;

            return (
              <div
                key={plan.id}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm ${
                  plan.highlighted
                    ? "border-brand-purple ring-1 ring-brand-purple"
                    : "border-slate-100"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-brand-red py-2 text-center text-xs font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </div>
                )}

                <div
                  className={`flex flex-1 flex-col p-6 ${
                    plan.highlighted ? "bg-brand-blue text-white" : ""
                  }`}
                >
                  <h3 className="font-serif text-2xl">{plan.name}</h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      plan.highlighted ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {plan.id !== "custom" ? (
                    <div className="mt-6">
                      <p className="text-3xl font-bold">
                        ${plan.annualPricePerUser.toFixed(2)}
                      </p>
                      <p
                        className={`text-sm ${
                          plan.highlighted ? "text-purple-100" : "text-slate-500"
                        }`}
                      >
                        per user
                      </p>
                      <p className="mt-2 text-lg font-semibold">
                        ${monthlyTotal!.toFixed(2)} per month
                      </p>
                      <p
                        className={`text-xs ${
                          plan.highlighted ? "text-purple-200" : "text-slate-400"
                        }`}
                      >
                        {annual ? "Billed yearly" : "Billed monthly"}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 flex h-24 items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-sky-100" />
                    </div>
                  )}

                  <p
                    className={`mt-6 font-serif text-lg ${
                      plan.highlighted ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    What you get
                  </p>
                  {plan.plusLabel && (
                    <p
                      className={`mt-1 text-sm ${
                        plan.highlighted ? "text-purple-100" : "text-slate-500"
                      }`}
                    >
                      {plan.plusLabel}
                    </p>
                  )}

                  <ul className="mt-4 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckIcon
                          className={plan.highlighted ? "text-white" : "text-brand-red"}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold ${
                      plan.highlighted
                        ? "bg-brand-red text-white"
                        : "bg-sky-100 text-brand-blue"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <p
                    className={`mt-4 text-center text-xs leading-relaxed ${
                      plan.highlighted ? "text-purple-100" : "text-slate-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 text-center lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div key={`summary-${plan.id}`}>
              <h3 className="font-serif text-2xl text-brand-navy">{plan.summary}</h3>
              <p className="mt-1 text-sm text-slate-500">{plan.summarySubtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
