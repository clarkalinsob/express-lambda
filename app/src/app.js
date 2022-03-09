const express = require('express');
const swaggerUI = require('swagger-ui-express');

const swaggerDocs = require('./config/swagger.config');

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
