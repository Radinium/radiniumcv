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
  about: "Mechanical Engineer",
  summary: (
    <>
      Motivated Mechanical Engineering graduate with hands-on experience in thermal
      systems, computational fluid dynamics (CFD), and machine learning applications
      in engineering. Co-authored and presented papers at international conferences on
      battery cooling and physics-informed neural networks for aerodynamic prediction.
      Skilled in MATLAB, Python, and simulation tools such as ANSYS and OpenFOAM, with
      a record in interdisciplinary research and team leadership. Actively pursuing
      opportunities to contribute to engineering projects in a global context.
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
    ],
  },
  work: [
    {
      company: "Beko",
      link: "https://www.beko.com.tr",
      badges: [],
      title: "Research and Development Engineering Intern",
      logo: null,
      start: "July 2024",
      end: "August 2024",
      description: (
        <>
          ● Involved in the construction of a multidomain simulation model of a heat pump
          tumble dryer through Python.<br />
          ● Validated the model with experimental data.
        </>
      ),
    },
  ],
  education: [
    {
      school: "Yildiz Technical University",
      degree: "B.Eng., Mechanical Engineering",
      start: "October 2021",
      end: "July 2025",
      description: (
        <>
          ● GPA: 2.9/4<br />
          ● Coursework: thermodynamics, heat transfer, fluid dynamics, vibrations, strength
          of materials, dynamics; plus C programming, calculus, linear algebra,
          differential equations, statistics, numerical analysis, and finite element methods.<br />
          ● Developed critical thinking and analytical skills to tackle engineering problems.
        </>
      ),
    },
    {
      school: "AOSB Rahmiye Sare Palali Anatolian Technical High School",
      degree: "Mechatronics Technician",
      start: "September 2017",
      end: "July 2021",
      description: (
        <>
          ● GPA: 96.8/100<br />
          ● Graduated first place with honour.<br />
          ● Relevant coursework: technical drawing, basic mechanics, hydraulics, automatic
          control, circuits, microcontrollers.<br />
          ● Participated in many small projects.
        </>
      ),
    },
  ],
  skills: [
    "SolidWorks",
    "ANSYS Fluent",
    "ANSYS Mechanical",
    "Python",
    "C++",
  ],
  projects: [
    {
      title: "Yildiz Rocket Team",
      techStack: [],
      description:
        "Recovery Subteam Leader for 2 years; developed a low-shock satellite separation system.",
      link: {
        label: "YRT",
        href: "https://www.linkedin.com/company/yildizroket/",
      },
    },
  ],

  // —— New sections added from CV PDF —— //

  researchExperience: [
    {
      role: "Volunteer Research Assistant",
      organization: "YTU Arçelik Laboratory",
      location: "Istanbul",
      start: "October 2023",
      end: "July 2025",
      description: (
        <>
          ● Participated in research on lithium ferrous phosphate batteries behaviour and
          thermal cooling systems, culminating in a seminar presentation.<br />
          ● Conducted simulation-based thermodynamics and heat-transfer studies for heat pump
          tumble dryers using MATLAB.
        </>
      ),
    },
    {
      role: "2209-A Research Student",
      organization: "TÜBİTAK",
      location: "Istanbul",
      start: "November 2022",
      end: "October 2023",
      description: (
        <>
          ● Researched unmanned aerial vehicles using classification machine learning algorithms
          for jungle fire protection.
        </>
      ),
    },
  ], // :contentReference[oaicite:0]{index=0}

  conferences: [
    {
      name: "7th International Conference on Advances in Mechanical Engineering",
      presentation:
        'Co-authored and presented “Mathematical Modelling and Experimental Investigation of Lf280k Lion Batteries Cooling System with MATLAB.”',
    },
    {
      name: "3rd International Conference of Energy Systems",
      presentation:
        'Co-authored and presented “Physics-Informed Neural Networks for Rocket Nose Cone Flow Prediction: A Comparative CFD Study” (also the topic of my thesis).',
    },
  ], // :contentReference[oaicite:1]{index=1}

  additionalInformation: {
    funding: "DAFI scholarship for 3 years", // :contentReference[oaicite:2]{index=2}
    languages: [
      "English (IELTS: C1)",
      "German (A1)",
      "Persian (native)",
      "Turkish (native)",
    ],
    certifications: [
      "Data analysis, machine learning and scientific computing certification with Python, C++",
      "Project Management certification from Google",
    ],
    softSkills: [
      "Communication",
      "Teamwork",
      "Research",
      "Problem Solving",
    ],
    martialArts: "Taekwondo Red Belt",
  }, // :contentReference[oaicite:3]{index=3}

  volunteering: [
    {
      role: "Student Representative",
      details: "Transferred students’ needs to faculty.",
    },
    {
      role: "ASHRAE Turkish Chapter Student Branch Vice President",
      details: "Attended and organized seminars.",
    },
    {
      role: "Recovery Sub-team Lead, Yildiz Rocket Team",
      details: [
        "Developed a low-shock satellite separation system for ARTAM-1 Rocket.",
        "Led a team of 4 engineering students.",
        "Researched parachute dynamics.",
      ],
    },
    {
      role: "Organization Team Member, YTU MAKTEK",
      details: [
        "Managed social media.",
        "Designed posters.",
      ],
    },
  ], // :contentReference[oaicite:4]{index=4}

  references: [
    {
      name: "Prof. Özden Ağra",
      title: "Dept. of Mechanical Engineering, Yildiz Technical University",
      email: "oagra@yildiz.edu.tr",
    },
    {
      name: "Assoc. Prof. Alp Tekin Ergenç",
      title: "Dept. of Mechanical Engineering, Yildiz Technical University",
      email: "aergenc@yildiz.edu.tr",
    },
    {
      name: "Res. Asst. PhD Özlem Emanet",
      title: "Dept. of Mechanical Engineering, Yildiz Technical University",
      email: "panzehir@yildiz.edu.tr",
    },
    {
      name: "Res. Asst. PhD Mustafa Kemal Sevindir",
      title: "ASHRAE Turkish Chapter Treasurer",
      email: "sevindir@yildiz.edu.tr",
    },
  ], // :contentReference[oaicite:5]{index=5}
} as const;
