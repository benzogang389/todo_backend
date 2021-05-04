import { Document } from 'mongoose';

export interface TaskInterface extends Document {
  categoryId: string;
  completed: boolean;
  createdAt: Date;
}
