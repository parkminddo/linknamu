import Image from "next/image";
import type { Profile } from "@/data/profile";

// 테두리 링 + 부드러운 그림자로 사진이 살짝 떠 보이게 한다
const avatarClass =
  "h-32 w-32 rounded-full bg-white ring-4 ring-white/80 shadow-[0_12px_32px_-8px_rgba(120,72,40,0.35),inset_0_-4px_10px_rgba(0,0,0,0.04)] sm:h-36 sm:w-36 dark:ring-white/10 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className={`${avatarClass} object-contain p-3`}
          priority
        />
      ) : (
        <div
          className={`${avatarClass} flex items-center justify-center text-4xl font-bold text-stone-700`}
        >
          {name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
        {name}
      </h1>
      <p className="mt-2 text-[15px] text-stone-500 dark:text-stone-400">{bio}</p>
    </header>
  );
}
