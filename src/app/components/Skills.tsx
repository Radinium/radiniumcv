import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

const SKILL_CATEGORIES = {
  "Engineering Software": [
    "SolidWorks",
    "Autodesk Inventor",
    "HYPERMILL",
    "ANSYS",
    "OpenFOAM",
    "MATLAB/Simulink",
    "Computational Fluid Dynamics (CFD)",
    "Finite Element Analysis (FEA)",
    "Thermal Management Simulation",
    "3D Modeling & CNC Milling",
    "GD&T / CMM Part Inspection",
  ],
  "Programming & Data": ["Python", "C++", "C", "Machine Learning (PINNs)"],
  "Soft Skills": [
    "Communication",
    "Teamwork",
    "Research",
    "Problem Solving",
    "Project Management",
  ],
} as const;

interface SkillsListProps {
  skills: Skills;
  className?: string;
  ariaLabel?: string;
}

function SkillsList({ skills, className, ariaLabel }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label={ariaLabel ?? "List of skills"}
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

function categorizeSkills(skills: Skills) {
  const remaining = new Set<string>(skills);

  const groups: { title: string; items: string[] }[] = Object.entries(SKILL_CATEGORIES).map(([title, categorySkills]) => {
    const items = categorySkills.filter((skill) => remaining.has(skill));
    items.forEach((skill) => remaining.delete(skill));
    return { title, items };
  });

  if (remaining.size > 0) {
    groups.push({ title: "Other", items: Array.from(remaining) });
  }

  return groups.filter((group) => group.items.length > 0);
}

/**
 * Skills section component
 * Displays categorized professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  const groupedSkills = categorizeSkills(skills);

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div className="space-y-3" aria-labelledby="skills-section">
        {groupedSkills.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="text-sm font-semibold text-foreground/80">{group.title}</h3>
            <SkillsList skills={group.items} ariaLabel={`${group.title} skills`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
