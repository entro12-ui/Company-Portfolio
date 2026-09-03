"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiOpenai,
  SiDocker,
  SiExpo,
} from "react-icons/si";
import { Cloud, Server } from "lucide-react";

type StackItem = {
  name: string;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  color: string;
};

const stack: StackItem[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
  { name: "Go", Icon: SiGo, color: "text-[#00ADD8]" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
  { name: "React Native", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Expo", Icon: SiExpo, color: "text-slate-900 dark:text-white" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "OpenAI", Icon: SiOpenai, color: "text-slate-900 dark:text-white" },
  { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Cloud", Icon: Cloud, color: "text-teal-600 dark:text-teal-400" },
  { name: "On-premise", Icon: Server, color: "text-cyan-700 dark:text-cyan-400" },
];

const PER_PAGE = 5;

export default function TechStackCarousel() {
  const totalPages = Math.ceil(stack.length / PER_PAGE);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (totalPages <= 1) return;
    const id = window.setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4200);
    return () => window.clearInterval(id);
  }, [totalPages]);

  const visible = stack.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 backdrop-blur sm:p-8 dark:border-white/10 dark:bg-white/[0.03]">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        The stack we build and maintain on
      </p>

      <div
        key={page}
        className="mt-7 flex flex-row gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:overflow-visible"
      >
        {visible.map((tech) => {
          const Icon = tech.Icon;
          return (
            <div
              key={`${tech.name}-${page}`}
              className="animate-fade-in-up flex w-[10.5rem] shrink-0 flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white sm:w-auto sm:flex-1 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-teal-400/40"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-ink-900 dark:ring-white/10 ${tech.color}`}
              >
                <Icon className="h-5 w-5" aria-hidden={true} />
              </span>
              <span className="text-left text-xs font-semibold leading-snug text-slate-700 dark:text-slate-300 sm:text-sm">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPage(index)}
            aria-label={`Show tech stack page ${index + 1}`}
            aria-current={index === page ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === page
                ? "w-7 bg-teal-600 dark:bg-teal-400"
                : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
