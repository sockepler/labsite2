"use client";

import { useState, useEffect } from "react";

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fade = Math.max(1 - scrollY / 300, 0);
      setOpacity(fade);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center px-6"
      style={{ opacity, transition: "opacity 0.2s linear" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero.jpg")' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      {/* Text content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mt-6 max-w-3xl mx-auto drop-shadow">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
