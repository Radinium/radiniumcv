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

type PublicationTags = readonly string[];

function cleanTrailingComma(value: string) {
  return value.trim().replace(/,+$/, "");
}

function getLinkDomain(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "Link";
  }
}

interface PublicationLinkProps {
  href?: string;
}

function PublicationLink({ href }: PublicationLinkProps) {
  if (!href) {
    return null;
  }

  const domain = getLinkDomain(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-medium text-slate-800 hover:text-blue-800 hover:underline transition-colors"
      aria-label={`Open publication link (${domain}) in new tab`}
    >
      {domain}
    </a>
  );
}

interface PublicationTagsProps {
  tags: PublicationTags;
}

function PublicationTags({ tags }: PublicationTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-2 flex list-none flex-wrap gap-1 p-0" aria-label="Tech stack">
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

interface PublicationCardProps {
  title: string;
  description: string;
  tags: PublicationTags;
  link?: string;
}

function PublicationCard({ title, description, tags, link }: PublicationCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden border p-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Publication description"
          >
            {cleanTrailingComma(description)}
          </CardDescription>
          <PublicationLink href={link} />
          {link && (
            <div
              className="hidden font-mono text-xs underline print:visible"
              aria-hidden="true"
            >
              {getLinkDomain(link)}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <PublicationTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface PublicationsProps {
  Publications: (typeof RESUME_DATA)["Publications"];
}

export function Publications({ Publications }: PublicationsProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="side-Publications">
        Publications
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="side-Publications"
      >
        {Publications.map((publication) => (
          <article key={publication.title} className="h-full">
            <PublicationCard
              title={publication.title}
              description={publication.description}
              tags={publication.techStack}
              link={"link" in publication ? publication.link.href : undefined}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
