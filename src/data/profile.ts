export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon?: string;
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
  image: "/gsl-logo.png",
  links: [
    {
      id: "patreon",
      title: "Patreon",
      url: "https://www.patreon.com/GSL",
      icon: "/icons/patreon.svg",
    },
    {
      id: "soop-kr",
      title: "SOOP GSL (KR)",
      url: "https://www.sooplive.com/station/afgsl",
      icon: "/icons/soop.png",
    },
    {
      id: "soop-en",
      title: "SOOP GSL (EN)",
      url: "https://www.sooplive.com/station/gslenglish",
      icon: "/icons/soop.png",
    },
    {
      id: "youtube",
      title: "YouTube",
      url: "https://www.youtube.com/@SOOPesports_EN",
      icon: "/icons/youtube.svg",
    },
  ],
};
