"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  /** If true, will target direct children for staggered animation */
  staggerChildren?: boolean;
}

export function GsapReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  x = 0,
  scale = 1,
  duration = 1.2,
  ease = "power3.out",
  stagger = 0,
  staggerChildren = false,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (staggerChildren && el.children.length > 0) {
      // Stagger direct children
      gsap.fromTo(
        Array.from(el.children),
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease,
          delay,
          stagger: stagger || 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    } else {
      // Single element reveal
      gsap.fromTo(
        el,
        { opacity: 0, y, x, scale },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [y, x, scale, duration, ease, delay, stagger, staggerChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * A parallax wrapper that moves background at a different rate
 * than foreground content using GSAP ScrollTrigger.
 */
export function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      yPercent: -speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
