const fs = require('fs');

const s3 = require('../config/s3.config');
const { awsS3 } = require('../config');
const { bucketName } = awsS3;

class S3Service {
  static uploadFile(file) {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename.trim(),
    };

    return s3.upload(uploadParams).promise();
  }
}

module.exports = S3Service;
