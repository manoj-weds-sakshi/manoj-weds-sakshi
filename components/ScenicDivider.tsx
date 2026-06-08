"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScenicDivider({
  src,
  alt,
  height = 340,
}: {
  src: string;
  alt: string;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    // Parallax: background moves slower than scroll
    gsap.to(bg, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: height }}
      role="img"
      aria-label={alt}
    >
      {/* FIX #6: Parallax background image — cover, center, no-repeat */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          /* Extend taller so parallax doesn't show gap */
          top: "-15%",
          bottom: "-15%",
        }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: 100,
          background: "linear-gradient(to bottom, var(--color-parchment), transparent)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          height: 100,
          background: "linear-gradient(to top, var(--color-parchment), transparent)",
        }}
      />
    </div>
  );
}
