import express, { Request, Response } from "express";
import QuestionService from "../service/question.service";

const questionController = express.Router();
const questionService = new QuestionService();

questionController.get("/", async (req: Request, res: Response) => {
  const result = await questionService.getAllQuestion();
  res.status(200).json(result);
});

questionController.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await questionService.getOneQuestion(id);
  res.status(200).json(result);
});

questionController.post("/", async (req: Request, res: Response) => {
  try {
    const newQuestion = {
      id: req.body.id,
      questionName: req.body.questionName,
      level: req.body.level,
      categoryId: req.body.categoryId,
    };
    await questionService.createQuestion(newQuestion);
    res.status(201).json({ msg: "Create successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Có lỗi xảy ra lúc tạo" });
    console.log(error);
  }
});

questionController.get(
  "/?category=[category_id]&level=[easy/medium/hard]&limit=[]",
  async (req: Request, res: Response) => {
    try {
      const category: any = req.query.category;
      const limit: any = req.query.limit;
      const level: any = req.query.level;
      const result = await questionService.getAllQuestionByCondition(
        category,
        limit,
        level
      );
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Có lỗi xảy ra" });
    }
  }
);

export default questionController;
