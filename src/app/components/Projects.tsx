import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  href?: string;
  label?: string;
}

function cleanTrailingComma(value: string) {
  return value.trim().replace(/,+$/, "");
}

function cleanDescriptionText(description: React.ReactNode) {
  if (typeof description === "string") {
    return cleanTrailingComma(description);
  }

  return description;
}

function getLinkDomain(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "Link";
  }
}

function ProjectLink({ href, label }: ProjectLinkProps) {
  if (!href) {
    return null;
  }

  const domain = getLinkDomain(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-medium text-slate-800 hover:text-blue-900 hover:underline"
      aria-label={`Open project link (${domain}) in new tab`}
    >
      {label || domain}
    </a>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Project tech stack"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <span className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  tags: ProjectTags;
  link?: string;
  linkLabel?: string;
}

function ProjectCard({
  title,
  description,
  tags,
  link,
  linkLabel,
}: ProjectCardProps) {
  const cleanedDescription = cleanDescriptionText(description);

  return (
    <Card
      className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      role="article"
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            <ul className="list-disc space-y-1 pl-4">
              <li>{cleanedDescription}</li>
            </ul>
          </CardDescription>
          <ProjectLink href={link} label={linkLabel} />
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
      <CardContent className="mt-auto">
        <ProjectTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="side-projects">
        Projects
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article key={project.title} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
              linkLabel={"link" in project ? project.link.label : undefined}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
