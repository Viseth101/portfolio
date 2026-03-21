/*
  Headless CMS note:
  A headless CMS editor runs as a client app while Next.js pages can stay server-rendered.
  Sanity is a good fit because the Studio can be embedded as a client component inside the app router.
*/
"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../sanity.config";

export default function StudioClient() {
  return <NextStudio config={config} />;
}
