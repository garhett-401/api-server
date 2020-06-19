'use strict';


const categoriesSchema = require('../lib/models/categories/categories-schema.js');
const productsSchema = require('../lib/models/products/products-schema.js');
const Mongo = require('../lib/models/mongo.js');


function getModel(req, res, next) {
  let model = req.params.model;

  switch (model)  {
    case 'categories':
      req.model = new Mongo(categoriesSchema);
      next();
      break;
    
    case 'products':
      req.model = new Mongo(productsSchema);
      next();
      break;
    
    default:
      next('Invalid Model... Fix it!');
      break;
  }
}

module.exports = getModel;