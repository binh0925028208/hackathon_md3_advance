import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Category from "./category.model";

const Question = sequelize.define(
  "Question",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    questionName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
Question.belongsTo(Category, {
  foreignKey: "categoryId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Category.hasMany(Question, { foreignKey: "categoryId" });

export default Question;
