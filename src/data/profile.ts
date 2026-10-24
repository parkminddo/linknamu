export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image?: string;
  links: LinkItem[];
};

// TODO: 보여주기용 더미 값입니다. 실제 프로필과 링크로 교체하세요.
export const profile: Profile = {
  name: "GSL",
  bio: "Global Starcraft II League",
  image: "/profile-placeholder.svg",
  links: [
    { id: "patreon", title: "Patreon", url: "https://www.patreon.com/" },
    { id: "soop", title: "SOOP 방송국", url: "https://www.sooplive.co.kr/" },
    { id: "youtube", title: "YouTube", url: "https://www.youtube.com/" },
  ],
};
