import { useContext, useRef, useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaArrowUp,
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
  FaSave,
} from "react-icons/fa";
import TaskContext from "../../context/taskContext";

export const TaskItem = ({ task, first, last }) => {
  const { id, nombre, estado } = task;
  const { 
    nextStatus, 
    backStatus, 
    prioritizeTask, 
    postponeTask, 
    updateTaskName , 
    deleteTask 
  } = useContext(TaskContext);
  const [showArrows, setShowArrows] = useState(false)
  const [activeEdition, setActiveEdition] = useState(false);
  const [taskName, setTaskName] = useState(nombre);
  const taskNameInputRef = useRef();

  const handlePrioritize = (task) => {
    setShowArrows(false);
    prioritizeTask(task);
  };

  const handlePostpone = (task) => {
    setShowArrows(false);
    postponeTask(task);
  };

  const submit = (e) => {
    e.preventDefault();

    const taskNameTrim = taskName.trim();

    if(taskNameTrim === '') return;

    if(activeEdition) {
      setActiveEdition(false)
      updateTaskName(id, taskNameTrim);
    }else {
      setActiveEdition(true)
      taskNameInputRef.current.focus();
    }
  };


  return (
    <li 
      className="task" 
      onMouseOver={() => activeEdition? setShowArrows(false) : setShowArrows(true)}
      onMouseOut={() => setShowArrows(false)}
    >
      <form className="form-style" onSubmit={submit}>
        <input 
          type="text"
          name="taskName" 
          value={taskName}
          ref={taskNameInputRef}
          className={`input-component task-input ${activeEdition? 'input-active' : ''}`}
          readOnly={!activeEdition}
          required={activeEdition}
          onChange={(e) => setTaskName(e.target.value)}
          onBlur={submit}
        />
        <button type='submit' className="btn-component">
          {activeEdition? <FaSave /> : <FaEdit />}
        </button>
      </form>

      <button type="button" className="btn-component" onClick={() => deleteTask(id)}>
        <FaTrashAlt />
      </button>
      
      {showArrows && !first && (
        <button type="button" className="arrow-btn up" onClick={() => handlePrioritize(task)}>
          <FaArrowUp />
        </button>
      )}
      {showArrows && !last && (
        <button type="button" className="arrow-btn down" onClick={() => handlePostpone(task)}>
          <FaArrowDown />
        </button>
      )}
      {showArrows && estado !== "completada" && (
        <button type="button" className="arrow-btn next" onClick={() => nextStatus(task)}>
          <FaArrowRight />
        </button>
      )}
      {showArrows && estado !== "pendiente" && (
        <button type="button" className="arrow-btn back" onClick={() => backStatus(task)}>
          <FaArrowLeft />
        </button>
      )}
    </li>
  );
};
