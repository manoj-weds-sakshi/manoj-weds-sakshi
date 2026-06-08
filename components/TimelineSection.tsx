"use client";

import { weddingData } from "@/lib/weddingData";
import { GsapReveal } from "./Reveal";

interface TimelineEvent {
  id: string;
  name: string;
  sub: string;
  calendarDate: string;
  day: string;
  date: string;
  venue: string;
  time: string;
}

function ArchCard({ event, index }: { event: TimelineEvent; index: number }) {
  return (
    <GsapReveal delay={index * 0.2} y={50} duration={1.2}>
      <div className="arch-card h-full transition-transform duration-300 hover:scale-[1.02]">
        <div className="arch-card__content text-center flex flex-col items-center gap-5">

          {/* Ceremony badge */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: "2px solid var(--color-gold)", opacity: 0.7 }}
          >
            <span
              className="label-royal"
              style={{
                color: "var(--color-gold)",
                letterSpacing: "0.2em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Ceremony Title */}
          <div>
            <h3
              className="heading-card font-light"
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                letterSpacing: "0.15em",
                color: "var(--color-maroon)",
              }}
            >
              {event.name}
            </h3>
            <p
              className="metadata-text"
              style={{
                textTransform: "none",
                letterSpacing: "0.05em",
                lineHeight: "1.4",
                fontSize: "0.8rem",
                marginTop: "0.25rem",
                color: "var(--color-ink-soft)",
              }}
            >
              {event.sub}
            </p>
          </div>

          {/* Divider */}
          <hr className="royal-hr max-w-[140px] my-1" />

          {/* Traditional Calendar & Date */}
          <div className="space-y-2">
            <p
              className="label-royal"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--color-gold)",
              }}
            >
              {event.calendarDate}
            </p>
            <div className="flex items-baseline gap-2 justify-center flex-wrap">
              <span
                className="label-royal"
                style={{ color: "var(--color-ink-soft)", opacity: 0.6 }}
              >
                {event.day}
              </span>
              <span
                className="heading-card font-medium"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  color: "var(--color-maroon)",
                }}
              >
                {event.date.split(" ")[0]}
              </span>
              <span
                className="label-royal"
                style={{ color: "var(--color-ink-soft)", opacity: 0.6 }}
              >
                {event.date.split(" ").slice(1).join(" ")}
              </span>
            </div>
          </div>

          {/* Venue description */}
          <div
            className="glass-card w-full text-center"
            style={{ padding: "1.25rem 1.5rem" }}
          >
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
              {event.venue}
            </p>
            {event.time && (
              <p
                className="label-royal font-semibold"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  marginTop: "0.75rem",
                  color: "var(--color-maroon)",
                }}
              >
                {event.time}
              </p>
            )}
          </div>
        </div>
      </div>
    </GsapReveal>
  );
}

export function TimelineSection() {
  const { timeline } = weddingData;

  return (
    <section
      id="sanskar-belaen"
      className="relative section-wrapper"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
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
            The Sacred Timeline
          </p>
          <h2
            className="heading-section"
            style={{ color: "var(--color-maroon)" }}
          >
            {timeline.sectionTitle}
          </h2>
          <hr className="royal-hr max-w-[200px] mx-auto" />
        </div>
      </GsapReveal>

      {/* Three ceremony cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 max-w-[1100px] mx-auto"
        style={{ gap: "2rem" }}
      >
        {timeline.events.map((event, i) => (
          <ArchCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}
