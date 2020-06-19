'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {type: String, require: true},
  category: {type: String, require: true},
  price: {type: String, require: true},
  description: {type: String, require: true},
});

module.exports = mongoose.model('product', schema);