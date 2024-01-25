import { Express } from "express";
import categoryController from "../controller/categoryController";
import questionController from "../controller/questionController";
import answerController from "../controller/answer.model";

const Router = (app: Express) => {
  app.use("/api/v1/categories", categoryController);
  app.use("/api/v1/questions", questionController);
  app.use("/api/v1/answers", answerController);
};

export default Router;
