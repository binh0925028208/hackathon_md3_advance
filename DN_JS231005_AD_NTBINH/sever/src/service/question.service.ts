import { Request, Response } from "express";
import QuestionRepository from "../repositories/question.repository";

class QuestionService {
  private questionRepository: QuestionRepository;

  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async getAllQuestionByCondition(
    category: string,
    limit: number,
    level: string
  ): Promise<any> {
    return await this.questionRepository.getAllQuestionByCondition(
      category,
      limit,
      level
    );
  }
  async getAllQuestion() {
    return await this.questionRepository.getAllQuestion();
  }
  async getOneQuestion(id: number) {
    return await this.questionRepository.getOneQuestion(id);
  }
  async createQuestion(formRequest: any) {
    await this.questionRepository.createQuestion(formRequest);
  }
}

export default QuestionService;
