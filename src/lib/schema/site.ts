/** Shared @id targets for JSON-LD @graph (site-wide). */
export const SITE_ORIGIN = "https://taipanconsulting.com";

export const schemaIds = {
  website: `${SITE_ORIGIN}/#website`,
  organization: `${SITE_ORIGIN}/#organization`,
} as const;

export function pageFragmentUrl(pathname: string, fragment: string): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${SITE_ORIGIN}${path}#${fragment}`;
}
