// Helpers for reading content managed by Pages CMS (see /.pages.yml and /content).

/**
 * Pages CMS writes media paths using the media `output` prefix (e.g. "/images/zones/foo.webp").
 * The site has always referenced media with relative paths (e.g. "images/zones/foo.webp"), so
 * strip the leading slash to keep rendered output identical. ExportedImage (next-image-export-optimizer)
 * normalizes both forms to the same optimized URLs.
 */
export function mediaPath(value: string): string;
export function mediaPath(value: string | null | undefined): string | undefined;
export function mediaPath(value: string | null | undefined): string | undefined {
  const v = optionalString(value);
  return v?.replace(/^\/+/, "");
}

/** Pages CMS may save cleared optional fields as "" or null; treat those as absent. */
export function optionalString(value: string | null | undefined): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

/** Pages CMS may save cleared optional lists as []; treat those as absent. */
export function optionalList<T>(value: T[] | null | undefined): T[] | undefined {
  return Array.isArray(value) && value.length > 0 ? value : undefined;
}

export interface WebpackContext {
  keys(): string[];
  (id: string): unknown;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Require {
      /** webpack's require.context; must be called with literal arguments so it can be statically analyzed. */
      context(directory: string, useSubdirectories: boolean, regExp: RegExp): WebpackContext;
    }
  }
}

/**
 * Load every JSON file in a Pages CMS collection folder, given a `require.context(...)` for it.
 * Bundling the files via webpack works in both server and client components (no fs access at runtime).
 */
export function loadCollection<T>(context: WebpackContext): T[] {
  return context
    .keys()
    .filter((key) => key.startsWith("./")) // some setups also list non-relative duplicates of each key
    .sort()
    .map((key) => context(key) as T);
}
