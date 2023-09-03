export const environment = {
  production: true,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'lERzBtf7cxB37irvf5ON8ZPjyXXnYYyR',
    audience: 'https://ghost-api/',
    authorizationParams: {
      redirect_uri: 'https://m3rzh1n.github.io/Angular_Typescript_App2/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '',
  },
};
