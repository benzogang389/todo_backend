import Task from '../models/Task/Task';

const createTask = async (name: string, categoryId: string) => {
  const task = new Task({ name, categoryId, completed: false });

  await task.save();
};

/* const getTaskById = async (id: string) => {
    return Task.findById(id);
}

const getAllTasks = async () => {
    return Task.find();
}

const updateTask = async (task: TaskInterface) => {
    if (!task._id) {
        throw new Error("ID is not defined")
    }
    return Task.findByIdAndUpdate(task._id, task);
}

const deleteTaskById = async (id: string) => {
    if (!id) {
        throw new Error("ID is not defined")
    }
    return Task.findByIdAndDelete(id);
} */

export default { createTask /* getTaskById, getAllTasks, updateTask, deleteTaskById */ };
