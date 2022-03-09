const AWS = require('aws-sdk');
const { awsDynamo } = require('./config');
const { region, accessKeyId, secretAccessKey } = awsDynamo;

AWS.config.update({
  region,
  accessKeyId,
  secretAccessKey,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'images-db';

const addImage = async (image) => {
  const params = {
    TableName: TABLE_NAME,
    Item: image,
  };
  return await dynamoClient.put(params).promise;
};

module.exports = {
  addImage,
};
