'use strict';

const express = require('express');
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const fourOhFour = require('../middleware/404');
const fiveOhFive = require('../middleware/500');
const productsRouter = require('../routes/products-router.js')
const categoriesRouter = require('../routes/categories-router.js')

const app = express();

app.use(express.json())
app.use(timestamp);
app.use(logger);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use(fourOhFour);
app.use(fiveOhFive);


module.exports = {
  server: app,
  start: (port) =>  {
    app.listen(port, () => {
      console.log('WE GUCCI!');
    });
  }
};