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
import { removeLeadingSpace } from "../../helpers/removeLeadingSpace";

export const TaskItem = ({ task, first, last }) => {
  const { id, nombre, estado } = task;
  const [showArrows, setShowArrows] = useState(false)
  const [activeEdition, setActiveEdition] = useState(false);
  const [taskName, setTaskName] = useState(nombre);
  const taskNameInputRef = useRef();
  const {
    statusTypes: { status1, status3 },
    nextStatus, 
    backStatus, 
    prioritizeTask, 
    postponeTask, 
    updateTaskName , 
    deleteTask 
  } = useContext(TaskContext);


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

    if(activeEdition) {
      setActiveEdition(false)
      const taskNameTrim = taskName.trim();
      if(taskNameTrim === '') return;
      updateTaskName(id, taskNameTrim);
      
    }else {
      setShowArrows(false)
      setActiveEdition(true)
      setTimeout(() => {
        taskNameInputRef.current?.focus();
      }, 0);
    }
  };


  return (
    <li 
      className="task" 
      onMouseOver={() => activeEdition? setShowArrows(false) : setShowArrows(true)}
      onMouseOut={() => setShowArrows(false)}
      onDoubleClick={() => setShowArrows(!showArrows)}
    >
      <form className="form-style" onSubmit={submit}>
        {activeEdition? (
          <input 
          type="text"
          name="taskName" 
          value={taskName}
          ref={taskNameInputRef}
          className={`input-component task-input ${activeEdition? 'input-active' : ''}`}
          readOnly={!activeEdition}
          required={activeEdition}
          maxLength={50}
          onChange={(e) => setTaskName(removeLeadingSpace(e.target.value))}
          onBlur={submit}
        />
        ) : (
          <div className="card-text">{taskName}</div>
        )}
        
        <button type='submit' className="btn-component">
          {activeEdition? <FaSave /> : <FaEdit />}
        </button>
      </form>

      <button type="button" className="btn-component danger" onClick={() => deleteTask(id)}>
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
      {showArrows && estado !== status3 && (
        <button type="button" className="arrow-btn next" onClick={() => nextStatus(task)}>
          <FaArrowRight />
        </button>
      )}
      {showArrows && estado !== status1 && (
        <button type="button" className="arrow-btn back" onClick={() => backStatus(task)}>
          <FaArrowLeft />
        </button>
      )}
    </li>
  );
};
