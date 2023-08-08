export const AppRoutesUI = {
  Root: "/",

  CompanyData: {
    Root: () => `${AppRoutesUI.Root}company-data/`,

    CompanyDataChart: {
      Root: () => `company-chart/`,
      Path: () =>
        `${AppRoutesUI.CompanyData.Root()}${AppRoutesUI.CompanyData.CompanyDataChart.Root()}`,
    },

    CompanyDataGraph: {
      Root: () => `company-graph/`,
      Path: () =>
        `${AppRoutesUI.CompanyData.Root()}${AppRoutesUI.CompanyData.CompanyDataGraph.Root()}`,
    },
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
