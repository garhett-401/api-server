'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {type: String, require: true}
});

module.exports = mongoose.model('categories', schema);


