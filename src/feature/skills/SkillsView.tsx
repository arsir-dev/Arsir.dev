"use client";

import { skills } from "@/libs/constants";
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

function generateSpherePoints(count: number, radius: number) {
  const points: { x: number; y: number; z: number; label: string }[] = [];

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - (2 * (i + 1)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    points.push({
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
      label: skills[i],
    });
  }

  return points;
}

export function SkillsView() {
  const sphere = useRef(generateSpherePoints(skills.length, 200));
  const container = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    const angle = 0.003;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    sphere.current = sphere.current.map((p) => ({
      ...p,
      x: p.x * cos - p.z * sin,
      z: p.x * sin + p.z * cos,
    }));

    if (container.current) {
      const nodes = container.current.children;
      sphere.current.forEach((p, i) => {
        const scale = (p.z + 140) / 260;
        const opacity = Math.max(scale, 0.4);

        const el = nodes[i] as HTMLElement;
        el.style.transform = `translate3d(${p.x + 160}px, ${
          p.y + 160
        }px, 0) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.floor(scale * 100)}`;
      });
    }
  });

  return (
    <section className="min-h-screen bg-neutral-900 text-neutral-100 flex items-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-100 tracking-tight mb-6">
            Skills
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4 max-w-xl">
            Mobile Developer focused on building scalable, maintainable, and
            production-ready applications.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6 max-w-xl">
            Experienced in Kotlin, Jetpack Compose, MVVM, and Clean Architecture,
            with strong expertise in dependency injection, asynchronous
            programming, and RESTful API integration.
          </p>
          <a
            href="/experience"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
          >
            View Experience →
          </a>
        </div>

        <div className="relative w-full h-[420px] flex items-center justify-center">
          <div
            ref={container}
            className="relative w-[320px] h-[320px] rounded-full"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="absolute left-0 top-0 text-teal-400 text-sm font-medium whitespace-nowrap will-change-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
