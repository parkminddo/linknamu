import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="h-36 w-36 rounded-full border border-gray-200 object-cover sm:h-40 sm:w-40 dark:border-gray-800"
          priority
        />
      ) : (
        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white sm:h-40 sm:w-40">
          {name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
