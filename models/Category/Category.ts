import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

import { CategoryInterface } from './types';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

export const Category = mongoose.model<CategoryInterface>('category', CategorySchema);

export default Category;
