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
  name: "Mohammad Afshar", // [cite: 1]
  initials: "MA",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about: "Mechanical Engineer - CAE/CFD / R&D", // [cite: 2]
  summary: (
    <>
      Mechanical Engineer specializing in computational engineering, CAE, and simulation-driven R&D. {/* [cite: 7] */}
      Strong background in CFD, FEA, thermal management, and Python-based modelling, with experience on application of Machine Learning to engineering problems. {/* [cite: 8] */}
      Published author in peer-reviewed national journals and international conferences. Seeking a Design, CAE, or R&D Engineer role. {/* [cite: 9] */}
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/51886828?v=4",
  personalWebsiteUrl: "https://www.linkedin.com/in/mhmdafshar/",
  contact: {
    email: "afsharmohammadd@gmail.com", // [cite: 4]
    tel: "+905392381869", // [cite: 3]
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Radinium",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mhmdafshar/", // [cite: 5]
        icon: LinkedInIcon,
      },
    ],
  },
  work: [
    {
      company: "Rivon/Freelance", // [cite: 11]
      link: "",
      badges: [],
      title: "Simulation & Prototyping Engineer", // [cite: 11]
      logo: null,
      start: "Jan 2026", // [cite: 13]
      end: "Present", // [cite: 13]
      description: (
        <>
          Performed structural validation (FEA) and design optimization for functional 3D printed mechanical components. {/* [cite: 14, 15] */}
        </>
      ),
    },
    {
      company: "Erbey Construction", // [cite: 16, 17]
      link: "",
      badges: [],
      title: "Welding Quality Control Engineer", // [cite: 15]
      logo: null,
      start: "Aug 2025", // [cite: 19]
      end: "Jan 2026", // [cite: 19]
      description: (
        <>
          Managed quality inspection for a 1,000-ton steel construction project, ensuring adherence to structural and safety standards. {/* [cite: 20] */}
          <br />
          Implemented corrective actions in coordination with site engineers to maintain ISO 5817 etc. compliance under production constraints. {/* [cite: 21] */}
        </>
      ),
    },
    {
      company: "Beko", // 
      link: "https://www.beko.com.tr",
      badges: [],
      title: "R&D Engineering Intern", // [cite: 22]
      logo: null,
      start: "Jul 2024", // [cite: 23]
      end: "Aug 2024", // [cite: 23]
      description: (
        <>
          Developed a multidomain (air & refrigerant) simulation model for a heat pump tumble dryer using Python, improving performance prediction accuracy by ~87%. {/*  */}
        </>
      ),
    },
  ],
  education: [
    {
      school: "Yıldız Technical University", // [cite: 31]
      degree: "B.Eng., Mechanical Engineering", // [cite: 30]
      start: "Oct 2021", // [cite: 32]
      end: "Jul 2025", // [cite: 32]
      description: (
        <>
          Thesis subject: &quot;Physics-Informed Neural Networks for Rocket Nose Cone Flow Prediction: Experimental & computational and machine learning approaches&quot;. {/*  */}
          <br />
          GPA: 2.9/4<br />
          Coursework: thermodynamics, heat transfer, fluid dynamics, vibrations, strength of materials, dynamics; plus C programming, calculus, linear algebra, differential equations, statistics, numerical analysis, and finite element methods.<br />
          Developed critical thinking and analytical skills to tackle engineering problems.
        </>
      ),
    },
    {
      school: "RSP Technical High School", // [cite: 35]
      degree: "Mechatronics", // [cite: 34]
      start: "Sep 2017", // [cite: 40]
      end: "Jul 2021", // [cite: 40]
      description: (
        <>
          GPA: 96.8/100<br />
          Graduated first place with honour. {/* [cite: 36] */}
          <br />
          Relevant coursework: technical drawing, basic mechanics, hydraulics, automatic control, circuits, microcontrollers.<br />
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
    "SolidWorks", // 
    "Autodesk Inventor", // 
    "HYPERMILL", // 
    "ANSYS", // [cite: 52]
    "OpenFOAM", // [cite: 52]
    "MATLAB/Simulink", // [cite: 52]
    "Python", // 
    "C++", // 
    "C", // 
    "Machine Learning (PINNs)", // [cite: 59]
    "Computational Fluid Dynamics (CFD)", // [cite: 53]
    "Finite Element Analysis (FEA)", // [cite: 53]
    "Thermal Management Simulation", // [cite: 53]
    "3D Modeling & CNC Milling", // 
    "GD&T / CMM Part Inspection", // 
    "Project Management", // 
  ],
  languages: [
    "English (IELTS: 7)", // 
    "German (A2)", // 
    "Persian (native)", // 
    "Turkish (native)", // 
  ],

  References: [
    {
      title: "Res. Asst. PhD Mustafa Kemal Sevindir",
      techStack: [],
      description: "ASHRAE Turkish Chapter Treasurer",
      link: {
        label: "Email",
        href: "sevindir@yildiz.edu.tr",
      },
    },
    {
      title: "Res. Asst. PhD Özlem Emanet",
      techStack: [],
      description: "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "panzehir@yildiz.edu.tr",
      },
    },
    {
      title: "Assoc. Prof. Alp Tekin Ergenç",
      techStack: [],
      description: "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "aergenc@yildiz.edu.tr",
      },
    },
    {
      title: "Prof. Özden Ağra",
      techStack: [],
      description: "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "oagra@yildiz.edu.tr",
      },
    },
  ],
  Publications: [
    {
      title: "Journal of Engineering Sciences and Design", // 
      techStack: [],
      description: "Trajectory Modelling for High-Power Rockets Using MATLAB/Simulink", // 
      link: {
        label: "DOI",
        href: "https://doi.org/10.21923/jesd.1653290", // 
      },
    },
    {
      title: "3rd International Conference of Energy Systems", // [cite: 27]
      techStack: [],
      description: "Physics-Informed Neural Networks for Rocket Nose Cone Flow Prediction: A Comparative CFD Study", // [cite: 27]
      link: {
        label: "site",
        href: "https://ices2025conference.com/",
      },
    },
    {
      title: "7th International Conference on Advances in Mechanical Engineering", // [cite: 26]
      techStack: [],
      description: "Mathematical Modelling and Experimental Investigation of Lf280k Li-ion Batteries Cooling System with MATLAB.", // [cite: 26]
      link: {
        label: "site",
        href: "https://icame2024conference.com/",
      },
    },
  ],
  projects: [
    {
      title: "Yıldız Rocket Team", // [cite: 46]
      techStack: [],
      description: (
        <>
          Volunteer Recovery sub-team Lead. {/* [cite: 46] */}
          Led a team of 4 engineering students from different majors. {/* [cite: 49] */}
          Developed a low shock satellite separation system for ARTAM-1 Rocket. {/* [cite: 48] */}
        </>
      ),
      link: {
        label: "YRT",
        href: "https://www.linkedin.com/company/yildizroket/",
      },
    },
    {
      title: "Volunteer Research Assistant", // [cite: 38]
      techStack: [],
      description: (
        <>
          Modelled and simulated thermal management systems for LFP batteries and heat pump dryers using MATLAB. {/* [cite: 42] */}
        </>
      ),
      link: {
        label: "YTU Arçelik laboratory", // [cite: 39]
        href: "",
      },
    },
    {
      title: "Volunteer 2209-A Research Student", // [cite: 45]
      techStack: [],
      end: "Oct 2023", // [cite: 44]
      description: (
        <>
          Conducted research on unmanned aerial vehicles using classification machine learning algorithms for fire protection of forests. {/* [cite: 45] */}
        </>
      ),
      link: {
        label: "TÜBİTAK", // [cite: 43]
        href: "https://tubitak.gov.tr/tr/burslar/lisans-onlisans/destek-programlari/2209-universite-ogrencileri-arastirma-projeleri-destekleme-programi",
      },
    },
    {
      title: "Student Representative", // [cite: 64]
      techStack: [],
      end: "Oct 2023",
      description: (
        <>
          Advocated for student needs in faculty meetings. {/* [cite: 64] */}
        </>
      ),
      link: {
        label: "Yıldız Technical University", // [cite: 31]
        href: "",
      },
    },
    {
      title: "YTU ASHRAE Turkish Chapter Student Branch Vice President", // [cite: 65]
      techStack: [],
      description: (
        <>
        </>
      ),
      link: {
        label: "ASHRAE Turkish Chapter",
        href: "",
      },
    },
    {
      title: "MAKTEK Organization Team Member",
      techStack: [],
      description: (
        <>
          Managed social media.
          Designed posters.
        </>
      ),
      link: {
        label: ", YTU MAKTEK",
        href: "",
      },
    },
  ],
} as const;
