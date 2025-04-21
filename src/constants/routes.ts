const ROUTES = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password/:token",
  ARCHIVE: "/archive",
  SETTINGS: "/settings",
  COLOR_SETTINGS: "/settings/theme",
  FONT_SETTINGS: "/settings/font",
  PASSWORD_SETTINGS: "/settings/password",
  SEARCH: "/search",
  TAGS: "/tags",
  CREATE_NOTE: "/create",
  NOTE_DETAILS: "/notes/:id",
  NOTE_DETAILS_LINK: (id: string) => `/notes/${id}`,
};

export default ROUTES;
