"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  // Sync dark mode with HTML root
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Members", path: "/members" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Advanced IC Systems Lab</h1>

      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 ${
              pathname === item.path
                ? "text-blue-600 dark:text-blue-400 font-bold"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* Dark mode toggle */}
      </div>
    </nav>
  );
}
