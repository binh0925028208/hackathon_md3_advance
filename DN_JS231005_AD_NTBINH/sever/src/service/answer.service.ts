import { Request, Response } from "express";
import AnswerRepository from "../repositories/answer.repository";

class AnswerService {
  private AnswerRepository: AnswerRepository;

  constructor() {
    this.AnswerRepository = new AnswerRepository();
  }

  async createAnswer(formRequest: any) {
    await this.AnswerRepository.createAnswer(formRequest);
  }
}

export default AnswerService;
