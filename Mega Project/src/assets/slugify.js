// utils/slugify.js
export const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumerics with hyphen
      .replace(/^-+|-+$/g, '')     // Trim leading/trailing hyphens
      .slice(0, 36);               // Enforce 36-char limit (Appwrite requirement)
  };