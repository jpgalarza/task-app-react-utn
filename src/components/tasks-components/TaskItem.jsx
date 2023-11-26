import { useContext, useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaArrowUp,
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";
import TaskContext from "../../context/taskContext";

export const TaskItem = ({ task, first, last }) => {
  const { nombre, estado } = task;
  const { nextStatus, backStatus, prioritizeTask, postponeTask } = useContext(TaskContext);
  const [mouseOver, setMouseOver] = useState(false);

  const handlePrioritize = (task) => {
    setMouseOver(false);
    prioritizeTask(task);
  };

  const handlePostpone = (task) => {
    setMouseOver(false);
    postponeTask(task);
  };


  return (
    <li 
      className="task" 
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <form className="form-style">
        <input type="text" value={nombre} className="input-component input-task" readOnly/>
        <button type="button" className="btn-component"><FaEdit /></button>
        <button type="button" className="btn-component"><FaTrashAlt /></button>
        {mouseOver && !first && (
          <button type="button" className="arrow-btn up" onClick={() => handlePrioritize(task)}>
            <FaArrowUp />
          </button>
        )}
        {mouseOver && !last && (
          <button type="button" className="arrow-btn down" onClick={() => handlePostpone(task)}>
            <FaArrowDown />
          </button>
        )}
        {mouseOver && estado !== "completada" && (
          <button type="button" className="arrow-btn next" onClick={() => nextStatus(task)}>
            <FaArrowRight />
          </button>
        )}
        {mouseOver && estado !== "pendiente" && (
          <button type="button" className="arrow-btn back" onClick={() => backStatus(task)}>
            <FaArrowLeft />
          </button>
        )}
      </form>
    </li>
  );
};
