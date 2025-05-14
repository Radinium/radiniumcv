import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mohammad Afshar",
  initials: "MA",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Mechanical Engineer",
  summary: (
    <>
      Mechanical Engineer specializing in physical modeling using different approaches.
      Experienced in mechanical design/analysis and team leadership.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/51886828?v=4",
  personalWebsiteUrl: "https://www.linkedin.com/in/mhmdafshar/",
  contact: {
    email: "afsharmohammadd@gmail.com",
    tel: "+905392381869",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Radinium",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mhmdafshar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Yildiz Technical University",
      degree: "Bachelor's Degree in Mechanical Engineer",
      start: "2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Beko",
      link: "www.beko.com.tr",
      badges: [],
      title: "Intern",
      logo: null,
      start: "2024",
      end: "2024",
      description: (
        <>
          produced a differential model for tumble dryer using python.
          <ul>
            <li>
              validated the model with experimental data.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Solidworks",
    "Anssys fluent",
    "Ansys mechanical",
    "Python",
    "C++",
  ],
  projects: [
    {
      title: "Yildiz Rocket Team",
      techStack: [],
      description:
        "Recovery Subteam Leader for 2 years, Developed a low shock satelite separation system",
      link: {
        label: "YRT",
        href: "https://www.linkedin.com/company/yildizroket/",
      },
    },
  ],
} as const;
