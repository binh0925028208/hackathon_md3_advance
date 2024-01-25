import Answer from "./answer.model";
import Category from "./category.model";
import Question from "./question.model";

const createTable = () => {
  Question.sync().then(() => {
    console.log("Question created");
  });
  Category.sync().then(() => {
    console.log("Category created");
  });
  Answer.sync().then(() => {
    console.log("Answer created");
  });
};

export default createTable;
