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
    "Mechanical Engineer interested in Physical Modelling",
  summary: (
    <>
      Frontend-focused Full Stack Engineer specializing in high-performance
      React applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in technical architecture design and remote team
      leadership.
    </>
  ),
  avatarUrl: "src\images\logos\profile.jpg",
  personalWebsiteUrl: null,
  contact: {
    email: "afsharmohammadd@gmail.com",
    tel: "+5392381869",
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
    ],
  },
  education: [
    {
      school: "Yildiz Technical University",
      degree: "Bachelor's Degree in Mechanical Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Beko",
      link: "www.beko.com.tr",
      title: "Intern",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
