const envVariables = require('./env-variables');
const keytar = require('keytar');
const os = require('os');
const url = require('url');
const jwtDecode = require('jwt-decode');

const { apitIdentifier, auth0Domain, clientId } = envVariables

const redirectUri = 'file://callback';

const keystartService = 'electron-openid-oauth';
const keytarAccount = os.userInfo().username;

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
  return new Promise(async (resolve, reject) => {
    const refreshToken = await keytar.getPassword(keystartService, keytarAccount)
    if (!refreshToken) return reject();

    const requestOptions = {
      method: 'POST',
      url: `https://${auth0Domain}/oauth/token`,
      headers: {'content-type': 'application/json'},
      body: {
        grant_type: 'refresh_token',
        client_id: clientId,
        refresh_token: refreshToken,
      },
      json: true,
    };

    request(requestOptions, async function (error, response, body) {
      if (error || body.error) {
        await logout();
        return reject(error || body.error);
      }

      accessToken = body.access_token;
      profile = jwtDecode(vody.id_token)

      resolve();
    });
  })
};

function loadTokens(callbackURL) {
  return new Promise((resolve, reject) => {
    const urlParts = url.parse(callbackURL, true);
    const query = urlParts.query;
  });
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