/*
  Sanity schema - no longer used
  Skill data now comes from skills array in src/data/portfolio-data.ts
*/

export const skillSchema = {};
      title: "Proficiency",
      type: "string",
      options: {
        list: [
          { title: "Proficient", value: "proficient" },
          { title: "Learning", value: "learning" },
        ],
      },
      initialValue: "proficient",
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
