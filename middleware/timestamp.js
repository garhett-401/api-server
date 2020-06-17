'use strict';

const timeStamp = function (req, res, next) {
  const x = new Date(Date.now());
  req.timeStamp = x;
  next();
}

module.exports = timeStamp;