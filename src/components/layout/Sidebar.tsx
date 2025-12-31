import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-20 h-screen fixed left-0 top-0 border-r border-neutral-800 flex flex-col items-center justify-between py-8 bg-black">
      <Link
          href= "/"
          className="flex items-center gap-2"
        > <Image src="/icon.svg" alt="Beranda" width={32} height={32} /></Link>

      <div className="flex flex-col gap-6 text-neutral-400 text-sm">
        <a
          href= { process.env.NEXT_PUBLIC_LINK_LINKEDIN }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        > <Image src="/linkedin.png" alt="LinkedIn" width={18} height={18} /></a>
        <a
          href= { process.env.NEXT_PUBLIC_LINK_GITHUB }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        > <Image src="/github.png" alt="Github" width={18} height={18} /></a>
        <a
          href= { process.env.NEXT_PUBLIC_LINK_MAIL }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        > <Image src="/email.png" alt="Github" width={18} height={18} /></a>
      </div>

      <span className="mb-6 rotate-90 text-xs tracking-widest text-neutral-500">
        PORTFOLIO
      </span>
    </aside>
  );
}
