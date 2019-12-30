const envVariables = require('./env-variables');

const { apitIdentifier, auth0Domain, clientId } = envVariables

const redirectUri = 'file://callback';

let accessToken = null;
let profile = null;
let refreshToken = null;

function getAccessToken() {
  return accessToken;
}

function getProfile() {
  return profile;
}

function getAuthenticationURL() {
  return 'https://' + auth0Domain + '/authorize?' +
    'audience=' + apitIdentifier + '&' +
    'scope=openid profile offline_access&' +
    'response_type=code&' +
    'client_id' + clientId + '&' +
    'redirect_uri=' + redirectUri;
}