import { Request, Response } from "express";
import CategoryRepository from "../repositories/category.repository";

class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async getAllCategory() {
    return await this.categoryRepository.getAllCategory();
  }
  async getOneCategory(id: number) {
    return await this.categoryRepository.getOneCategory(id);
  }
  async createCategory(formRequest: any) {
    await this.categoryRepository.createCategory(formRequest);
  }
}

export default CategoryService;
