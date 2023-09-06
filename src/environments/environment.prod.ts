export const environment = {
  production: true,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'MsRerHg8873JiTXZzpwxkNKrjBoEi3p3',
    authorizationParams: {
      redirect_uri: 'http://localhost:4020',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '',
  },
};

