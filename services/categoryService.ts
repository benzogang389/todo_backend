import Category from '../models/Category/Category';
import Task from '../models/Task/Task';

const createCategory = async (name: string) => {
  const category = new Category({ name });

  await category.save();
};

const getAllCategories = async () => {
  return Category.find();
};

const updateCategory = async (id: string, name: string) => {
  const category = await Category.findById(id);

  if (!category) {
    throw new Error('Category not found');
  }

  return Category.findByIdAndUpdate(id, { name });
};

const deleteCategoryById = async (id: string) => {
  const category = await Category.findById(id);

  if (!category) {
    throw new Error('Category not found');
  }

  return Promise.all([Category.findByIdAndDelete(id), Task.updateMany({ categoryId: id }, { $set: { categoryId: '' } })]);
};

export default { createCategory, getAllCategories, updateCategory, deleteCategoryById };
