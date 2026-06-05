import { teamMembers } from "./data";
import { PlaceholderImage } from "@/components/landing/placeholder-image";

export function AboutTeam() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-brand-navy sm:text-4xl">
            Meet the team
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600">
            We&apos;re an energetic, passionate team with diverse backgrounds
            and high level of expertise. We work to make life easier, helping
            support workers and solutions providers deliver a high standard of
            care.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.slice(0, 4).map((member) => (
            <div key={member.name} className="text-center">
              <PlaceholderImage
                label={member.name}
                className="mx-auto h-28 w-28"
                rounded="full"
              />
              <p className="mt-4 font-bold text-brand-navy">{member.name}</p>
              <p className="mt-1 text-sm text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-3 lg:mx-auto lg:max-w-3xl">
          {teamMembers.slice(4).map((member) => (
            <div key={member.name} className="text-center">
              <PlaceholderImage
                label={member.name}
                className="mx-auto h-28 w-28"
                rounded="full"
              />
              <p className="mt-4 font-bold text-brand-navy">{member.name}</p>
              <p className="mt-1 text-sm text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
