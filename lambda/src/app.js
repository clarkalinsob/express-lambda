const express = require('express');
const cors = require('cors');

const app = express();

const errorHandler = require('./utils/errorHandler.utils');

const imagesApi = require('./api/images.api');
const uploadApi = require('./api/upload.api');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', imagesApi);
app.use('/upload', uploadApi);

app.use(errorHandler);

module.exports = app;
