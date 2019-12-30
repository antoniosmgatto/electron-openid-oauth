const envVariables = require('./env-variables');
const keytar = require('keytar');

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

function refreshToken() {
  return ""
};

function loadTokens(callbackURL) {
  return ""
}

async function logout() {
  await keytar.deletePassword(keystartService, keytarAccount);
  accessToken = null;
  profile = null;
  refreshToken = null;0
}

function getLogOutURL(){
  return `https://${auth0Domain}/v2/logout`;
}

module.export = {
  getAccessToken,
  getAuthenticationURL,
  getLogOutURL,
  getProfile,
  loadTokens,
  logout,
  refreshTokens,
}