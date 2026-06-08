"use client";

import { weddingData } from "@/lib/weddingData";
import { GsapReveal } from "./Reveal";

function FamilyColumn({
  label,
  members,
  delay = 0,
}: {
  label: string;
  members: string[];
  delay?: number;
}) {
  return (
    <GsapReveal delay={delay} y={40}>
      <div className="flex flex-col h-full items-center text-center">
        {/* Column Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            className="heading-card font-light"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
              letterSpacing: "0.15em",
              color: "var(--color-maroon)",
            }}
          >
            {label}
          </h3>
          <hr
            className="royal-hr max-w-[80px] mx-auto"
            style={{ margin: "0.75rem auto" }}
          />
        </div>

        {/* Members list */}
        <div className="space-y-3 flex-grow flex flex-col justify-start">
          {members.map((name, i) => (
            <p
              key={i}
              className="metadata-text"
              style={{
                textTransform: "none",
                letterSpacing: "0.05em",
                opacity: 0.85,
                fontSize: "0.8rem",
                color: "var(--color-charcoal)",
              }}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </GsapReveal>
  );
}

export function FamilyFooterSection() {
  const { family, contact } = weddingData;

  return (
    <section id="family-houses" className="relative overflow-hidden">
      {/* Garden mural background with glassmorphism overlay */}
      <div className="garden-footer">
        <div
          className="relative z-10 section-wrapper"
          style={{ paddingTop: "15vh", paddingBottom: "10vh" }}
        >

          {/* Section header */}
          <GsapReveal>
            <div className="text-center" style={{ marginBottom: "3.5rem" }}>
              <p
                className="label-royal"
                style={{
                  color: "var(--color-gold)",
                  opacity: 0.6,
                  marginBottom: "1rem",
                }}
              >
                The Royal Houses
              </p>
              <h2
                className="heading-section"
                style={{ color: "var(--color-maroon)" }}
              >
                Our Beloved Families
              </h2>
              <hr className="royal-hr max-w-[200px] mx-auto" />
            </div>
          </GsapReveal>

          {/* FIX #4: 4-column family grid with strict gap + align-items: start */}
          <div className="royal-card-wide" style={{ maxWidth: 1200 }}>
            <div className="family-grid">
              <FamilyColumn
                label={family.vineet.label}
                members={family.vineet.members}
                delay={0.05}
              />
              <FamilyColumn
                label={family.darshanabhilashi.label}
                members={family.darshanabhilashi.members}
                delay={0.15}
              />
              <FamilyColumn
                label={family.prafullitHridaya.label}
                members={family.prafullitHridaya.members}
                delay={0.25}
              />
              <FamilyColumn
                label={family.harshitNanihal.label}
                members={family.harshitNanihal.members}
                delay={0.35}
              />
            </div>
          </div>

          {/* Full-width divider */}
          <GsapReveal delay={0.3}>
            <hr
              className="royal-hr max-w-[1200px] mx-auto"
              style={{ margin: "3.5rem auto" }}
            />
          </GsapReveal>

          {/* Komal Aagrah — Children — FIX #4: proper spacing, no bleed */}
          <GsapReveal delay={0.35} y={30}>
            <div
              className="text-center max-w-3xl mx-auto glass-card"
              style={{ padding: "3rem 2.5rem", marginBottom: "4rem" }}
            >
              <h3
                className="heading-card font-light"
                style={{
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                  color: "var(--color-maroon)",
                }}
              >
                {family.komalAagrah.label}
              </h3>
              <hr
                className="royal-hr max-w-[200px] mx-auto"
                style={{ margin: "0.75rem auto 1.5rem" }}
              />
              <p
                className="metadata-text leading-loose"
                style={{
                  textTransform: "none",
                  letterSpacing: "0.08em",
                  fontSize: "0.85rem",
                  color: "var(--color-maroon)",
                  padding: "0 1rem",
                }}
              >
                {family.komalAagrah.children.join("  ·  ")}
              </p>
            </div>
          </GsapReveal>
        </div>
      </div>

      {/* Contact & RSVP strip — DARK background: gold text OK */}
      <div
        className="contact-strip section-wrapper"
        style={{ padding: "5rem 0" }}
      >
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <GsapReveal>
            <p
              className="label-royal"
              style={{
                color: "var(--color-gold)",
                opacity: 0.7,
                letterSpacing: "0.3em",
                marginBottom: "1.5rem",
              }}
            >
              Contact & RSVP
            </p>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginBottom: "1rem" }}>
              {contact.senderNames.map((name, i) => (
                <p
                  key={i}
                  className="tracking-[0.2em] text-sm font-light uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-parchment)",
                  }}
                >
                  {name}
                </p>
              ))}
            </div>
          </GsapReveal>

          <GsapReveal delay={0.15}>
            <p
              className="metadata-text px-4"
              style={{
                color: "var(--color-gold)",
                opacity: 0.8,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: "0.75rem",
              }}
            >
              {contact.address}
            </p>
          </GsapReveal>

          <GsapReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: "2rem" }}>
              {contact.mobiles.map((mob, i) => (
                <a
                  key={i}
                  href={`tel:+91${mob}`}
                  className="text-sm tracking-widest transition-all duration-300 hover:bg-gold hover:text-ink"
                  style={{
                    border: "1px solid rgba(197, 160, 89, 0.35)",
                    borderRadius: "4px",
                    padding: "0.55rem 1.5rem",
                    color: "var(--color-gold)",
                  }}
                >
                  +91 {mob}
                </a>
              ))}
            </div>
          </GsapReveal>

          {/* Final sign-off */}
          <GsapReveal delay={0.3}>
            <hr
              className="royal-hr max-w-[200px] mx-auto"
              style={{
                marginTop: "3rem",
                marginBottom: "1.5rem",
                background: "linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.15) 50%, transparent)",
              }}
            />
            <p
              className="label-royal"
              style={{
                color: "var(--color-gold)",
                opacity: 0.5,
                letterSpacing: "0.35em",
              }}
            >
              Manoj · Sakshi · 19 June 2026
            </p>
          </GsapReveal>
        </div>
      </div>
    </section>
  );
}
