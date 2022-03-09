const S3 = require('aws-sdk/clients/s3');
const { awsS3 } = require('.');
const { region, accessKeyId, secretAccessKey } = awsS3;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

module.exports = s3;
