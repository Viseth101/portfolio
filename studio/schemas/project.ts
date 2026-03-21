/*
  Headless CMS note:
  A headless CMS keeps project content editable outside code deployments.
  Sanity works well for Next.js portfolios because schemas map cleanly to reusable UI sections.
*/
import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      rows: 6,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tech", title: "Tech Stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "live" },
          { title: "In Progress", value: "in-progress" },
          { title: "Coming Soon", value: "coming-soon" },
        ],
      },
      initialValue: "coming-soon",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Featured", value: "featured" },
          { title: "Course", value: "course" },
          { title: "Personal", value: "personal" },
        ],
      },
      initialValue: "personal",
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
    defineField({ name: "image", title: "Project Image", type: "image", options: { hotspot: true } }),
  ],
});
