import {CategoryInterface} from "../models/Category/types";
import Category from "../models/Category/Category";

const createCategory = async (category: CategoryInterface) => {
    return await Category.create(category);
}

const getCategoryById = async (id: string) => {
    return Category.findById(id);
}

const getAllCategories = async () => {
    return Category.find();
}

const updateCategory = async (category: CategoryInterface) => {
    if (!category._id) {
        throw new Error("ID is not defined")
    }
    return Category.findByIdAndUpdate(category._id, category);
}

const deleteCategoryById = async (id: string) => {
    return Category.findByIdAndDelete(id);
}


export default {createCategory, getCategoryById, getAllCategories, updateCategory, deleteCategoryById};