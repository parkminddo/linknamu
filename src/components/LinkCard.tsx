"use client";

import Image from "next/image";
import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url, icon }: LinkItem) {
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
      className="relative block w-full rounded-3xl border border-white/70 bg-white/45 px-14 py-[18px] text-center text-[15px] font-bold text-stone-800 shadow-[0_4px_24px_-8px_rgba(120,72,40,0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_8px_28px_-8px_rgba(120,72,40,0.25)] active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] dark:hover:bg-white/10"
    >
      {/* 아이콘은 왼쪽에 고정하고 제목은 카드 가운데에 둔다 */}
      {icon && (
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="absolute left-5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-md object-contain"
        />
      )}
      {title}
    </a>
  );
}
