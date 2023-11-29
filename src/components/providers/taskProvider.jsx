import { useEffect, useState } from 'react'
import TaskContext from '../../context/taskContext'

const statusTypes = {
  status1: 'Pendiente',
  status2: 'En Progreso',
  status3: 'Completada',
};

const { status1, status2, status3 } = statusTypes;

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');

    if(tasks) setTaskList(JSON.parse(tasks));
  }, [])

  useEffect(() => {
    if(taskList.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
  }, [taskList])
  
  
  const addTask = (taskName) => {
    setTaskList([...taskList, {id: crypto.randomUUID(), nombre: taskName, estado: status1}]);
  };

  const updateTaskName = (taskId, taskName) => {
    setTaskList(taskList.map(tsk => tsk.id === taskId? {...tsk, nombre: taskName} : tsk));
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter(tsk => tsk.id !== taskId));
  };

  const nextStatus = (task) => {
    const taskUpdated = {...task, estado: task.estado === status1? status2 : status3};
    const filteredList = taskList.filter(tsk => tsk.id !== task.id);
    setTaskList([...filteredList, taskUpdated]);
  };

  const backStatus = (task) => {
    const taskUpdated = {...task, estado: task.estado === status3? status2 : status1};
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
      statusTypes,
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
