"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  // sendBeacon은 페이지를 떠나도 요청이 끝까지 전송된다
  const recordClick = () => {
    const body = new Blob([JSON.stringify({ id })], {
      type: "application/json",
    });
    navigator.sendBeacon("/api/clicks", body);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border border-gray-300 bg-white px-5 py-5 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {title}
    </a>
  );
}
