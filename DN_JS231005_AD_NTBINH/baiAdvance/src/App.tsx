import React, { useEffect, useState } from "react";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import baseAxios from "./api/baseAxios";
function App() {
  const [questionData, setQuestion] = useState<any[]>([]);
  const [categoryData, setCategory] = useState<any[]>([]);
  const handleGetQuestionData = async () => {
    const result = await baseAxios.get(`/questions`);
    return setQuestion(result.data);
  };
  const handleGetCategoryData = async () => {
    const result = await baseAxios.get(`/categories`);
    return setCategory(result.data);
  };
  useEffect(() => {
    handleGetQuestionData();
    handleGetCategoryData();
  }, []);
  return (
    <div>
      <div className="body">
        <div className="question_box">
          <h1>Setup Quizz</h1>
          <div className="option_box">
            <h3>Number of questions :</h3>
            <select name="number" id="numberQuestion">
              {questionData.map((item: any) => (
                <option key={item.id}>{item.id}</option>
              ))}
            </select>
          </div>
          <div className="option_box">
            <h3>Categories :</h3>
            <select name="number">
              {categoryData.map((item: any) => (
                <option key={item.id}>{item.categoryName}</option>
              ))}
            </select>
          </div>
          <div className="option_box">
            <h3>Difficulty :</h3>
            <select name="difficulty">
              <option>Easy</option>
              <option>Normal</option>
              <option>Hard</option>
            </select>
          </div>
          <button className="submit_btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
