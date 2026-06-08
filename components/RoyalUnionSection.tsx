"use client";

import { weddingData } from "@/lib/weddingData";
import { GsapReveal } from "./Reveal";

function PersonCard({
  side,
  lineage,
  parents,
  residence,
}: {
  side: "groom" | "bride";
  lineage: string;
  parents: string;
  residence: string;
}) {
  const isGroom = side === "groom";

  return (
    <div className="flex flex-col text-center items-center">
      <GsapReveal delay={isGroom ? 0.15 : 0.3} x={isGroom ? -20 : 20} y={0}>
        <p
          className="label-royal"
          style={{
            color: "var(--color-gold)",
            opacity: 0.7,
            marginBottom: "0.75rem",
          }}
        >
          {isGroom ? "The Groom" : "The Bride"}
        </p>
      </GsapReveal>

      <GsapReveal delay={isGroom ? 0.25 : 0.4} y={25}>
        <h2
          className="heading-section font-light"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
            letterSpacing: "0.12em",
            color: "var(--color-maroon)",
            marginBottom: "0.5rem",
          }}
        >
          {isGroom ? "Manoj" : "Sakshi"}
        </h2>
      </GsapReveal>

      <GsapReveal delay={isGroom ? 0.35 : 0.5} y={20}>
        <div className="space-y-4 max-w-sm" style={{ marginTop: "1rem" }}>
          <div>
            <p
              className="metadata-text"
              style={{
                textTransform: "none",
                letterSpacing: "0.05em",
                lineHeight: "1.6",
                fontSize: "0.8rem",
                color: "var(--color-ink-soft)",
              }}
            >
              {lineage}
            </p>
          </div>
          <div>
            <p
              className="metadata-text"
              style={{
                textTransform: "none",
                letterSpacing: "0.05em",
                lineHeight: "1.6",
                fontSize: "0.85rem",
                color: "var(--color-charcoal)",
              }}
            >
              {parents}
            </p>
          </div>
          <div style={{ paddingTop: "0.5rem" }}>
            <p
              className="label-royal"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "var(--color-ink-soft)",
              }}
            >
              {residence}
            </p>
          </div>
        </div>
      </GsapReveal>
    </div>
  );
}

export function RoyalUnionSection() {
  const { couple, invocation } = weddingData;

  return (
    <section
      id="royal-union"
      className="relative section-wrapper"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      {/* Arch pink background frame */}
      <div className="arch-pink-frame">
        <div className="relative z-10">
          {/* Royal glassmorphism card wrapping all text */}
          <div className="royal-card-wide">

            {/* Section title */}
            <GsapReveal>
              <div className="text-center" style={{ marginBottom: "2.5rem" }}>
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.6,
                    marginBottom: "1rem",
                  }}
                >
                  The Sacred Union
                </p>
                <h2
                  className="heading-section"
                  style={{ color: "var(--color-maroon)" }}
                >
                  {couple.weddingTitle}
                </h2>
                <hr className="royal-hr max-w-[280px] mx-auto" />
              </div>
            </GsapReveal>

            {/* Vishnu/Chitragupta Shloka */}
            <GsapReveal delay={0.1} y={30}>
              <div
                className="text-center glass-card max-w-xl mx-auto"
                style={{ padding: "2rem 2.5rem", marginBottom: "3.5rem" }}
              >
                <p
                  className="label-royal"
                  style={{
                    color: "var(--color-gold)",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                    marginBottom: "1rem",
                  }}
                >
                  {invocation.vishnuMantra.salutation}
                </p>
                <div className="space-y-1.5" style={{ marginTop: "0.75rem" }}>
                  {[
                    invocation.vishnuMantra.line1,
                    invocation.vishnuMantra.line2,
                    invocation.vishnuMantra.line3,
                    invocation.vishnuMantra.line4,
                  ].map((line, i) => (
                    <p
                      key={i}
                      className="metadata-text italic"
                      style={{
                        textTransform: "none",
                        letterSpacing: "0.05em",
                        lineHeight: "1.6",
                        fontSize: "0.8rem",
                        color: "var(--color-ink-soft)",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </GsapReveal>

            {/* Two-column couple layout */}
            <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">
              {/* Groom */}
              <div className="flex-1 lg:pr-10">
                <PersonCard
                  side="groom"
                  lineage={couple.groom.lineage}
                  parents={couple.groom.parents}
                  residence={couple.groom.residence}
                />
              </div>

              {/* Center vertical separator — desktop */}
              <div className="hidden lg:flex flex-col items-center px-4" style={{ minWidth: 50 }}>
                <div className="w-px flex-1" style={{ background: "linear-gradient(180deg, transparent, var(--color-gold), transparent)" }} />
                <div className="gold-divider__diamond my-4" />
                <p
                  className="label-royal my-3"
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.5,
                    letterSpacing: "0.4em",
                  }}
                >
                  &amp;
                </p>
                <div className="gold-divider__diamond my-4" />
                <div className="w-px flex-1" style={{ background: "linear-gradient(180deg, transparent, var(--color-gold), transparent)" }} />
              </div>

              {/* Mobile separator */}
              <div className="lg:hidden my-4">
                <hr className="royal-hr max-w-[200px] mx-auto" />
              </div>

              {/* Bride */}
              <div className="flex-1 lg:pl-10">
                <PersonCard
                  side="bride"
                  lineage={couple.bride.lineage}
                  parents={couple.bride.parents}
                  residence={couple.bride.residence}
                />
              </div>
            </div>

            {/* Closing message */}
            <GsapReveal delay={0.2} y={30}>
              <div className="text-center max-w-xl mx-auto" style={{ marginTop: "3rem" }}>
                <hr className="royal-hr max-w-[260px] mx-auto" />
                
                <p
                  className="metadata-text italic"
                  style={{
                    textTransform: "none",
                    letterSpacing: "0.05em",
                    lineHeight: "1.8",
                    fontSize: "0.85rem",
                    color: "var(--color-maroon)",
                  }}
                >
                  &ldquo;{invocation.inviteRequest}&rdquo;
                </p>
                
                <p
                  className="metadata-text font-medium"
                  style={{
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginTop: "1rem",
                    color: "var(--color-maroon)",
                  }}
                >
                  {invocation.fortune}
                </p>
              </div>
            </GsapReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
