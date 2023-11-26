import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm'
import { useContext } from 'react';
import TaskContext from '../../context/taskContext';

export const TaskList = ({ estado }) => {
  const { taskList } = useContext(TaskContext);

  return (
    <div className="list-container">
        <h2>{estado === 'enProgreso'? 'En Progreso' : estado[0].toUpperCase() + estado.slice(1)}</h2>
        <ul className="task-list">
          {taskList.filter(task => task.estado === estado).map((task, index, array) => (
            <TaskItem 
              key={task.id} 
              task={task}
              first={index === 0}
              last={index === array.length - 1}
            />
          ))}
        </ul>
        {estado === 'pendiente' && <TaskForm/>}
    </div>
  )
}