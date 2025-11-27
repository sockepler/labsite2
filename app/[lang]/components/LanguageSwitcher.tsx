"use client";

import { usePathname, useRouter } from "next/navigation";

const langs = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLang(target: string) {
    // Replace the first segment (/ja /en /zh)
    const newPath = pathname.replace(/^\/(ja|en|zh)/, `/${target}`);
    router.push(newPath);
  }

  return (
    <div className="flex gap-2">
      {langs.map((item) => (
        <button
          key={item.code}
          onClick={() => switchLang(item.code)}
          className={`px-3 py-1 rounded ${
            lang === item.code
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

