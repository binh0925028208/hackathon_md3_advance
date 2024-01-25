import express, { Request, Response } from "express";
import AnswerService from "../service/answer.service";

const answerController = express.Router();
const answerService = new AnswerService();

answerController.post("/", async (req: Request, res: Response) => {
  try {
    const newAnswer = {
      id: req.body.id,
      answer: req.body.answer,
      questionId: req.body.questionId,
    };
    await answerService.createAnswer(newAnswer);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra" });
  }
});

export default answerController;
