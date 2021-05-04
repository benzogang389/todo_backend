const express = require('express');
import {check} from 'express-validator';
import categoryController from "../controllers/categoryController";

const router = express.Router();

const categoryIdMiddleware = [check('categoryId', 'Category id is required').not().isEmpty()];
const nameMiddleware = [check('name', 'Name is required').not().isEmpty()];
const createdAtMiddleware = [check('createdAt', 'Created At date id is required').not().isEmpty()];

// @route  POST api/category
// @desc   Create new category
// @access Public
router.post('/', [nameMiddleware, createdAtMiddleware], categoryController.createCategory);

// @TO-DO: need to improve name of id !!!
// @route  GET api/category/:categoryId
// @desc   Get category by id
// @access Public
router.get('/:categoryId', categoryIdMiddleware, categoryController.getCategoryById);

// @route  PATCH api/category/
// @desc   Get all categories
// @access Public
router.get('/', categoryController.getAllCategories);

// @route  PUT api/category
// @desc   Update category by id
// @access Public
router.put('/:categoryId', [categoryIdMiddleware, nameMiddleware, createdAtMiddleware], categoryController.updateCategory);

// @route  DELETE api/category
// @desc   Delete category by id
// @access Public
router.delete('/:categoryId', categoryIdMiddleware, categoryController.deleteCategoryById);

export default router;
