/**
 * Personalize for deploy: name, role, and social links appear in the footer
 * and case study. Set NEXT_PUBLIC_SITE_URL in Vercel for correct OG URLs.
 */
export const portfolio = {
  displayName: "Andres Chacon",
  role: "Designer & front-end developer",
  /** One line for credit strip and case study hero */
  tagline:
    "Product-minded UI with attention to typography, accessibility, and performance.",
  location: "Calgary, AB",
  email: "mailto:acchacon04@gmail.com",
  links: {
    github: "https://github.com/Achac04",
    linkedin: "https://www.linkedin.com/in/acchacon",
    /** Optional second portfolio site; hide UI when null */
    personalSite: null as string | null,
  },
};
