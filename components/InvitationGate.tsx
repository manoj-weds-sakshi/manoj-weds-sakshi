"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface InvitationGateProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onOpenComplete: () => void;
}

export default function InvitationGate({ audioRef, onOpenComplete }: InvitationGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const interactionTriggered = useRef(false);

  const handleTap = () => {
    if (interactionTriggered.current) return;
    interactionTriggered.current = true;
    setIsOpening(true);

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio.play().catch((err) => {
        console.error("Audio playback failed to initiate on user interaction:", err);
      });

      // Fade music from 0 to 0.18 over 3000ms
      const duration = 3000;
      const targetVolume = 0.18;
      const startTime = Date.now();

      const fadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVol = progress * targetVolume;
        
        // Safety bounds checks to prevent any IndexSizeError
        audio.volume = Math.max(0, Math.min(1, currentVol));

        if (progress >= 1) {
          clearInterval(fadeInterval);
        }
      }, 50);
    }

    // Sequence:
    // 1. Show "Opening the Invitation..." for 1000ms
    // 2. Start 1000ms CSS overlay opacity fade-out
    // 3. Complete and unmount
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onOpenComplete();
      }, 1000);
    }, 1000);
  };

  return (
    <div
      className={`gate-overlay ${isFadingOut ? "gate-fade-out" : ""}`}
      onClick={handleTap}
      aria-label="Welcome overlay: click to enter the wedding invitation"
    >
      {/* Decorative Outer Frame */}
      <div className="gate-frame" />
      <div className="gate-frame-inner" />

      {/* Decorative Corners inside the border */}
      <div className="gate-corner gate-corner--tl" />
      <div className="gate-corner gate-corner--tr" />
      <div className="gate-corner gate-corner--bl" />
      <div className="gate-corner gate-corner--br" />

      {/* Centered Content */}
      <div className="gate-content">
        {/* Top Ornament with subtle gold shimmer */}
        <div className="gate-ornament-wrapper">
          <Image
            src="/ornament-rose-gold-scroll.png"
            alt="Royal ornament"
            width={220}
            height={90}
            className="gate-ornament"
            priority
          />
        </div>

        {/* Main Title */}
        <h1 className="gate-title">MANOJ WEDS SAKSHI</h1>

        {/* Small Divider */}
        <hr className="gate-divider-small" />

        {/* Date */}
        <p className="gate-date">19 JUNE 2026</p>

        {/* Tagline */}
        <p className="gate-tagline">
          You are cordially invited<br />to celebrate this sacred union
        </p>

        {/* Action instruction with pulse animation */}
        <p className={`gate-action ${isOpening ? "gate-action--loading" : "gate-action--pulse"}`}>
          {isOpening ? "Opening the Invitation..." : "Tap Anywhere to Open the Invitation"}
        </p>

        {/* Bottom Ornament matching divider */}
        <svg className="gate-bottom-lotus" viewBox="0 0 80 80" aria-hidden="true">
          <path d="M40 8C28 20 28 34 40 45C52 34 52 20 40 8Z" />
          <path d="M22 18C16 34 22 46 38 52C39 35 33 25 22 18Z" />
          <path d="M58 18C64 34 58 46 42 52C41 35 47 25 58 18Z" />
          <path d="M10 38C20 53 33 58 40 58C32 43 24 38 10 38Z" />
          <path d="M70 38C60 53 47 58 40 58C48 43 56 38 70 38Z" />
          <path d="M20 64H60" />
          <path d="M28 72H52" />
        </svg>
      </div>
    </div>
  );
}
