import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type ReferenceTags = readonly string[];

interface ReferenceLinkProps {
  title: string;
  link?: string;
}

function getPrintableLink(link: string) {
  if (link.startsWith("mailto:")) {
    return link.replace("mailto:", "");
  }

  return link.replace("https://", "").replace("www.", "").replace(/\/$/, "");
}

/**
 * Renders Reference title with optional link and status indicator
 */
function ReferenceLink({ title, link }: ReferenceLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-slate-800 transition-colors hover:text-blue-800 hover:underline"
        aria-label={`${title} Reference (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active Reference indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {getPrintableLink(link)}
      </div>
    </>
  );
}

interface ReferenceTagsProps {
  tags: ReferenceTags;
}

/**
 * Renders a list of technology tags used in the Reference
 */
function ReferenceTags({ tags }: ReferenceTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ReferenceCardProps {
  title: string;
  description: string;
  tags: ReferenceTags;
  link?: string;
}

/**
 * Card component displaying Reference information
 */
function ReferenceCard({ title, description, tags, link }: ReferenceCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ReferenceLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Reference description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ReferenceTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ReferencesProps {
  References: (typeof RESUME_DATA)["References"];
}

/**
 * Section component displaying all side References
 */
export function References({ References }: ReferencesProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="side-References">
        References
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="side-References"
      >
        {References.map((Reference) => (
          <article
            key={Reference.title}
            className="h-full" // Added h-full here
          >
            <ReferenceCard
              title={Reference.title}
              description={Reference.description}
              tags={Reference.techStack}
              link={"link" in Reference ? Reference.link.href : undefined}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
