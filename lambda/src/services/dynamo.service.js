const AWS = require('aws-sdk');
const createError = require('http-errors');

const { awsDynamo } = require('../config');
const { region, accessKeyId, secretAccessKey } = awsDynamo;

AWS.config.update({
  region,
  accessKeyId,
  secretAccessKey,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'images-db';

class DynamoService {
  static async getImages() {
    try {
      const params = {
        TableName: TABLE_NAME,
      };

      const images = await dynamoClient.scan(params).promise();

      return images;
    } catch (error) {
      throw createError(error);
    }
  }

  static async getImage(id) {
    try {
      const params = {
        TableName: TABLE_NAME,
        Key: {
          id,
        },
      };

      return await dynamoClient.get(params).promise();
    } catch (error) {
      throw createError(error);
    }
  }

  static async addImage(image) {
    try {
      const params = {
        TableName: TABLE_NAME,
        Item: image,
      };

      return await dynamoClient.put(params).promise();
    } catch (error) {
      throw createError(error);
    }
  }

  static async deleteImage(id) {
    try {
      const params = {
        TableName: TABLE_NAME,
        Key: {
          id,
        },
      };

      return await dynamoClient.delete(params).promise();
    } catch (error) {
      throw createError(error);
    }
  }
}

module.exports = DynamoService;
