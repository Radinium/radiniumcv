import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { BoxIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Mohammad Afshar", // [cite: 1]
  initials: "MA",
  location: "Istanbul / Eskişehir, Türkiye",
  locationLink: "https://www.google.com/maps/place/T%C3%BCrkiye",
  about: "Mechanical Engineer – CAE / CFD / R&D", // [cite: 2]
  summary: (
    <>
      Mechanical Engineer specializing in computational engineering. Background
      in CFD & Python-based modelling, with experience in ML engineering
      applications. Published in national journals and international
      conferences.
    </>
  ),
  avatarUrl: "public/biometric.jpg",
  personalWebsiteUrl: "https://www.afsharr.xyz",
  grabCadUrl: "https://grabcad.com/mohammad.afshar-4/models",
  contact: {
    email: "afsharmohammadd@gmail.com", // [cite: 4]
    tel: "+905528748576", // [cite: 3]
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Radinium",
        icon: GitHubIcon,
      },
      {
        name: "GrabCAD",
        url: "https://grabcad.com/mohammad.afshar-4/models",
        icon: BoxIcon,
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
      company: "Teknosis",
      link: "https://www.teknosistem.com.tr/",
      badges: [],
      title: "Design Engineer",
      logo: null,
      start: "Mar 2026",
      end: "Present",
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Engineered functional 3D solid manufacturing assemblies from 2D
            drawings for CNC machine tool components, including spindle
            assemblies, tool turrets, lathe chucks, and tailstocks.
          </li>
          <li>
            Conducted Design for Manufacturing (DFM) reviews and generated CAM
            toolpaths, aligning components to CNC machining capabilities and
            reducing production costs.
          </li>
          <li>
            Trained technicians on workflows and programming for legacy CNC
            equipment, improving production efficiency.
          </li>
        </ul>
      ),
    },
    {
      company: "Rivon/Freelance", // [cite: 11]
      link: "https://tr.linkedin.com/company/rivontr",
      badges: [],
      title: "Simulation & Prototyping Engineer", // [cite: 11]
      logo: null,
      start: "Jan 2026", // [cite: 13]
      end: "Present", // [cite: 13]
      description: (
        <>
          Performed structural validation (FEA) and design optimization for
          functional 3D printed mechanical components. {/* [cite: 14, 15] */}
        </>
      ),
    },
    {
      company: "Erbey Construction",
      link: "https://www.erbeycati.com/index.en.html",
      badges: [],
      title: "Project Engineer (Project-Based)",
      logo: null,
      start: "Aug 2025",
      end: "Jan 2026",
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Produced 2D fabrication and erection drawings for a 1,000-ton heavy
            structural steel project using Tekla Structures and AutoCAD,
            translating structural frameworks into manufacturing instructions.
          </li>
          <li>
            Generated Bills of Materials (BOMs) and technical documentation,
            cross-referencing structural drawings to ensure material
            traceability and prevent costly procurement errors.
          </li>
          <li>
            Conducted on-floor quality control inspections of welded steel
            assemblies, verifying structural tolerances and weld compliance
            against engineering drawings prior to final site erection.
          </li>
        </ul>
      ),
    },
    {
      company: "Beko", //
      link: "https://www.beko.com.tr",
      badges: [],
      title: "R&D Intern", // [cite: 22]
      logo: null,
      start: "Jul 2024", // [cite: 23]
      end: "Aug 2024", // [cite: 23]
      description: (
        <>
          Developed a multidomain simulation model for a heat pump tumble dryer
          using Python, improving performance prediction accuracy by ~87%.{" "}
          {/*  */}
        </>
      ),
    },
  ],
  education: [
    {
      school: "Istanbul Technical University",
      link: "https://www.itu.edu.tr/en",
      degree: "M.Sc., Mechanical Engineering",
      start: "Jul 2026",
      end: "Present",
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>Heat & Fluid Program</li>
        </ul>
      ),
    },
    {
      school: "Yıldız Technical University", // [cite: 31]
      link: "https://www.yildiz.edu.tr/en",
      degree: "B.Sc., Mechanical Engineering", // [cite: 30]
      start: "Oct 2021", // [cite: 32]
      end: "Jul 2025", // [cite: 32]
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Thesis subject: &quot;PINN for Nose Cone Flow Prediction: Exp. &
            Comp. & ML approaches&quot;.
          </li>
          <li>GPA: 2.9/4</li>
          <li>
            Coursework: thermodynamics, heat transfer, fluid dynamics,
            vibrations, strength of materials, dynamics; plus C programming,
            calculus, linear algebra, differential equations, statistics,
            numerical analysis, and finite element methods.
          </li>
          <li>
            Developed critical thinking and analytical skills to tackle
            engineering problems.
          </li>
        </ul>
      ),
    },
    {
      school: "RSP Technical High School", // [cite: 35]
      link: "https://www.afyonteknikkoleji.com/",
      degree: "Mechatronics", // [cite: 34]
      start: "Sep 2017", // [cite: 40]
      end: "Jul 2021", // [cite: 40]
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>GPA: 96.8/100</li>
          <li>Graduated first place with honour.</li>
          <li>
            Relevant coursework: technical drawing, basic mechanics, hydraulics,
            automatic control, circuits, microcontrollers.
          </li>
          <li>Participated in many small projects.</li>
        </ul>
      ),
    },
  ],
  skills: [
    {
      category: "Simulation & Analysis (CAE/FEA)",
      items: [
        "Ansys",
        "OpenFOAM",
        "MATLAB/Simulink",
        "Computational Fluid Dynamics (CFD)",
        "Finite Element Analysis (FEA)",
        "Thermal Management Simulation",
        "CalculiX",
      ],
    },
    {
      category: "Design & Manufacturing (CAD/CAM)",
      items: [
        "NX",
        "SolidWorks",
        "Autodesk Inventor",
        "HYPERMILL",
        "3D Modeling",
        "CNC Milling",
        "GD&T / CMM Part Inspection",
      ],
    },
    {
      category: "Programming & Data Science",
      items: [
        "Python (Advanced)",
        "C++",
        "Machine Learning (PINNs)",
        "Scientific Computing",
        "Data Analysis",
      ],
    },
    {
      category: "Soft Skills & Management",
      items: [
        "Project Management",
        "Problem Solving",
        "Research",
        "Teamwork",
        "Communication",
      ],
    },
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
        href: "mailto:sevindir@yildiz.edu.tr",
      },
    },
    {
      title: "Res. Asst. PhD Özlem Emanet",
      techStack: [],
      description:
        "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "mailto:panzehir@yildiz.edu.tr",
      },
    },
    {
      title: "Assoc. Prof. Alp Tekin Ergenç",
      techStack: [],
      description:
        "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "mailto:aergenc@yildiz.edu.tr",
      },
    },
    {
      title: "Prof. Özden Ağra",
      techStack: [],
      description:
        "Dept. of Mechanical Engineering, Yildiz Technical University",
      link: {
        label: "Email",
        href: "mailto:oagra@yildiz.edu.tr",
      },
    },
  ],
  Publications: [
    {
      title: "Journal of Engineering Sciences and Design", //
      techStack: [],
      description: "Trajectory Modelling for H-P Rockets Using MATLAB", //
      link: {
        label: "DOI",
        href: "https://doi.org/10.21923/jesd.1653290", //
      },
    },
    {
      title: "ICES2025 ISTANBUL", // [cite: 27]
      techStack: [],
      description:
        "PINN for Rocket Nose Cone Flow Prediction: A Comparative CFD Study", // [cite: 27]
      link: {
        label: "site",
        href: "public/ICES2025.pdf",
      },
    },
    {
      title: "ICAME2024 ISTANBUL", // [cite: 26]
      techStack: [],
      description:
        "Mathematical Modelling and Experimental Investigation of Lf280k Li-ion Batteries Cooling System with MATLAB.", // [cite: 26]
      link: {
        label: "site",
        href: "public/ICAME2024.pdf",
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
          Led a team of 4 engineering students from different majors.{" "}
          {/* [cite: 49] */}
          Developed a satellite separation system for ARTAM-1 Rocket as Recovery
          Lead. {/* [cite: 48] */}
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
          Modelled and simulated thermal management systems for LFP batteries
          and heat pump dryers using MATLAB. {/* [cite: 42] */}
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
          Engineered a forest fire detection system utilizing algorithms as
          2209-A Research Student at TÜBİTAK. {/* [cite: 45] */}
        </>
      ),
      link: {
        label: "TÜBİTAK", // [cite: 43]
        href: "public/Mohammad_Afshar_tubitak_2209a_sonuc.pdf",
      },
    },
    {
      title: "Student Representative", // [cite: 64]
      techStack: [],
      end: "Oct 2023",
      description: (
        <>
          Served as YTU Mechanical Engineering section representative for 2
          years. {/* [cite: 64] */}
        </>
      ),
      link: {
        label: "Yıldız Technical University", // [cite: 31]
        href: "https://www.yildiz.edu.tr/en",
      },
    },
    {
      title: "YTU ASHRAE Turkish Chapter Student Branch Vice President", // [cite: 65]
      techStack: [],
      description: <></>,
      link: {
        label: "ASHRAE Turkish Chapter",
        href: "https://ashrae.org.tr/",
      },
    },
    {
      title: "MAKTEK Organization Team Member",
      techStack: [],
      description: <>Managed social media. Designed posters.</>,
      link: {
        label: "YTU MAKTEK",
        href: "https://www.ytumaktek.org",
      },
    },
  ],
} as const;
