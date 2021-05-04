import express from 'express';
import { check } from 'express-validator';

import categoryController from '../controllers/categoryController';

const router = express.Router();

const nameMiddleware = [check('name', 'Name is required').not().isEmpty()];

// @route  POST api/category
// @desc   Create new category
// @access Public
router.post('/', nameMiddleware, categoryController.createCategory);

// @route  GET api/category/
// @desc   Get all categories
// @access Public
router.get('/', categoryController.getAllCategories);

// @route  PATCH api/category
// @desc   Update category by id
// @access Public
router.patch('/:id', nameMiddleware, categoryController.updateCategory);

// @route  DELETE api/category
// @desc   Delete category by id
// @access Public
router.delete('/:id', categoryController.deleteCategoryById);

export default router;
