const express = require('express');

const app = express();

app.use();

app.get('private', (req, res) => res.send('Only authenticaded users are allowed'))

app.listen(3000, () => console.log('App running on port 3000'));