import { About } from "../../domain/about/model/About";
import Image from "next/image";
import Link from "next/link";

export function AboutView({ about }: { about: About }) {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 right-[500px]">
        <Image
          src="/profile_stand.jpeg"
          alt="Profile"
          fill
          sizes="100ww"
          priority
          className="
            object-cover
            object-[center_15%]
          "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12">
        <div className="ml-auto max-w-xl text-neutral-200">
          {/* Eyebrow */}
          <p className="mb-4 text-sm tracking-widest text-yellow-400">
            ABOUT ME
          </p>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Hi, I’m Arfan —<br />a Mobile Developer
          </h2>

          {/* Description */}
          <p className="mb-4 text-base leading-relaxed text-neutral-300">
            I’m a mobile developer with experience building modern applications
            focused on performance, scalability, and clean architecture. I enjoy
            turning complex requirements into intuitive and reliable mobile
            experiences.
          </p>

          <p className="mb-8 text-base leading-relaxed text-neutral-400">
            I work closely with product and design teams, thinking beyond code
            to understand real user problems. For me, great software is not only
            functional, but also maintainable and built to last.
          </p>

          {/* Meta */}
          <div className="mb-10 text-sm text-neutral-400">
            <span className="text-neutral-500">Current focus:</span> Flutter,
            Android, Clean Architecture
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <Link
              href="/skills"
              className="text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
            >
              View Skill →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
