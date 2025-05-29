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
      Motivated Mechanical Engineering graduate with hands-on experience in thermal systems, computational fluid dynamics (CFD), and machine learning applications in engineering. Co-authored and presented papers at international conferences on battery cooling and physics-informed neural networks for aerodynamic prediction. Skilled in MATLAB, Python, and simulation tools such as ANSYS and OpenFOAM, with a record in interdisciplinary research and team leadership. Actively pursuing opportunities to contribute to engineering projects in a global context.
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
          ●	Involved in the construction of a multidomain simulation model of a heat pump tumble dryer through python.
          ● Validated the model with experimental data.
        </>
      ),
    },
  ],
  education: [
    {
      school: "Yildiz Technical University",
      degree: "Bachelor's Degree in Mechanical Engineer",
      start: "2021",
      end: "2025",
      description: (
        <>
          ● Coursework including thermodynamics, heat transfer, fluid dynamics, vibrations, strength of materials, and dynamics.  I also completed foundational studies in computer science (C programming), mathematics (calculus, linear algebra, differential equations), and related areas such as statistics, numerical analysis, and finite element methods.
          ● Developed critical thinking and analytical skills to counter engineering problems.
        </>
      ),
    },
    {
      school: "AOSB Rahmiye Sare Palali Anatolian Technical High School",
      degree: "Mechatroincs Technician",
      start: "2017",
      end: "2021",
      description: (
        <>
        ● Graduated first place with honour.
        ● Relevant courses technical drawing, basic mechanics, hydraulics, automatic control, circuits, microcontrollers.
        ● Participated in many small projects.
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
