import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Question from "./question.model";

const Category = sequelize.define(
  "Category",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Category;
