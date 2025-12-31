'use client';

import { LINKS } from '@/libs/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [scrolled, setScrolled] = useState(false);

  const activeIndex = LINKS.findIndex((l) => l.href === pathname);

  const [indicator, setIndicator] = useState({
    x: 0,
    visible: false,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    let rafId: number | null = null;

    if (activeIndex === -1) {
      rafId = requestAnimationFrame(() => {
        setIndicator((s) => ({ ...s, visible: false }));
      });
      return () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    const container = containerRef.current;
    const el = linkRefs.current[activeIndex];
    if (!container || !el) return;

    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();

    const x = eRect.left - cRect.left + eRect.width / 2;
    rafId = requestAnimationFrame(() => {
      setIndicator({
        x,
        visible: true,
      });
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [activeIndex]);

  return (
    <nav
      className={`
        fixed z-50 mt-5 hidden md:flex transition-all duration-500 ease-out
        ${
          scrolled
            ? 
             `left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/15 shadow-xl px-8 py-3 rounded-full ${indicator.visible ? 'pb-6' : 'pb-3'}`
            : 
            `right-6 bg-transparent px-0 py-0 scale-95`
          }
      `}
    >
      <div ref={containerRef} className="relative flex items-center gap-2">
        {LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            ref={(el) => { linkRefs.current[i] = el; }}
            className={`px-3 text-sm tracking-widest transition-colors
              ${
                pathname === l.href
                  ? 'text-yellow-400'
                  : 'text-neutral-400 hover:text-yellow-300'
              }`}
          >
            {l.label}
          </Link>
        ))}

        <span
          aria-hidden
          className="absolute left-0 top-full mt-2 h-2 w-2 rounded-full bg-yellow-400 pointer-events-none"
          style={{
            transform: `translateX(${indicator.x - 4}px)`,
            opacity: indicator.visible ? 1 : 0,
            transition:
              'transform 260ms cubic-bezier(.34,1.56,.64,1), opacity 200ms ease',
          }}
        />
      </div>
    </nav>
  );
}
