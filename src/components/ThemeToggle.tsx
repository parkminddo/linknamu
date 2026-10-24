"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-white/70 bg-white/45 p-2 text-base leading-none shadow-sm backdrop-blur-xl transition hover:bg-white/60 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
    >
      {dark === null ? "　" : dark ? "☀️" : "🌙"}
    </button>
  );
}
