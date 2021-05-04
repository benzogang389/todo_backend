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

const getAllTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.json(tasks);
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

const updateCompleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    await taskService.updateCompleteTask(id, completed);

    res.json({ msg: 'Successfully updated tasks', severity: 'success' });
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};
const updateContentTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, categoryId } = req.body;

    await taskService.updateContentTask(id, name, categoryId);

    res.json({ msg: 'Successfully updated tasks', severity: 'success' });
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

const deleteTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await taskService.deleteTaskById(id);

    res.json({ msg: 'Successfully deleted tasks', severity: 'success' });
  } catch (e) {
    res.status(500).json(e);
  }
};

export default { createTask, getAllTasks, updateCompleteTask, updateContentTask, deleteTaskById };
