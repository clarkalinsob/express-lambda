const errorHandler = (err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    error: {
      ...err,
      message: err.message || 'Internal Server Error',
      statusCode: err.statusCode || 500,
    },
  });
};

module.exports = errorHandler;
