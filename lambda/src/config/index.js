module.exports = {
  awsS3: {
    bucketName: process.env.BUCKET_NAME,
    region: process.env.BUCKET_REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  awsDynamo: {
    region: process.env.DYN_REGION,
    accessKeyId: process.env.DYN_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYN_SECRET_ACCESS_KEY,
  },
};
