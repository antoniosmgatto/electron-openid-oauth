const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const envVariables = require('./env-variables');

const app = express();

// app.use(jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestPerMinute: 5,
//     jwksUri: `https://${envVariables.auth0Domain}/.well-known/jwks.json`
//   }),
//   audience: envVariables.apiIdentidier,
//   issuer: `https://${envVariables.auth0Domain}/`,
//   algorithms: ['RS256']
// }));

app.get('private', (req, res) => res.send('Only authenticaded users are allowed'))

app.listen(3000, () => console.log('App listening on port 3000'));