import Image from "next/image";

export function HomeView() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
      <div className="absolute inset-0 right-[500px]">
        <Image
          src="/profile.jpeg"
          alt="Profile"
          fill
          priority
          className="object-cover object-[center_35%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/90" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hidden lg:block" />

          <div className="flex flex-col justify-center">
            <p className="text-gray-400 tracking-wide mb-4">
             Mobile Developer, crafting scalable and high-performance apps
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight mb-6">
              Building reliable <br />
              <span className="font-semibold">mobile experiences</span>
            </h1>

            <p className="text-gray-400 max-w-xl mb-8">
              I specialize in building modern mobile applications with a
              strong focus on performance, scalability, and clean architecture.
              Experienced in turning complex requirements into intuitive,
              reliable digital products.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/about"
                className="text-yellow-400 flex items-center gap-2 hover:gap-3 transition-all"
              >
                Read More <span>→</span>
              </a>
            </div>

            <div className="mt-20">
              <h2 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-widest text-white/15">
                Arfan Siregar
              </h2>
              <p className="mt-2 text-sm tracking-widest text-gray-500">
                Mobile Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
