/*
  Headless CMS note:
  A headless CMS separates content management from frontend rendering.
  Sanity works well with Next.js because this config plugs directly into embedded Studio and typed client queries.
*/
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./studio/schemas";

export default defineConfig({
  name: "default",
  title: "Portfolio CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_actual_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
