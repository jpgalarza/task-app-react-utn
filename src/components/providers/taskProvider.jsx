import { useState } from 'react'
import TaskContext from '../../context/taskContext'
import uuid from 'react-uuid';

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (taskName) => {
    setTaskList([...taskList, {id: uuid(), nombre: taskName, estado: "pendiente"}]);
  }

  return (
    <TaskContext.Provider value={{
      taskList,
      addTask,
    }}>
      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider;
