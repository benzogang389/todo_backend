import Task from '../models/Task/Task';

const createTask = async (name: string, categoryId: string) => {
  const task = new Task({ name, categoryId, completed: false });

  await task.save();
};

const getAllTasks = async () => {
  return Task.find();
};

const updateCompleteTask = async (id: string, completed: boolean) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new Error('Task not found');
  }

  return Task.findByIdAndUpdate(id, { completed });
};

const updateContentTask = async (id: string, name: string, categoryId: string) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new Error('Task not found');
  }

  return Task.findByIdAndUpdate(id, { name, categoryId });
};

const deleteTaskById = async (id: string) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new Error('Task not found');
  }

  return Task.findByIdAndDelete(id);
};

export default { createTask, getAllTasks, updateCompleteTask, updateContentTask, deleteTaskById };
