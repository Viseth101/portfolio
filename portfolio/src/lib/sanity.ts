/*
  Headless CMS note:
  A headless CMS stores content separately from frontend code, so you can edit portfolio data in a web UI.
  Sanity fits Next.js portfolios well because it has fast APIs, GROQ queries, and a flexible schema model.
*/
import imageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId || !dataset || !apiVersion) {
  throw new Error(
    "Missing Sanity env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and NEXT_PUBLIC_SANITY_API_VERSION."
  );
}

// createClient connects your app to the Sanity content API.
// We keep sensitive or environment-specific values in env vars so the code can move between dev/staging/prod safely.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // useCdn means read requests can use Sanity's edge cache in production for faster page loads.
  // In development we disable CDN so edits show up immediately.
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);
type SanityImageSource = Parameters<typeof builder.image>[0];

// Converts a Sanity image field into a usable image URL.
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ is Sanity's query language (similar to SQL, but designed for JSON documents and nested content).
// This helper centralizes typed fetching so each page can request data with proper TypeScript inference.
export async function sanityFetch<T>(query: string, params: QueryParams = {}): Promise<T> {
  return client.fetch<T>(query, params);
}
