import { Section } from "@/components/ui/section";

type SkillGroup = {
  category: string;
  items: readonly string[];
};

interface SkillsProps {
  skills: readonly SkillGroup[];
  className?: string;
}

/**
 * Skills section component
 * Displays skill categories with chip-style items
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>

      <div className="space-y-4" aria-labelledby="skills-section">
        {skills.map((group) => (
          <div key={group.category} className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground/70">{group.category}</h3>
            <div className="flex flex-wrap gap-1.5" aria-label={`${group.category} skills`}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
