/*
  Headless CMS note:
  A headless CMS uses schema registration to tell the Studio which content types exist.
  Sanity is a strong fit because registering schemas in one array keeps document modeling explicit and maintainable.
*/
import { experienceSchema } from "./experience";
import { profileSchema } from "./profile";
import { projectSchema } from "./project";
import { skillSchema } from "./skill";

// Sanity reads this array at startup and builds the editing UI for each registered document type.
export const schemaTypes = [projectSchema, skillSchema, profileSchema, experienceSchema];
