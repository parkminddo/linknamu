import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <ProfileHeader {...profile} />
      <ul className="mt-10 flex flex-col gap-6">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
