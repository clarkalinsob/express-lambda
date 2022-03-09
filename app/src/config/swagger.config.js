const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'AWS S3, Lambda, DynamoDb App',
      version: '1.0.0',
      description: 'This is an api doc for the lambda functions',
    },
    servers: [
      {
        url: 'https://zxa5e9gz05.execute-api.us-east-1.amazonaws.com/dev',
      },
    ],
  },
  apis: ['./doc/**/*.yaml'],
};

module.exports = swaggerJSDoc(options);
