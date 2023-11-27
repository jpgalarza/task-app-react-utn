import { useState } from 'react'
import TaskContext from '../../context/taskContext'
import uuid from 'react-uuid';

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (taskName) => {
    setTaskList([...taskList, {id: uuid(), nombre: taskName, estado: "pendiente"}]);
  };

  const updateTaskName = (taskId, taskName) => {
    setTaskList(taskList.map(tsk => tsk.id === taskId? {...tsk, nombre: taskName} : tsk));
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter(tsk => tsk.id !== taskId));
  };

  const nextStatus = (task) => {
    const taskUpdated = {...task, estado: task.estado === 'pendiente'? 'enProgreso' : 'completada'};
    const filteredList = taskList.filter(tsk => tsk.id !== task.id);
    setTaskList([...filteredList, taskUpdated]);
  };

  const backStatus = (task) => {
    const taskUpdated = {...task, estado: task.estado === 'completada'? 'enProgreso' : 'pendiente'};
    const filteredList = taskList.filter(tsk => tsk.id !== task.id);
    setTaskList([...filteredList, taskUpdated]);
  };

  const prioritizeTask = (task) => {
    const filteredList = taskList.filter(tsk => tsk.id !== task.id);
    setTaskList([task, ...filteredList]);
  };

  const postponeTask = (task) => {
    const filteredList = taskList.filter(tsk => tsk.id !== task.id);
    setTaskList([...filteredList, task]);
  };


  return (
    <TaskContext.Provider value={{
      taskList,
      addTask,
      updateTaskName,
      deleteTask,
      nextStatus,
      backStatus,
      prioritizeTask,
      postponeTask,
    }}>
      { children }
    </TaskContext.Provider>
  )
}

export default TaskProvider;
