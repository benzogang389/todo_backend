import express from 'express';

import { check } from 'express-validator';
import taskController from '../controllers/taskController';

const router = express.Router();

// const taskIdMiddleware = [check('taskId', 'Task id is required').not().isEmpty()];
const nameMiddleware = [check('name', 'Name is required').not().isEmpty()];
const categoryIdMiddleware = [check('categoryId', 'Category ID is required').not().isEmpty()];
// const completedMiddleware = [check('completed', 'Completed Status is required').not().isEmpty()];

const createTaskMiddleware = [...nameMiddleware, ...categoryIdMiddleware];

// @route  POST api/task
// @desc   Create new task
// @access Public
router.post('/', createTaskMiddleware, taskController.createTask);

/* // @route  GET api/task/:taskId
// @desc   Get task by id
// @access Public
router.get('/:taskId', taskIdMiddleware, taskController.getTaskById);

// @route  GET api/task/
// @desc   Get all tasks
// @access Public
router.get('/', taskController.getAllTasks);

// @route  PUT api/task
// @desc   Update task
// @access Public
router.put('/:taskId', [taskIdMiddleware, nameMiddleware, categoryIdMiddleware, completedMiddleware, createdAtMiddleware], taskController.updateTask);

// @route  DELETE api/task
// @desc   Delete task by id
// @access Public
router.delete('/:taskId', taskIdMiddleware, taskController.deleteTaskById); */

export default router;
