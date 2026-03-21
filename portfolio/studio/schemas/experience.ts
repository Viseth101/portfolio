/*
  Headless CMS note:
  A headless CMS lets timeline entries be updated from an admin UI rather than code commits.
  Sanity fits because structured date/type fields are easy to query and sort for timeline components.
*/
import { defineField, defineType } from "sanity";

export const experienceSchema = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "organization", title: "Organization", type: "string" }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "endDate", title: "End Date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "education" },
          { title: "Work", value: "work" },
          { title: "Project", value: "project" },
        ],
      },
      initialValue: "work",
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
