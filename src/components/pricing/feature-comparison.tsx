import Link from "next/link";
import { Fragment } from "react";
import type { FeatureAvailability } from "./data";
import { comparisonCategories, pricingPlans } from "./data";

function AvailabilityCell({ value }: { value: FeatureAvailability }) {
  if (typeof value === "string") {
    return <span className="text-sm text-slate-600">{value}</span>;
  }
  if (value) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-300">
      ✕
    </span>
  );
}

export function FeatureComparison() {
  return (
    <section id="compare" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 lg:px-8">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left" />
              {pricingPlans.map((plan) => (
                <th
                  key={plan.id}
                  className={`p-4 text-center font-serif text-lg ${
                    plan.highlighted ? "text-brand-purple" : "text-brand-navy"
                  }`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonCategories.map((category) => (
              <Fragment key={category.title}>
                <tr>
                  <td
                    colSpan={5}
                    className="bg-slate-50 px-4 py-3 font-serif text-lg font-semibold text-brand-navy"
                  >
                    {category.title}
                  </td>
                </tr>
                {category.rows.map((row) => (
                  <tr key={`${category.title}-${row.name}`} className="border-b border-slate-100">
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {row.name}
                      {row.isNew && (
                        <span className="ml-1.5 rounded bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-brand-blue">
                          New
                        </span>
                      )}
                      {row.hasInfo && (
                        <span className="ml-1 text-xs text-slate-400">ⓘ</span>
                      )}
                    </td>
                    {row.values.map((value, i) => (
                      <td key={i} className="px-4 py-4 text-center">
                        <AvailabilityCell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
            <tr>
              <td className="p-4" />
              {pricingPlans.map((plan) => (
                <td key={`cta-${plan.id}`} className="p-4 text-center">
                  <Link
                    href="#"
                    className={`inline-block rounded-full px-5 py-2.5 text-sm font-semibold ${
                      plan.highlighted
                        ? "bg-brand-red text-white"
                        : "bg-sky-100 text-brand-blue"
                    }`}
                  >
                    {plan.id === "custom" ? "Request a Demo" : plan.cta}
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
