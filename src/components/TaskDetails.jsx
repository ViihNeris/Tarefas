import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const TaskDetails = () => {
  const params = useParams();
  console.log(params);

  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <div className="container-tab-descript">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          laboriosam quibusdam iure deleniti corrupti inventore porro et
          assumenda nulla, maiores a nisi similique ea. Ea saepe neque dolor
          obcaecati consectetur!
        </p>
        <div className="back-container-buttor">
          <button className="button-back" onClick={handleBackButton}>
            Voltar
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
