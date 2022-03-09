const router = require('express').Router();

const DynamoService = require('../services/dynamo.service');

router.get('/', async (req, res, next) => {
  try {
    const { Items, Count } = await DynamoService.getImages();
    const data = {
      data: Items,
      count: Count,
    };

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

router.get('/:key', async (req, res, next) => {
  try {
    const { key } = req.params;

    const { Item } = await DynamoService.getImage(key);

    const data = {
      ...Item,
    };

    return res.status(200).json({ data });
  } catch (error) {
    return next(error);
  }
});

router.delete('/:key', async (req, res, next) => {
  try {
    const { key } = req.params;

    await DynamoService.deleteImage(key);

    const data = {
      message: 'Successfully deleted',
    };

    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
