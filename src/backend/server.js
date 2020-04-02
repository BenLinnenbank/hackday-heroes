const express = require('express');
const bodyParser = require('body-parser');
const { character } = require('./characterController');
const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.post('/api/characters', character);

console.log('Listening on port 8000!');
app.listen(8000);
