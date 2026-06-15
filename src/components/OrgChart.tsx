"use client";

import type { OrgChartData } from "@/content/afsOrganogram";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Adjust accent for dark mode: keep it visible, but possibly desaturate a bit
  const effectiveAccent = accent;

  const variants = {
    primary: {
      backgroundColor: isDark ? `${effectiveAccent}cc` : effectiveAccent,
      color: "#ffffff",
      borderColor: effectiveAccent,
    },
    secondary: {
      backgroundColor: isDark ? "#1f2937" : "#ffffff",
      color: isDark ? "#f1f5f9" : "#0f172a",
      borderColor: isDark ? `${effectiveAccent}80` : `${effectiveAccent}55`,
    },
    tertiary: {
      backgroundColor: isDark ? `${effectiveAccent}20` : `${effectiveAccent}12`,
      color: isDark ? effectiveAccent : effectiveAccent,
      borderColor: isDark ? `${effectiveAccent}50` : `${effectiveAccent}35`,
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const sectionBg = isDark ? "bg-gray-900" : "bg-white";
  const borderColor = isDark ? "border-gray-700" : "border-slate-200";
  const headingTextColor = isDark ? "text-white" : "text-slate-900";
  const subheadingColor = isDark ? "text-teal-400" : "text-teal-700";
  const mutedText = isDark ? "text-gray-400" : "text-slate-600";
  const badgeBg = isDark
    ? "bg-gray-800 border-gray-700 text-gray-300"
    : "bg-slate-50 border-slate-200 text-slate-700";
  const lineBg = isDark ? "bg-gray-600" : "bg-slate-300";
  const operationalBg = isDark ? "bg-gray-800" : "bg-slate-50";
  const departmentCardBg = isDark
    ? "bg-gray-900 border-gray-700"
    : "bg-white border-slate-200";
  const branchBg = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-slate-50 border-slate-200";
  const roleBg = isDark
    ? "bg-gray-900 border-gray-700 text-gray-200"
    : "bg-white border-slate-200 text-slate-700";
  const roleDot = isDark ? "bg-gray-500" : "bg-slate-300";
  const footnoteColor = isDark ? "text-gray-400" : "text-slate-600";
  const sideNoteClass = isDark ? "bg-gray-800/50 border-gray-600" : "";

  return (
    <section
      className={`rounded-[2rem] border p-5 shadow-sm transition-colors duration-300 sm:p-8 lg:p-10 ${sectionBg} ${borderColor}`}
    >
      <div
        className={`flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between ${borderColor}`}
      >
        <div>
          <p
            className={`text-sm font-semibold uppercase tracking-[0.24em] ${subheadingColor}`}
          >
            {chart.heading}
          </p>
          <h3
            className={`mt-2 text-2xl font-bold sm:text-3xl ${headingTextColor}`}
          >
            {chart.organization}
          </h3>
        </div>
        <div
          className={`inline-flex w-fit rounded-full border px-4 py-2 text-sm font-medium ${badgeBg}`}
        >
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
          <div className={`h-8 w-px ${lineBg}`} />
          <div className="grid w-full items-start gap-4 md:grid-cols-[minmax(0,1fr)_240px_minmax(0,1fr)]">
            <div className="md:pt-12">
              <OrgNode
                title={chart.leadership.internalAuditor}
                className="md:ml-auto md:max-w-[220px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <OrgNode
                title={chart.leadership.generalManager}
                className="w-full"
              />
              <div className={`mt-4 h-8 w-px ${lineBg}`} />
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

      <div
        className={`mt-10 rounded-3xl p-4 transition-colors sm:p-6 ${operationalBg}`}
      >
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h4 className={`text-xl font-bold ${headingTextColor}`}>
              Operational Departments
            </h4>
            <p className={`mt-1 max-w-3xl text-sm leading-6 ${mutedText}`}>
              A responsive, data-driven version of the original chart that keeps
              the reporting structure readable on mobile and maintainable in
              code.
            </p>
          </div>
          <div className={`text-sm font-medium ${mutedText}`}>
            5 core departments
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-5">
          {chart.departments.map((department) => (
            <article
              key={department.name}
              className={`rounded-3xl border p-4 shadow-sm transition-colors ${departmentCardBg} ${borderColor}`}
            >
              <div
                className="rounded-2xl px-4 py-4 text-white"
                style={{ backgroundColor: department.accent }}
              >
                <h5 className="text-base font-bold leading-6">
                  {department.name}
                </h5>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  {department.summary}
                </p>
              </div>

              {department.sideNote ? (
                <div
                  className={`mt-3 rounded-2xl border px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] ${sideNoteClass}`}
                  style={{
                    borderColor: `${department.accent}35`,
                    color: department.accent,
                    backgroundColor: isDark
                      ? `${department.accent}15`
                      : `${department.accent}10`,
                  }}
                >
                  {department.sideNote}
                </div>
              ) : null}

              <div className="mt-4 space-y-4">
                {department.branches.map((branch) => (
                  <div
                    key={branch.title}
                    className={`rounded-2xl border p-3 ${branchBg} ${borderColor}`}
                  >
                    <OrgNode
                      title={branch.title}
                      className="text-xs leading-5"
                      accent={department.accent}
                    />
                    {branch.roles.length > 0 ? (
                      <div className="mt-3 space-y-2">
                        {branch.roles.map((role) => (
                          <div key={role} className="relative pl-5">
                            <span
                              className={`absolute left-1 top-3 h-2 w-2 rounded-full ${roleDot}`}
                            />
                            <div
                              className={`rounded-xl border px-3 py-2 text-sm font-medium ${roleBg} ${borderColor}`}
                            >
                              {role}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={`mt-3 text-sm ${mutedText}`}>
                        Standalone function
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <p
        className={`mt-8 text-center text-sm font-medium italic ${footnoteColor}`}
      >
        {chart.tagline}
      </p>
    </section>
  );
}
