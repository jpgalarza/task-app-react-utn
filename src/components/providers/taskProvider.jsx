import { useEffect, useState } from 'react'
import TaskContext from '../../context/taskContext'

const taskStatuses = {
  PENDING: 'Pendiente',
  PROGRESS: 'En Progreso',
  COMPLETED: 'Completada',
};

const { PENDING, PROGRESS, COMPLETED } = taskStatuses;

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');

    if(tasks) setTaskList(JSON.parse(tasks));
  }, [])

  useEffect(() => {
    if(taskList.length > 0) localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList])
  
  
  const addTask = (taskName) => {
    setTaskList([...taskList, {id: crypto.randomUUID(), nombre: taskName, estado: PENDING}]);
  };

  const updateTaskName = (taskId, taskName) => {
    setTaskList(taskList.map(tsk => tsk.id === taskId? {...tsk, nombre: taskName} : tsk));
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter(tsk => tsk.id !== taskId));
  };

  const nextStatus = (task) => {
    const taskUpdated = {...task, estado: task.estado === PENDING? PROGRESS : COMPLETED};
    const filteredList = taskList.filter(tsk => tsk.id !== task.id);
    setTaskList([...filteredList, taskUpdated]);
  };

  const backStatus = (task) => {
    const taskUpdated = {...task, estado: task.estado === COMPLETED? PROGRESS : PENDING};
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
      taskStatuses,
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
