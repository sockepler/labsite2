"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { key: "home", ja: "ホーム", en: "Home", zh: "首页", path: "" },
  { key: "about", ja: "研究室について", en: "About", zh: "研究室简介", path: "about" },
  { key: "research", ja: "研究テーマ", en: "Research", zh: "研究主题", path: "research" },
  { key: "members", ja: "メンバー", en: "Members", zh: "成员", path: "members" },
  { key: "publications", ja: "研究業績", en: "Publications", zh: "研究成果", path: "publications" },
  { key: "access", ja: "アクセス", en: "Access", zh: "访问", path: "access" },
];

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (route: string) => {
    if (route === "" && pathname === `/${lang}`) return true;
    return pathname.startsWith(`/${lang}/${route}`);
  };

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href={`/${lang}`} className="font-bold text-lg">
          先端集積回路システム研究室
        </Link>

        {/* Burger (Mobile) */}
        <button
          className="md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Nav links */}
        <nav
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static left-0 w-full md:w-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur md:bg-transparent p-6 md:p-0 transition-all ${
            open ? "top-16" : "top-[-400px]"
          }`}
        >
          {navItems.map((item) => {
            const label = item[lang as "ja" | "en" | "zh"];

            return (
              <Link
                key={item.key}
                href={`/${lang}/${item.path}`}
                className="relative group text-gray-800 dark:text-gray-200"
              >
                {/* Text */}
                <span
                  className={`font-medium ${
                    isActive(item.path)
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                >
                  {label}
                </span>

                {/* Underline Animation */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 
                    scale-x-0 group-hover:scale-x-100 origin-left 
                    transition-transform duration-300
                    ${isActive(item.path) ? "scale-x-100" : ""}
                  `}
                />
              </Link>
            );
          })}

          {/* Language Switch */}
          <div className="flex gap-3 mt-4 md:mt-0">
            {["ja", "en", "zh"].map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`px-2 rounded text-sm ${
                  lang === l
                    ? "font-bold text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
