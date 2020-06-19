'use strict';

const express = require('express');
const router = express.Router();

const ProductModel = require('../lib/models/products/products-collections.js')

const Product = new ProductModel();

router.get('/', handleGetAll)
router.post('/', handlePost)
router.get('/:id', handleGetId)
router.put('/:id', handlePut)
router.delete('/:id', handleDelete)

async function handleGetAll(req, res) {
  const results = await Product.get();
  res.send(results)
}

async function handlePost(req, res) {
  const results = await Product.create(req.body)
  res.send('This was saved')
}

async function handleGetId (req, res) {
  const results = await Product.get(req.params.id)
  res.send(results)  
}

async function handlePut (req, res) {
  const results = await Product.update(req.params.id, req.body)
  res.send(`Updated ${req.params.id}`)
}

async function handleDelete(req, res) {
  const results = await Product.delete(req.params.id)
  res.send(`Product Id: ${req.params.id} has been deleted`) 
}


module.exports = router