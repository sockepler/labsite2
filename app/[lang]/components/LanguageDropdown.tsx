"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageDropdown() {
  const router = useRouter();
  const path = usePathname();

  const currentLocale = path.split("/")[1] || "en";
  const restPath = path.split("/").slice(2).join("/");

  const [open, setOpen] = useState(false);

  const changeLang = (lang: string) => {
    router.push(`/${lang}/${restPath}`);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-2"
      >
        🌐 { currentLocale === "en" ? "English" : currentLocale === "ja" ? "日本語" : "中文" }
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-32 z-50">
          <button
            onClick={() => changeLang("en")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            English
          </button>

          <button
            onClick={() => changeLang("ja")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            日本語
          </button>

          <button
            onClick={() => changeLang("zh")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            中文
          </button>
        </div>
      )}
    </div>
  );
}
