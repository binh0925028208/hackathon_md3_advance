import express, { Request, Response } from "express";
import CategoryService from "../service/category.service";

const categoryController = express.Router();
const categoryService = new CategoryService();

categoryController.get("/", async (req: Request, res: Response) => {
  const result = await categoryService.getAllCategory();
  res.status(200).json(result);
});

categoryController.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await categoryService.getOneCategory(id);
  res.status(200).json(result);
});

categoryController.post("/", async (req: Request, res: Response) => {
  try {
    const newCategory = {
      id: req.body.id,
      categoryName: req.body.categoryName,
    };
    await categoryService.createCategory(newCategory);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra" });
    console.log(error);
  }
});

export default categoryController;
