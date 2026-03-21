/*
  Headless CMS note:
  A headless CMS provides a dedicated editing app while your Next.js frontend consumes content via API.
  Sanity is a good fit because the full editor can be embedded directly at /studio for simple content workflows.
*/
import type { Metadata } from "next";
import StudioClient from "../StudioClient";

export const metadata: Metadata = {
  title: "Studio | Portfolio CMS",
  robots: {
    index: false,
    follow: false,
  },
};

// This route embeds the full Sanity editor so content can be managed at yoursite.com/studio after login.
export default function StudioPage() {
  return <StudioClient />;
}
