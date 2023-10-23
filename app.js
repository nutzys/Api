const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

const feedRoutes = require('./routes/feed');

app.use(cors());
app.use(bodyParser.json());

app.use('/feed', feedRoutes.router);

app.listen(8080);