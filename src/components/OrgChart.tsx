import type { OrgChartData } from "@/content/afsOrganogram";

type OrgChartProps = {
  chart: OrgChartData;
};

type OrgNodeProps = {
  title: string;
  variant?: "primary" | "secondary" | "tertiary";
  accent?: string;
  className?: string;
};

function OrgNode({
  title,
  variant = "secondary",
  accent = "#0f3f95",
  className = "",
}: OrgNodeProps) {
  const variants = {
    primary: {
      backgroundColor: accent,
      color: "#ffffff",
      borderColor: accent,
    },
    secondary: {
      backgroundColor: "#ffffff",
      color: "#0f172a",
      borderColor: `${accent}55`,
    },
    tertiary: {
      backgroundColor: `${accent}12`,
      color: accent,
      borderColor: `${accent}35`,
    },
  };

  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-center text-sm font-semibold shadow-sm ${className}`}
      style={variants[variant]}
    >
      {title}
    </div>
  );
}

export default function OrgChart({ chart }: OrgChartProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            {chart.heading}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {chart.organization}
          </h3>
        </div>
        <div className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
          {chart.updatedLabel}
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <OrgNode
            title={chart.leadership.managingDirector}
            variant="primary"
            className="min-w-[220px]"
          />
          <div className="h-8 w-px bg-slate-300" />
          <div className="grid w-full items-start gap-4 md:grid-cols-[minmax(0,1fr)_240px_minmax(0,1fr)]">
            <div className="md:pt-12">
              <OrgNode title={chart.leadership.internalAuditor} className="md:ml-auto md:max-w-[220px]" />
            </div>
            <div className="flex flex-col items-center">
              <OrgNode title={chart.leadership.generalManager} className="w-full" />
              <div className="mt-4 h-8 w-px bg-slate-300" />
              <div className="grid w-full gap-3 sm:grid-cols-2">
                {chart.leadership.supportRoles.map((role) => (
                  <OrgNode key={role} title={role} variant="tertiary" />
                ))}
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-slate-50 p-4 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h4 className="text-xl font-bold text-slate-900">Operational Departments</h4>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
              A responsive, data-driven version of the original chart that keeps the reporting structure readable on mobile and maintainable in code.
            </p>
          </div>
          <div className="text-sm font-medium text-slate-500">5 core departments</div>
        </div>

        <div className="grid gap-5 xl:grid-cols-5">
          {chart.departments.map((department) => (
            <article
              key={department.name}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div
                className="rounded-2xl px-4 py-4 text-white"
                style={{ backgroundColor: department.accent }}
              >
                <h5 className="text-base font-bold leading-6">{department.name}</h5>
                <p className="mt-2 text-sm leading-6 text-white/85">{department.summary}</p>
              </div>

              {department.sideNote ? (
                <div
                  className="mt-3 rounded-2xl border px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{
                    borderColor: `${department.accent}35`,
                    color: department.accent,
                    backgroundColor: `${department.accent}10`,
                  }}
                >
                  {department.sideNote}
                </div>
              ) : null}

              <div className="mt-4 space-y-4">
                {department.branches.map((branch) => (
                  <div key={branch.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <OrgNode
                      title={branch.title}
                      className="text-xs leading-5"
                      accent={department.accent}
                    />
                    {branch.roles.length > 0 ? (
                      <div className="mt-3 space-y-2">
                        {branch.roles.map((role) => (
                          <div key={role} className="relative pl-5">
                            <span className="absolute left-1 top-3 h-2 w-2 rounded-full bg-slate-300" />
                            <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                              {role}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 text-sm text-slate-500">Standalone function</p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm font-medium italic text-slate-600">
        {chart.tagline}
      </p>
    </section>
  );
}
