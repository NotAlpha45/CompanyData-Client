export const AppRoutesUI = {
  Root: "/",
  RegBrief: {
    Root: () => `${AppRoutesUI.Root}`,
  },
  Auth: {
    Root: () => `${AppRoutesUI.Root}auth/`,
    Login: {
      Path: () => `${AppRoutesUI.Auth.Root()}login/`,
      Route: "login",
    },
  },
  NotFound: {
    Path: () => AppRoutesUI.Root + "404/",
    Route: "404",
  },
};
