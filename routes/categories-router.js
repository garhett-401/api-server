'use strict';

const express = require('express');
const router = express.Router();

const CategoryModel = require('../lib/models/categories/categories-collection.js')

const Category = new CategoryModel();

router.get('/', handleGetAll)
router.post('/', handlePost)
router.get('/:id', handleGetId)
router.put('/:id', handlePut)
router.delete('/:id', handleDelete)

async function handleGetAll(req, res) {
  const results = await Category.get();
  res.send(results)
}

async function handlePost(req, res) {
  const results = await Category.create(req.body)
  res.send('This was saved')
}

async function handleGetId (req, res) {
  const results = await Category.get(req.params.id)
  res.send(results)  
}

async function handlePut (req, res) {
  const results = await Category.update(req.params.id, req.body)
  res.send(`Updated ${req.params.id}`)
}

async function handleDelete(req, res) {
  const results = await Category.delete(req.params.id)
  res.send(`Category Id: ${req.params.id} has been deleted`) 
}


module.exports = router