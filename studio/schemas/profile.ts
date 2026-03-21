/*
  Headless CMS note:
  A headless CMS centralizes profile content so badges, bio, and links can change instantly.
  Sanity is ideal for portfolios because one profile document can drive multiple UI sections.
*/
import { defineField, defineType } from "sanity";

export const profileSchema = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "roles", title: "Roles", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "shortBio", title: "Short Bio", type: "text", rows: 4 }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "resumeUrl", title: "Resume URL", type: "url" }),
    defineField({ name: "openToWork", title: "Open To Work", type: "boolean", initialValue: true }),
    defineField({ name: "lookingFor", title: "Looking For", type: "string" }),
  ],
});
