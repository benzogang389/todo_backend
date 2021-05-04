import { Document } from 'mongoose';

export interface TaskInterface extends Document {
  name: string;
  categoryId: string;
  completed: boolean;
  createdAt: Date;
}
