"use client";

import Image from "next/image";
import { weddingData } from "@/lib/weddingData";
import { GsapReveal } from "./Reveal";

export function CelebrationSection() {
  const { celebration } = weddingData;

  return (
    <section
      id="grand-celebration"
      className="relative overflow-hidden"
      style={{ marginTop: "10vh" }}
    >
      {/* FIX #6: Sandstone ceiling as standalone image block — "roof" */}
      <div className="relative w-full overflow-hidden" style={{ height: "150px" }}>
        <Image
          src="/texture-sandstone-ceiling.jpg"
          alt="Sandstone architectural ceiling"
          fill
          className="sandstone-ceiling"
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
          priority
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "60%",
            background: "linear-gradient(to top, rgba(44,10,20,0.85), transparent)",
          }}
        />
      </div>

      {/* Crimson velvet full-bleed body — DARK background: gold text OK here */}
      <div className="velvet-section">
        <div
          className="relative z-10 section-wrapper"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          {/* Dark glassmorphism card */}
          <div
            className="royal-card text-center"
            style={{
              background: "rgba(44, 24, 16, 0.75)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              maxWidth: 800,
              border: "1px solid rgba(197, 160, 89, 0.3)",
            }}
          >

            {/* Baraat note badge */}
            <GsapReveal delay={0.05} y={20}>
              <div
                className="inline-block"
                style={{
                  border: "1px solid rgba(197, 160, 89, 0.35)",
                  borderRadius: "4px",
                  padding: "0.6rem 1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.9,
                    letterSpacing: "0.15em",
                    textTransform: "none",
                  }}
                >
                  {celebration.baraatNote}
                </p>
              </div>
            </GsapReveal>

            {/* Main title — on DARK BG, gold shimmer is allowed */}
            <GsapReveal delay={0.15} y={35}>
              <div style={{ marginBottom: "1rem" }}>
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.7,
                    letterSpacing: "0.25em",
                    marginBottom: "0.75rem",
                  }}
                >
                  A Celebration of Love
                </p>
                <h2
                  className="heading-display text-shimmer font-light"
                  style={{
                    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {celebration.swaruchiBhojTitle}
                </h2>
              </div>
            </GsapReveal>

            {/* Gold divider */}
            <GsapReveal delay={0.25}>
              <hr
                className="royal-hr"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.2) 50%, transparent)",
                }}
              />
            </GsapReveal>

            {/* Date & Time */}
            <GsapReveal delay={0.3} y={25}>
              <div className="flex flex-col items-center gap-2" style={{ marginBottom: "2rem" }}>
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.6,
                    letterSpacing: "0.3em",
                  }}
                >
                  Date
                </p>
                <h3
                  className="heading-section font-light"
                  style={{
                    fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
                    color: "var(--color-parchment)",
                  }}
                >
                  {celebration.date}
                </h3>
                
                <div
                  className="my-3"
                  style={{
                    width: 40,
                    height: 1,
                    background: "var(--color-gold)",
                    opacity: 0.25,
                  }}
                />
                
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.6,
                    letterSpacing: "0.3em",
                  }}
                >
                  Time
                </p>
                <p
                  className="metadata-text"
                  style={{
                    color: "var(--color-parchment)",
                    opacity: 0.9,
                    textTransform: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  {celebration.time}
                </p>
              </div>
            </GsapReveal>

            {/* Venue card inside the dark card */}
            <GsapReveal delay={0.4} y={40}>
              <div
                className="glass-card-dark"
                style={{
                  padding: "2.5rem 2rem",
                  border: "1px solid rgba(197, 160, 89, 0.2)",
                }}
              >
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.6,
                    letterSpacing: "0.3em",
                    marginBottom: "1rem",
                  }}
                >
                  Venue
                </p>
                
                <h3
                  className="heading-card text-shimmer font-light"
                  style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
                >
                  {celebration.venueShort}
                </h3>
                <p
                  className="metadata-text"
                  style={{
                    color: "var(--color-parchment)",
                    opacity: 0.7,
                    textTransform: "none",
                    marginTop: "0.5rem",
                    fontSize: "0.85rem",
                  }}
                >
                  {celebration.venueAddress}
                </p>
                
                <hr
                  className="royal-hr max-w-[180px] mx-auto"
                  style={{
                    margin: "1.25rem auto",
                    background: "linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.15) 50%, transparent)",
                  }}
                />
                
                <p
                  className="metadata-text leading-relaxed"
                  style={{
                    color: "var(--color-parchment)",
                    opacity: 0.85,
                    textTransform: "none",
                    fontSize: "0.85rem",
                    padding: "0 0.5rem",
                  }}
                >
                  {celebration.venue}
                </p>

                {/* Map CTA */}
                <a
                  href="https://maps.google.com/?q=Palak+Palace+Resort+Khajuri+Kala+Bypass+Road+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:bg-gold hover:text-ink"
                  style={{
                    border: "1px solid rgba(197, 160, 89, 0.45)",
                    borderRadius: "4px",
                    padding: "0.6rem 1.8rem",
                    marginTop: "2rem",
                    color: "var(--color-gold)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span className="label-royal" style={{ letterSpacing: "0.2em", color: "inherit" }}>View on Maps</span>
                </a>
              </div>
            </GsapReveal>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade back to parchment */}
      <div
        style={{
          height: 100,
          background: "linear-gradient(to bottom, rgba(44,10,20,0.85), var(--color-parchment))",
        }}
      />
    </section>
  );
}
