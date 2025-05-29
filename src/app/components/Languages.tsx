import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Languages = readonly string[];

interface LanguagesListProps {
  Languages: Languages;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function LanguagesList({ Languages, className }: LanguagesListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of Languages"
    >
      {Languages.map((language) => (
        <li key={language}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${language}`}>
            {language}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface LanguagesProps {
  languages: Languages;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Languages({ languages, className }: LanguagesProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="languages-section">
        Languages
      </h2>
      <LanguagesList Languages={languages} aria-labelledby="languages-section" />
    </Section>
  );
}
