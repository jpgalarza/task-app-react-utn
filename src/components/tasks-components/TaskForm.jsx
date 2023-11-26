import { useContext, useState } from "react"
import TaskContext from "../../context/taskContext";


export const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useContext(TaskContext);

  const submitTask = (e) => {
    e.preventDefault();

    const taskNameTrim = taskName.trim();

    if(taskNameTrim === '') return;

    addTask(taskNameTrim);

    setTaskName('');
  };

  return (
    <form className="form-style" onSubmit={submitTask}>
      <input 
        type="text" 
        placeholder="Agregar nueva tarea" 
        className="input-component"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        required
      />
      <button type="submit" className="btn-component">Agregar</button>
    </form>
  )
}
