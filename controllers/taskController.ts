import { Request, Response } from 'express';

import checkErrors from '../utils/middlewareErrors';
import taskService from '../services/taskService';

const createTask = async (req: Request, res: Response) => {
  checkErrors(req, res);

  try {
    const { name, categoryId } = req.body;

    await taskService.createTask(name, categoryId);

    res.json({ msg: 'Successfully created task', severity: 'success' });
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

/* const getTaskById = async (req: Request, res: Response) => {
  await checkErrors(req, res);

  try {
    const task = await taskService.getTaskById(req.params.id);
    return res.json(task);
  } catch (e) {
    if (e.kind === 'ObjectId') {
      res.status(404).json({ errors: [{ msg: 'One of the IDs is incorrect', severity: 'error' }] });
      return;
    }

    res.status(500).send('Server Error');
  }
};

const getAllTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    return res.json(tasks);
  } catch (e) {
    res.status(500).json(e);
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const updatedTask = await taskService.updateTask(req.body);
    return res.json(updatedTask);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const deleteTaskById = async (req: Request, res: Response) => {
  try {
    const task = await taskService.deleteTaskById(req.params.id);
    return res.json(task);
  } catch (e) {
    res.status(500).json(e);
  }
}; */

export default { createTask /* getTaskById, getAllTasks, updateTask, deleteTaskById */ };
