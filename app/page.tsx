"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // opacity based on scroll
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOpacity(Math.max(1 - y / 300, 0));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* ===== 1. Hero Section (Fade-out Image) ===== */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          opacity,
          transition: "opacity 0.1s linear"
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero.jpg")' }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-white">
            Advanced Integrated Circuit Systems Lab
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto">
            Specializing in SAR ADCs, Comparators, and Mixed-Signal IC Design.
          </p>
        </div>
      </section>

      {/* ===== 2. About Section ===== */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Our Research</h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Our laboratory focuses on the design and optimization of high-performance 
          analog and mixed-signal integrated circuits. Key research topics include:
        </p>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <li>Successive Approximation Register (SAR) ADC architectures</li>
          <li>Stochastic Comparator Arrays & Majority Voting Systems</li>
          <li>Low-power Mixed-Signal circuit design</li>
          <li>Analog layout techniques with mismatch optimization</li>
          <li>Monte-Carlo modeling & AMS co-simulation</li>
        </ul>
      </section>

      {/* ===== 3. Research Highlights Cards ===== */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Research Highlights</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">SAR ADC Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Low-power SAR ADC architecture, switching optimization, CDAC design,
              timing error reduction and layout-aware modeling.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Stochastic Comparator</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Majority-voting comparators, metastability modeling, parallel redundancy,
              and robust decision logic.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Mixed-Signal Systems</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Sensor interface ICs, low-noise analog front-ends, 
              and mixed-signal SoC integration.
            </p>
          </div>
        </div>
      </section>
            {/* ===== 4. Topics Section ===== */}
      <section className="py-24 px-6 max-w-5xl mx-auto">

        {/* 标题 + More */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Topics</h2>

          <a 
            href="/topics"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            More →
          </a>
        </div>

        <div className="space-y-6">
          {/* --- Topic 1 --- */}
          <a
            href="#"
            className="block border dark:border-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              2025.01.22
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              「多数決コンパレータを用いたSAR ADC設計」のシミュレーション結果を更新しました
            </h3>
          </a>

          {/* --- Topic 2 --- */}
          <a
            href="#"
            className="block border dark:border-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              2024.12.10
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              学会発表：IEEE TJCAS 2025 に論文投稿予定
            </h3>
          </a>

          {/* --- Topic 3 --- */}
          <a
            href="#"
            className="block border dark:border-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              2024.11.05
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              新メンバー（B4）が研究テーマ「低消費電力SAR ADC」に参加しました
            </h3>
          </a>
        </div>
      </section>


    </main>
  );
}
