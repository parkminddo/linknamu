"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모든 링크를 0회로 보여준다
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) =>
        // 응답이 오기 전에 누른 클릭이 사라지지 않도록 더해서 합친다
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, n] of Object.entries(prev)) {
            next[id] = (next[id] ?? 0) + n;
          }
          return next;
        }),
      )
      .catch(() => {});
  }, []);

  const increment = (id: string) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={counts[link.id] ?? 0}
            onClick={() => increment(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
