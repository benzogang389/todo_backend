import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

import {TaskInterface} from './types';

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});

export const Task = mongoose.model<TaskInterface>('task', TaskSchema);

export default Task;
