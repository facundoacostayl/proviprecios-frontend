const endpoints = {
  DEV: {
    url: "http://localhost:5000",
    active: false,
  },
  PROD: {
    url: "https://edendesk.proviamoalmacengourmet.com",
    active: true,
  },
};

const currentEndpoint = endpoints.PROD.active
  ? endpoints.PROD.url
  : endpoints.DEV.url;

export { currentEndpoint };
