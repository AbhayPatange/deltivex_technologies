export const COMPANY = {
  name: "Deltivex Technologies",
  shortName: "Deltivex",
  tagline: "Building software that moves businesses forward.",
  // TODO: replace with real contact details before launch.
  email: "info@deltivex.com",
  location: "Karnataka, India",
};

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  work: "/work",
  projectDetails: (slug) => `/work/${slug}`,
  contact: "/contact",
};
