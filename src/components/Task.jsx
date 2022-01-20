import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "../index.css";
import { useHistory } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleDeleteClick }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(task.title);
  };

  return (
    <div
      className="task-container"
      style={
        task.completed
          ? { borderLeft: "6px solid pink", borderRadius: "5px" }
          : {}
      }
    >
      <div className="tasks-wall" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="button-del" onClick={() => handleDeleteClick(task.id)}>
        <CgClose className="button-del2" />
      </div>
      <div className="button-div-descript" onClick={handleTaskDetailsClick}>
        <CgInfo className="button-descript" />
      </div>
    </div>
  );
};

export default Task;
