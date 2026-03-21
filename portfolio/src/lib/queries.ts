/*
  Headless CMS note:
  A headless CMS lets this UI fetch editable content from Sanity instead of hardcoding text in components.
  Sanity is a good fit because GROQ lets us fetch only what each section needs for better performance.
*/

// GROQ: *[_type == "project"] filters by document type, | order(...) sorts results, { ... } projects selected fields.
// We only fetch UI-required fields to reduce payload size and improve render performance.
export const projectsQuery = `
  *[_type == "project"] | order(order asc) {
    title,
    slug,
    description,
    longDescription,
    tech,
    features,
    githubUrl,
    liveUrl,
    status,
    type,
    order,
    image
  }
`;

// GROQ [0] returns the first matching document when profile is modeled as a single-record content type.
// Fetching only profile fields used in UI avoids extra unused content transfer.
export const profileQuery = `
  *[_type == "profile"][0] {
    name,
    roles,
    shortBio,
    email,
    githubUrl,
    linkedinUrl,
    resumeUrl,
    openToWork,
    lookingFor
  }
`;

// GROQ order(category asc, order asc) groups display by category and keeps editor-controlled ordering.
// Field projection keeps the response small for quicker section rendering.
export const skillsQuery = `
  *[_type == "skill"] | order(category asc, order asc) {
    name,
    category,
    proficiency,
    order
  }
`;

// GROQ ordering ensures timeline cards appear in the exact sequence set in the CMS.
// Only required fields are fetched to keep data loading lean.
export const experienceQuery = `
  *[_type == "experience"] | order(order asc) {
    title,
    organization,
    startDate,
    endDate,
    description,
    type,
    order
  }
`;
