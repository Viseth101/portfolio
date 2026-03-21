/*
  Headless CMS note:
  A headless CMS allows updating skill entries without changing source files.
  Sanity is practical here because enum-style options keep category/proficiency values consistent.
*/
import { defineField, defineType } from "sanity";

export const skillSchema = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "Frontend" },
          { title: "Backend", value: "Backend" },
          { title: "AI/ML", value: "AI/ML" },
          { title: "Security", value: "Security" },
          { title: "Tools & DevOps", value: "Tools & DevOps" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "proficiency",
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
