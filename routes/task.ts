import express from 'express';

import { check } from 'express-validator';
import taskController from '../controllers/taskController';

const router = express.Router();

const nameMiddleware = [check('name', 'Name is required').not().isEmpty()];
const categoryIdMiddleware = [check('categoryId', 'Category ID is required').not().isEmpty()];
const completedMiddleware = [check('completed', 'Completed Status is required').not().isEmpty()];

const createUpdateTaskMiddleware = [...nameMiddleware, ...categoryIdMiddleware];

// @route  POST api/task
// @desc   Create new task
// @access Public
router.post('/', createUpdateTaskMiddleware, taskController.createTask);

// @route  GET api/task
// @desc   Get all tasks
// @access Public
router.get('/', taskController.getAllTasks);

// @route  PATCH api/task/updateComplete
// @desc   Update task complate
// @access Public
router.patch('/updateComplete/:id', completedMiddleware, taskController.updateCompleteTask);

// @route  PATCH api/task/updateContent
// @desc   Update task content
// @access Public
router.patch('/updateContent/:id', createUpdateTaskMiddleware, taskController.updateContentTask);

// @route  DELETE api/task
// @desc   Delete task by id
// @access Public
router.delete('/:id', taskController.deleteTaskById);

export default router;
