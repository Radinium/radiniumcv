import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SkillGroup = {
  category: string;
  items: readonly string[];
};

type Skills = readonly SkillGroup[];

interface SkillsListProps {
  skills: readonly string[];
  className?: string;
  ariaLabel?: string;
}

function SkillsList({ skills, className, ariaLabel }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-2 p-0", className)}
      aria-label={ariaLabel ?? "List of skills"}
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge
            className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 print:text-[10px]"
            aria-label={`Skill: ${skill}`}
            variant="secondary"
          >
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

/**
 * Skills section component
 * Displays categorized professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div className="space-y-5" aria-labelledby="skills-section">
        {skills.map((group) => (
          <div key={group.category} className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground/70">{group.category}</h3>
            <SkillsList skills={group.items} ariaLabel={`${group.category} skills`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
