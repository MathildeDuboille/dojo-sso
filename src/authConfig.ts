const oktaAuthConfig = {
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

export default oktaAuthConfig;
