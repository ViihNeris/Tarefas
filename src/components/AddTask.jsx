import React, { useState } from "react";
import "../index.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleAddTaskClick = () => {
    if (inputData === "") {
      alert("Você não deve adicionar uma tarefa vazia.");
    } else {
      handleTaskAddition(inputData);
      setInputData("");
    }
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <form className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
        placeholder="Digite o título de sua Tarefa"
        required
      />

      <div className="button-container">
        <input
          className="button"
          type="submit"
          value="Adicionar"
          onClick={handleAddTaskClick}
        />
      </div>
    </form>
  );
};

export default AddTask;
