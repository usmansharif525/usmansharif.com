import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "work" | "writing";

export type WorkFrontmatter = {
  title: string;
  summary: string;
  category: "software" | "marketing" | "both";
  client: string;
  year: string;
  tags: string[];
  featured?: boolean;
  metrics?: { label: string; value: string }[];
} & Record<string, unknown>;

export type WritingFrontmatter = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  featured?: boolean;
} & Record<string, unknown>;

export type ContentItem<T> = {
  slug: string;
  frontmatter: T;
  content: string;
};

function getContentDir(type: ContentType) {
  return path.join(contentDirectory, type);
}

export function getSlugs(type: ContentType): string[] {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentBySlug<T extends Record<string, unknown>>(
  type: ContentType,
  slug: string,
): ContentItem<T> {
  const filePath = path.join(getContentDir(type), `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    frontmatter: data as T,
    content,
  };
}

export function getAllContent<T extends Record<string, unknown>>(
  type: ContentType,
): ContentItem<T>[] {
  const slugs = getSlugs(type);
  return slugs
    .map((slug) => getContentBySlug<T>(type, slug))
    .sort((a, b) => {
      const aFm = a.frontmatter as Record<string, unknown>;
      const bFm = b.frontmatter as Record<string, unknown>;
      const aDate =
        typeof aFm.date === "string"
          ? aFm.date
          : typeof aFm.year === "string"
            ? aFm.year
            : "";
      const bDate =
        typeof bFm.date === "string"
          ? bFm.date
          : typeof bFm.year === "string"
            ? bFm.year
            : "";
      return bDate.localeCompare(aDate);
    });
}

export function getFeaturedWork() {
  return getAllContent<WorkFrontmatter>("work").filter(
    (item) => item.frontmatter.featured,
  );
}

export function getFeaturedWriting() {
  return getAllContent<WritingFrontmatter>("writing").filter(
    (item) => item.frontmatter.featured,
  );
}

export function getLatestWriting(limit = 3) {
  return getAllContent<WritingFrontmatter>("writing").slice(0, limit);
}
