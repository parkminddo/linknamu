import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* 유리 카드 뒤로 비쳐 보일 은은한 색 번짐 (장식용) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
        <div className="absolute -right-20 top-[45%] h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/15" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl dark:bg-amber-900/15" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-6 sm:px-8 sm:pt-10">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mt-6 sm:mt-8">
          <ProfileHeader {...profile} />
        </div>
        <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
