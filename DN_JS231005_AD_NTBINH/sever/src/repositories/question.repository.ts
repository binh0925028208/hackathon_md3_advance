import { Op } from "sequelize";
import Question from "../model/question.model";

class QuestionRepository {
  async getAllQuestion() {
    return await Question.findAll();
  }

  async getOneQuestion(id: number) {
    return await Question.findOne({
      where: {
        id,
      },
    });
  }

  async getAllQuestionByCondition(
    category: string,
    limit: number,
    level: string
  ) {
    return await Question.findAll({
      where: {
        category: {
          [Op.like]: `%${category}%`,
        },
        level: {
          [Op.like]: `%${level}%`,
        },
      },
      limit,
    });
  }

  async createQuestion(formRequest: any) {
    return await Question.create(formRequest);
  }
}

export default QuestionRepository;
