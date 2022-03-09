const router = require('express').Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const createError = require('http-errors');

const DynamoService = require('../services/dynamo.service');
const s3 = require('../config/s3.config');
const { awsS3 } = require('../config');
const { bucketName } = awsS3;

const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
  }),
});

router.post('/', upload.single('image'), async (req, res, next) => {
  try {
    const { file } = req;

    if (!file) throw createError.UnprocessableEntity();

    const { key, location } = file;
    const data = {
      id: key,
      location,
    };

    await DynamoService.addImage(data);

    return res.status(200).json({ data });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
