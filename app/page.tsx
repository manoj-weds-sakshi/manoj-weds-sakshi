"use client";

import { useEffect, useRef } from "react";

const ceremonies = [
  {
    side: "left",
    meta: "CEREMONY ONE",
    title: "Shree Ganesh Pujan & Mata Pujan",
    subtitle: "",
    date: "Wednesday, 17 June 2026",
    samvat: "Jyeshtha Shukla 3, Vikram Samvat 2083",
    venue: "Family Residence",
    place: "Patel Nagar, Bhopal",
    main: false,
  },
  {
    side: "right",
    meta: "CEREMONY TWO",
    title: "Mandap Chhaya",
    subtitle: "The Canopy Ceremony",
    date: "Thursday, 18 June 2026",
    samvat: "Jyeshtha Shukla 4, Vikram Samvat 2083",
    venue: "Family Residence",
    place: "Patel Nagar, Bhopal",
    main: false,
  },
  {
    side: "left",
    meta: "CEREMONY THREE  ·  THE MAIN EVENT",
    title: "Panigrahan Sanskar",
    subtitle: "The Wedding Solemnization",
    date: "Friday, 19 June 2026",
    samvat: "Jyeshtha Shukla 5, Vikram Samvat 2083",
    venue: "Palak Palace and Resort",
    place: "Bhopal, Madhya Pradesh",
    main: true,
  },
];

const hosts = [
  "Santosh Kumar - Smt. Krishna Shrivastava",
  "Ashok Kumar - Smt. Anjana Shrivastava",
  "Narendra Kumar - Smt. Dropadi Shrivastava",
];

const familyBlocks = [
  {
    title: "Prafullit Hridaya",
    subtitle: "With Joyful Hearts",
    grid: "three",
    names: [
      "Praveen - Annapurna",
      "Shailendra - Neha",
      "Rashmi - Akhilesh Ji",
      "Neha - Hemant Ji",
      "Manisha - Arun Ji",
      "Namita - Rupesh Ji",
      "Amit - Sonam",
      "Ashish - Divya",
      "Saurabh - Nandani",
      "Anant - Anushka",
      "Arvind - Sunita",
      "Atul - Roshni",
      "Ankit Ji",
      "Aditya Ji",
    ],
  },
  {
    title: "Harshit Nanihal",
    subtitle: "Joyful Maternal Relatives",
    grid: "two",
    names: [
      "Shri Jugal Kishore - Smt. Gayatri",
      "Shri Rajkishore - Smt. Preeti",
      "Shri Ramprasad - Smt. Krishna",
      "Shri Govind Prasad - Smt. Kaushalya",
      "Shri Madanlal - Smt. Savitri",
    ],
  },
  {
    title: "Darshanabhilashi",
    subtitle: "Eagerly Awaiting Your Presence",
    grid: "two",
    names: [
      "Smt. Sushila Devi (Buaji)",
      "Surendra - Smt. Meena Shrivastava",
      "Kamlesh - Smt. Jyoti Shrivastava",
      "Sanjeev - Smt. Shobha Shrivastava",
      "& Samast Shrivastava Parivar",
    ],
  },
];

const children = [
  "Darshita",
  "Alankrita (Kinjal)",
  "Vedang",
  "Vedansh",
  "Stuti",
  "Arnav",
  "Amey",
  "Bhavya",
  "Paridhi",
  "Daivik",
  "Aavya",
  "Parthvi",
  "Aniruddh",
];

const businesses = [
  ["Renown Engineers and Contractors", "Bhopal · Ujjain · Guna"],
  ["Kirti Enterprises", "Bhopal"],
  ["CIB Bricks", "Bhopal · Raisen"],
  ["Sai Stone Metals (Crusher) Plant", "Raisen"],
  ["Mahakal Traders", "Bhopal"],
  ["New Rose Angel Convent School", "Bhopal"],
  ["Shrivastava Fuel (Petrol Pump)", "Bhopal"],
  ["Hotel Arise Inn", "Bhopal"],
  ["Shri Shyam Agriculture Farm", "Bhopal · Sehore · Raisen · Ujjain · Guna"],
];

function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg className={`lotus ${className}`} viewBox="0 0 80 80" aria-hidden="true">
      <path d="M40 8C28 20 28 34 40 45C52 34 52 20 40 8Z" />
      <path d="M22 18C16 34 22 46 38 52C39 35 33 25 22 18Z" />
      <path d="M58 18C64 34 58 46 42 52C41 35 47 25 58 18Z" />
      <path d="M10 38C20 53 33 58 40 58C32 43 24 38 10 38Z" />
      <path d="M70 38C60 53 47 58 40 58C48 43 56 38 70 38Z" />
      <path d="M20 64H60" />
      <path d="M28 72H52" />
    </svg>
  );
}

function SectionHeader({
  numeral,
  title,
  subtitle,
}: {
  numeral?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <header className="section-header">
      {numeral ? <span className="section-numeral">{numeral}</span> : null}
      {title ? <h2>{title}</h2> : null}
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let animation = 0;

    const particles = Array.from({ length: 44 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.8 + Math.random() * 0.6,
      s: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * window.devicePixelRatio);
      canvas.height = Math.floor(height * window.devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(201, 146, 42, 0.18)";
      particles.forEach((particle) => {
        particle.y -= 0.15;
        particle.x += Math.sin(frame * 0.015 + particle.s) * 0.4;
        if (particle.y < -4) {
          particle.y = height + 4;
          particle.x = Math.random() * width;
        }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
      });
      frame += 1;
      animation = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles" aria-hidden="true" />;
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".reveal-section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.36;

    const playAudio = () => {
      void audio.play().catch(() => {
        window.addEventListener("pointerdown", playAudio, { once: true });
        window.addEventListener("keydown", playAudio, { once: true });
        window.addEventListener("scroll", playAudio, { once: true });
      });
    };

    playAudio();

    return () => {
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("keydown", playAudio);
      window.removeEventListener("scroll", playAudio);
    };
  }, []);

  return (
    <>
      <ParticleCanvas />
      <audio
        ref={audioRef}
        src="/sarangi-rajasthani-folk.mp3"
        autoPlay
        loop
        preload="auto"
        aria-hidden="true"
      />
      <div className="jaali-bg" aria-hidden="true" />

      <main>
        <section className="video-landing" aria-label="Wedding invitation video">
          <video
            className="video-landing__media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/card-shot.mp4" type="video/mp4" />
          </video>
          <div className="video-landing__veil" aria-hidden="true" />
          <div className="video-landing__caption">
            <span className="scroll-chevron" aria-hidden="true" />
          </div>
        </section>

        <section className="hero">
          <div className="hero-inner">
            <Lotus />
            <div className="mantra-block">
              <p className="devanagari mantra-title">॥ श्री गणेशाय नमः ॥</p>
              <p className="devanagari mantra-sub">
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ |
                <br />
                निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ||
              </p>
            </div>
            <hr />
            <p className="date-label">A Sacred Union</p>
            <div className="hero-names">
              <span>Manoj</span>
              <em>✦ Weds ✦</em>
              <span>Sakshi</span>
            </div>
            <p className="date-badge">Friday · 19 June 2026 · Palak Palace, Bhopal</p>
          </div>
          <span className="scroll-chevron" aria-hidden="true" />
        </section>

        <section className="invitation reveal-section">
          <hr className="mini-rule" />
          <div className="invitation-copy">
            <p>
              By the boundless grace of the Almighty and the blessed merit{" "}
              <br />
              of our ancestors, a joyous and auspicious ceremony is being{" "}
              <br />
              celebrated in our family.
            </p>
            <p>
              We cordially invite you to grace the sweet occasion of{" "}
              <br />
              holy matrimony with your esteemed presence, and bestow{" "}
              <br />
              your blessings upon the newly married couple.
            </p>
            <p>Your gracious presence will be our true good fortune.</p>
          </div>
          <Lotus className="lotus-small" />
        </section>

        <section className="couple reveal-section">
          <div className="shloka shloka--section-start">
            <p className="devanagari mantra-title">॥ श्री चित्रगुप्ताय नमः ॥</p>
            <p className="devanagari">
              मङ्गलं भगवान विष्णुः मङ्गलं गरुडध्वजः |
              <br />
              मङ्गलं पुण्डरीकाक्षः मङ्गलाय तनो हरिः ||
            </p>
          </div>
          <div className="couple-grid">
            <article className="person person-left">
              <p className="date-label">The Groom</p>
              <h2>Ayushman Manoj</h2>
              <em>Son of</em>
              <p>Smt. Dropadi & Shri Narendra Shrivastava</p>
              <small>
                Grandson of Late Smt. Bhagwati Devi
                <br />& Late Shri Shyamlal Ji Shrivastava
              </small>
              <strong>Bhopal, Madhya Pradesh</strong>
            </article>
            <div className="couple-divider" aria-hidden="true">
              <span>tied in the</span>
              <i>◆</i>
              <span>holy bond of matrimony</span>
            </div>
            <article className="person person-right">
              <p className="date-label">The Bride</p>
              <h2>Ayushmati Sakshi</h2>
              <em>Daughter of</em>
              <p>Smt. Kamla Devi & Late Shri Kailash Ji Shrivastava</p>
              <small>
                Granddaughter of Late Smt. Beena Devi
                <br />& Late Shri Harinarayan Ji Shrivastava
              </small>
              <strong>Raisen, Madhya Pradesh</strong>
            </article>
          </div>
        </section>

        <section className="timeline-section reveal-section">
          <SectionHeader
            title="Auspicious Ceremonies"
            subtitle="Traditional Wedding Rituals"
          />
          <div className="timeline">
            {ceremonies.map((ceremony) => (
              <article
                key={ceremony.title}
                className={`timeline-item timeline-item--${ceremony.side} ${
                  ceremony.main ? "timeline-item--main" : ""
                }`}
              >
                <span className="timeline-node">◆</span>
                <div className="timeline-card">
                  <p className="date-label">{ceremony.meta}</p>
                  <h3>{ceremony.title}</h3>
                  {ceremony.subtitle ? <em>{ceremony.subtitle}</em> : null}
                  <hr className="inline-rule" />
                  <strong>{ceremony.date}</strong>
                  <small>{ceremony.samvat}</small>
                  <b>{ceremony.venue}</b>
                  <p>{ceremony.place}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reception reveal-section">
          <div className="reception-inner">
            <SectionHeader title="Reception" subtitle="Wedding Reception" />
            <hr className="major-rule" />
            <p className="reception-date">
              Friday, <span>19</span> June <span>2026</span>
            </p>
            <p className="reception-time">From 7:00 PM onwards</p>
            <hr className="major-rule" />
            <div className="baraat-box">
              <p className="date-label">
                <span aria-hidden="true">◆</span> Baraat Procession
              </p>
              <p>
                The auspicious arrival of the Baraat procession is at 7:00 PM
                on Friday, 19 June 2026 at Palak Palace, Khajuri Kala, Bypass
                Road, Bhopal, M.P.
              </p>
            </div>
            <hr className="major-rule" />
            <h2>Palak Palace and Resort</h2>
            <p>Khajuri Kala, Bypass Road</p>
            <p className="date-label">Bhopal, Madhya Pradesh</p>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.1576278657176!2d77.5130956!3d23.237350400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41c0cd252243%3A0x7cc61f2e01b13ee!2sPalak%20Palace%20Hotels%20%26%20Resort%20Bhopal!5e0!3m2!1sen!2sin!4v1780937564309!5m2!1sen!2sin"
                title="Palak Palace Hotels and Resort Bhopal map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="mangalam reveal-section">
          <div className="hosts">
            <p className="date-label">Vineet</p>
            <p className="host-subtitle">Respectfully Yours</p>
            <div className="host-grid">
              {hosts.map((couple) => (
                <article key={couple}>
                  <h3>{couple}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="family reveal-section">
          <SectionHeader title="The Family" subtitle="Gathered in Joy and Blessing" />
          {familyBlocks.map((block) => (
            <article key={block.title} className="family-block">
              <div className="family-block__header">
                <h3>{block.title}</h3>
                <p>{block.subtitle}</p>
              </div>
              <ul className={`name-grid name-grid--${block.grid}`}>
                {block.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="family-block family-block--children">
            <div className="family-block__header">
              <h3>Komal Aagrah</h3>
              <p>The Little Ones</p>
            </div>
            <p>
              {children.map((child, index) => (
                <span key={child}>
                  {child}
                  {index < children.length - 1 ? <i> · </i> : null}
                </span>
              ))}
            </p>
          </article>
        </section>

        <section className="pillars reveal-section">
          <SectionHeader title="Our Pillars Of Strength" />
          <p className="pillars-intro">
            We express our heartfelt gratitude to our well-wishers{" "}
            <br />
            and family establishments for their constant support.
          </p>
          <div className="business-grid">
            {businesses.map(([name, place]) => (
              <article key={name} className="business-card">
                <h3>{name}</h3>
                <p>{place}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer reveal-section">
          <Lotus className="lotus-small" />
          <SectionHeader title="Join Us" />
          <address>
            C-82, Patel Nagar
            <br />
            Raisen Road, Bhopal - 462022
          </address>
          <div className="phone-row">
            <span>8516082275</span>
            <span>9425654048</span>
            <span>9584727486</span>
          </div>
          <div className="closing">
            <p className="devanagari">॥ मङ्गलं भवतु ॥</p>
            <em>May all be auspicious.</em>
          </div>
          <p className="micro-line">Manoj Weds Sakshi · 19 June 2026 · Bhopal</p>
        </footer>
      </main>
    </>
  );
}
