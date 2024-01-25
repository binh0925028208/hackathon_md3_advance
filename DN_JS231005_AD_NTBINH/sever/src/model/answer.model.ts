import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Question from "./question.model";

const Answer = sequelize.define(
  "Answer",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
Answer.belongsTo(Question, {
  foreignKey: "questionId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Question.hasMany(Answer,{foreignKey: "questionId"});
export default Answer;
