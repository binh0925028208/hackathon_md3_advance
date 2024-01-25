import Category from "../model/category.model";

class CategoryRepository {
  async getAllCategory() {
    return await Category.findAll();
  }

  async getOneCategory(id: number) {
    return await Category.findOne({
      where: {
        id,
      },
    });
  }

  async createCategory(formRequest: any) {
    return await Category.create(formRequest);
  }
}

export default CategoryRepository;
