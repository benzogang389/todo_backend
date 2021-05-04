import { Request, Response } from 'express';

import checkErrors from '../utils/middlewareErrors';
import categoryService from '../services/categoryService';

const createCategory = async (req: Request, res: Response) => {
  checkErrors(req, res);

  try {
    const { name } = req.body;

    await categoryService.createCategory(name);

    res.json({ msg: 'Successfully created category', severity: 'success' });
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  checkErrors(req, res);

  try {
    const categories = await categoryService.getAllCategories();

    res.json(categories);
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

const updateCategory = async (req: Request, res: Response) => {
  checkErrors(req, res);

  try {
    const { id } = req.params;
    const { name } = req.body;

    await categoryService.updateCategory(id, name);

    res.json({ msg: 'Successfully updated category', severity: 'success' });
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

const deleteCategoryById = async (req: Request, res: Response) => {
  checkErrors(req, res);

  try {
    const { id } = req.params;

    await categoryService.deleteCategoryById(id);

    res.json({ msg: 'Successfully deleted category', severity: 'success' });
  } catch (e) {
    res.status(500).send(e.message || 'Server Error');
  }
};

export default { createCategory, getAllCategories, updateCategory, deleteCategoryById };
