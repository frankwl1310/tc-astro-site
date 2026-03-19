import { schemaIds, SITE_ORIGIN, pageFragmentUrl } from "./site";

const defaultAuthor = {
  "@type": "Person" as const,
  name: "Frank Welsch-Lehmann",
  url: "https://www.linkedin.com/in/frankwelschlehmann/",
};

export interface GuideArticleSchemaInput {
  pathname: string;
  title: string;
  description: string;
  datePublished: Date;
  dateModified?: Date;
  imageUrl?: string;
  author?: { name: string; url?: string };
}

/**
 * Single JSON-LD script: @graph with WebSite, Organization, WebPage, TechArticle, BreadcrumbList.
 * TechArticle fits technical HubSpot guides; avoids deprecated HowTo rich-result type.
 */
export function buildGuideArticleSchema(input: GuideArticleSchemaInput): object {
  const {
    pathname,
    title,
    description,
    datePublished,
    dateModified,
    imageUrl,
    author: authorInput,
  } = input;

  const canonicalUrl = `${SITE_ORIGIN}${pathname.endsWith("/") ? pathname : `${pathname}/`}`;
  const author = authorInput
    ? {
        "@type": "Person" as const,
        name: authorInput.name,
        ...(authorInput.url ? { url: authorInput.url } : {}),
      }
    : defaultAuthor;

  const published = datePublished.toISOString();
  const modified = (dateModified ?? datePublished).toISOString();

  const idWebPage = pageFragmentUrl(pathname, "webpage");
  const idArticle = pageFragmentUrl(pathname, "article");
  const idBreadcrumb = pageFragmentUrl(pathname, "breadcrumb");

  const graph: object[] = [
    {
      "@type": "WebSite",
      "@id": schemaIds.website,
      name: "Taipan Consulting",
      url: `${SITE_ORIGIN}/`,
      inLanguage: "de-DE",
      publisher: { "@id": schemaIds.organization },
    },
    {
      "@type": "Organization",
      "@id": schemaIds.organization,
      name: "Taipan Consulting GmbH",
      url: SITE_ORIGIN,
    },
    {
      "@type": "WebPage",
      "@id": idWebPage,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { "@id": schemaIds.website },
      inLanguage: "de-DE",
      breadcrumb: { "@id": idBreadcrumb },
      mainEntity: { "@id": idArticle },
    },
    {
      "@type": "TechArticle",
      "@id": idArticle,
      headline: title,
      name: title,
      description,
      datePublished: published,
      dateModified: modified,
      author,
      publisher: { "@id": schemaIds.organization },
      mainEntityOfPage: { "@id": idWebPage },
      inLanguage: "de-DE",
      ...(imageUrl
        ? {
            image: {
              "@type": "ImageObject",
              url: imageUrl,
            },
          }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": idBreadcrumb,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: `${SITE_ORIGIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "HubSpot How-to",
          item: `${SITE_ORIGIN}/hubspot-how-to/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function resolveAbsoluteImageUrl(site: URL | undefined, heroImage: string | undefined): string | undefined {
  if (!heroImage?.trim()) return undefined;
  const trimmed = heroImage.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (!site) return undefined;
  try {
    return new URL(trimmed.startsWith("/") ? trimmed : `/${trimmed}`, site).href;
  } catch {
    return undefined;
  }
}
