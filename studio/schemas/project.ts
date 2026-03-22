/*
  Sanity schema - no longer used
  Project data now comes from projects array in src/data/portfolio-data.ts
*/

export const projectSchema = {};
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
