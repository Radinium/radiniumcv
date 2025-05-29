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
          Involved in the construction of a multidomain simulation model of a heat pump
          tumble dryer through Python.<br />
          Validated the model with experimental data.
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
          GPA: 2.9/4<br />
          Coursework: thermodynamics, heat transfer, fluid dynamics, vibrations, strength
          of materials, dynamics; plus C programming, calculus, linear algebra,
          differential equations, statistics, numerical analysis, and finite element methods.<br />
          Developed critical thinking and analytical skills to tackle engineering problems.
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
          GPA: 96.8/100<br />
          Graduated first place with honour.<br />
          Relevant coursework: technical drawing, basic mechanics, hydraulics, automatic
          control, circuits, microcontrollers.<br />
          Participated in many small projects.
        </>
      ),
    },
  ],
  skills: [
    "Communication",
    "Teamwork",
    "Research",
    "Problem Solving",
    "SolidWorks",
    "ANSYS Fluent",
    "ANSYS Mechanical",
    "Python",
    "C++",
    "Data analysis", 
    "MATLAB",
    "Project Management",
    "OpenFOAM",
    "Machine Learning",
    "Computational Fluid Dynamics (CFD)",
  ],
  languages: [
    "English (IELTS: C1)",
    "German (A1)",
    "Persian (native)",
    "Turkish (native)",
  ],

  References: [
    {
      title: "Res. Asst. PhD Mustafa Kemal Sevindir",
      techStack: [],
      description:
        "ASHRAE Turkish Chapter Treasurer",
      link: {
        label: "Email",
        href: "sevindir@yildiz.edu.tr",
      },
    },
    {
      title: "Res. Asst. PhD Özlem Emanet",
      techStack: [],
      description:
        "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "panzehir@yildiz.edu.tr",
      },
    },
    {
      title: "Assoc. Prof. Alp Tekin Ergenç",
      techStack: [],
      description:
        "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "aergenc@yildiz.edu.tr",
      },
    },
    {
      title: "Prof. Özden Ağra",
      techStack: [],
      description:
        "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "oagra@yildiz.edu.tr",
      },
    },
  ],
  Publications: [
    {
      title: "3rd International Conference of Energy Systems",
      techStack: [],
      description:
        "Physics-Informed Neural Networks for Rocket Nose Cone Flow Prediction: A Comparative CFD Study",
      link: {
        label: "site",
        href: "https://ices2025conference.com/",
      },
    },
    {
      title: "7th International Conference on Advances in Mechanical Engineering",
      techStack: [],
      description:
        "Mathematical Modelling and Experimental Investigation of Lf280k Lion Batteries Cooling System with MATLAB.",
      link: {
        label: "site",
        href: "https://icame2024conference.com/",
      },
    },
  ],
  projects: [
    {
      title: "Yildiz Rocket Team",
      techStack: [],
      description:(<>
        Led a team of 4 engineering students. Developed a low-shock satellite separation system for ARTAM-1 Rocket. Researched parachute dynamics.,
      </>
      ),
        link: {
        label: "YRT",
        href: "https://www.linkedin.com/company/yildizroket/",
      },
    },
        {
      title: "Volunteer Research Assistant",
      techStack: [],
      description: (
        <>
          Participated in research on lithium ferrous phosphate batteries behaviour and
          thermal cooling systems, culminating in a seminar presentation.<br />
          Conducted simulation-based thermodynamics and heat-transfer studies for heat pump
          tumble dryers using MATLAB.
        </>
      ),
      link: {
        label: "YTU Arçelik Laboratory",
        href: "",
      },
    },
        {
      title: "2209-A Research Student",
      techStack: [],
      end: "October 2023",
      description: (
        <>
          Researched unmanned aerial vehicles using classification machine learning algorithms
          for jungle fire protection.
        </>
      ),
       link: {
        label: "TÜBİTAK",
        href: "https://tubitak.gov.tr/tr/burslar/lisans-onlisans/destek-programlari/2209-universite-ogrencileri-arastirma-projeleri-destekleme-programi",
      },
    },
  {
      title: "Student Representative",
      techStack: [],
      end: "October 2023",
      description: (
        <>
          Transferred students’ needs to faculty.
        </>
      ),
       link: {
        label: "Yildiz Technical University",
        href: "",
      },
    },
      {
      title: "ASHRAE Turkish Chapter Student Branch Vice President",
      techStack: [],
      description: (
        <>
          Attended and organized seminars.
        </>
      ),
       link: {
        label: "ASHRAE Turkish Chapter",
        href: "",
      },
    },
{
      title: "Organization Team Member",
      techStack: [],
      description: (
        <>
        Managed social media.,
        Designed posters.,
        </>
      ),
       link: {
        label: ", YTU MAKTEK",
        href: "",
      },
    },
  ],
} as const;
