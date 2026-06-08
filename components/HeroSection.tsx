"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "@/lib/weddingData";
import { GsapReveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const d = weddingData;
  const sectionRef = useRef<HTMLElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ornament entrance
      if (ornamentRef.current) {
        gsap.fromTo(
          ornamentRef.current,
          { opacity: 0, scale: 0.6, y: -30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.6, ease: "power3.out", delay: 0.2 }
        );
      }

      // Title entrance
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll(".hero-letter");
        gsap.fromTo(
          letters,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.06,
            delay: 0.6,
          }
        );
      }

      // Scroll cue pulse
      if (scrollCueRef.current) {
        gsap.fromTo(
          scrollCueRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, delay: 2 }
        );
        gsap.to(scrollCueRef.current, {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 1.8,
          ease: "power1.inOut",
          delay: 2.5,
        });
      }

      // Parallax — hero content drifts up slower
      if (sectionRef.current) {
        gsap.to(sectionRef.current.querySelector(".hero-content"), {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="invocation"
      className="relative flex flex-col items-center justify-center text-center section-wrapper"
      style={{ minHeight: "100vh", paddingTop: "8vh", paddingBottom: "8vh" }}
    >
      <div className="hero-content flex flex-col items-center w-full max-w-3xl mx-auto">
        
        {/* Royal Glassmorphism Card (Dead Center) */}
        <div className="royal-card w-full">
          {/* Rose gold ornament */}
          <div ref={ornamentRef} className="float-anim" style={{ opacity: 0, marginBottom: "2rem" }}>
            <Image
              src="/ornament-rose-gold-scroll.png"
              alt="Royal ornamental scroll"
              width={180}
              height={80}
              className="mx-auto"
              style={{ width: "auto", height: "auto", maxWidth: 180 }}
              priority
            />
          </div>

          {/* Ganesha Invocation */}
          <GsapReveal delay={0.3} y={30}>
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                className="label-royal"
                style={{
                  color: "var(--color-gold)",
                  letterSpacing: "0.25em",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                }}
              >
                {d.invocation.ganeshMantra.salutation}
              </p>
              <div className="space-y-1 max-w-xl mx-auto">
                <p
                  className="metadata-text italic"
                  style={{
                    textTransform: "none",
                    letterSpacing: "0.05em",
                    lineHeight: "1.6",
                    fontSize: "0.8rem",
                    color: "var(--color-ink-soft)",
                  }}
                >
                  &ldquo;{d.invocation.ganeshMantra.line1}&rdquo;
                </p>
                <p
                  className="metadata-text italic"
                  style={{
                    textTransform: "none",
                    letterSpacing: "0.05em",
                    lineHeight: "1.6",
                    fontSize: "0.8rem",
                    color: "var(--color-ink-soft)",
                  }}
                >
                  &ldquo;{d.invocation.ganeshMantra.line2}&rdquo;
                </p>
              </div>
            </div>
          </GsapReveal>

          {/* Gold divider */}
          <GsapReveal delay={0.5}>
            <hr className="royal-hr" />
          </GsapReveal>

          {/* ═══════════ FIX #2: MASSIVE NAME LOCKUP ═══════════ */}
          <div ref={titleRef} style={{ marginBottom: "1.5rem" }}>
            <h1
              className="heading-display text-maroon-display leading-none font-light"
            >
              {"MANOJ".split("").map((ch, i) => (
                <span key={`m-${i}`} className="hero-letter inline-block" style={{ opacity: 0 }}>
                  {ch}
                </span>
              ))}
            </h1>

            {/* Gold divider with diamond */}
            <div className="gold-divider-diamond" style={{ margin: "1.5rem auto" }}>
              <span className="diamond" />
            </div>

            <h1
              className="heading-display text-maroon-display leading-none font-light"
            >
              {"SAKSHI".split("").map((ch, i) => (
                <span key={`s-${i}`} className="hero-letter inline-block" style={{ opacity: 0 }}>
                  {ch}
                </span>
              ))}
            </h1>
          </div>

          {/* "Request the honor..." tagline */}
          <GsapReveal delay={1.0}>
            <p
              className="heading-section"
              style={{
                fontSize: "clamp(0.85rem, 2.5vw, 1.15rem)",
                letterSpacing: "0.25em",
                color: "var(--color-ink-soft)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              Request the honor of your presence
            </p>
          </GsapReveal>

          <GsapReveal delay={1.05}>
            <p
              className="heading-section"
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                letterSpacing: "0.2em",
                color: "var(--color-maroon)",
                marginTop: "1rem",
              }}
            >
              {d.couple.weddingTitle}
            </p>
          </GsapReveal>

          {/* Gold divider */}
          <GsapReveal delay={1.1}>
            <hr className="royal-hr" />
          </GsapReveal>

          {/* Greeting card details */}
          <GsapReveal delay={1.2} y={30}>
            <div className="max-w-xl mx-auto">
              <p
                className="heading-card"
                style={{
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                  color: "var(--color-maroon)",
                }}
              >
                {d.invocation.welcome}
              </p>
              <p
                className="metadata-text"
                style={{
                  textTransform: "none",
                  letterSpacing: "0.05em",
                  lineHeight: "1.8",
                  fontSize: "0.85rem",
                  color: "var(--color-ink-soft)",
                }}
              >
                {d.invocation.intro}
              </p>
            </div>
          </GsapReveal>
        </div>

        {/* Scroll cue */}
        <div ref={scrollCueRef} className="flex flex-col items-center gap-3" style={{ opacity: 0, marginTop: "3.5rem" }}>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold), transparent)" }} />
          <p
            className="label-royal"
            style={{
              color: "var(--color-gold)",
              opacity: 0.5,
              letterSpacing: "0.4em",
            }}
          >
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
