import { useContext, useState } from "react"
import TaskContext from "../../context/taskContext";


export const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useContext(TaskContext);

  const submitTask = (e) => {
    e.preventDefault();

    if(taskName !== '') addTask(taskName);

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
      />
      <button type="submit" className="btn-component">Agregar</button>
    </form>
  )
}
