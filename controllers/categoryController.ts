import {Request, Response} from 'express';

import checkErrors from '../utils/middlewareErrors';
import categoryService from "../services/categoryService";

const createCategory = async (req: Request, res: Response) => {
    await checkErrors(req, res);

    try {
        const category = await categoryService.createCategory(req.body);
        res.json({msg: 'Successfully created category', severity: 'success', category});
    } catch (e) {
        if (e.kind === 'ObjectId') {
            res.status(404).json({errors: [{msg: 'One of the IDs is incorrect', severity: 'error'}]});
            return;
        }

        res.status(500).send('Server Error');
    }
};

const getCategoryById = async (req: Request, res: Response) => {
    await checkErrors(req, res);

    try {
        const category = await categoryService.getCategoryById(req.params.id)
        return res.json(category)
    } catch (e) {
        if (e.kind === 'ObjectId') {
            res.status(404).json({errors: [{msg: 'One of the IDs is incorrect', severity: 'error'}]});
            return;
        }

        res.status(500).send('Server Error');
    }
};

const getAllCategories = async (req: Request, res: Response) => {
    await checkErrors(req, res);

    try {
        const categories = await categoryService.getAllCategories();
        return res.json(categories);
    } catch (e) {
        res.status(500).json(e)
    }
}

const updateCategory = async (req: Request, res: Response) => {
    await checkErrors(req, res);

    try {
        const updatedCategory = await categoryService.updateCategory(req.body);
        return res.json(updatedCategory);
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const deleteCategoryById = async (req: Request, res: Response) => {
    await checkErrors(req, res);

    try {
        const category = await categoryService.deleteCategoryById(req.params.id);
        return res.json(category)
    } catch (e) {
        res.status(500).json(e)
    }
}


export default {createCategory, getCategoryById, getAllCategories, updateCategory, deleteCategoryById};
