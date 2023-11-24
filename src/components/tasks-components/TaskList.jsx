import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm'
import { useContext } from 'react';
import TaskContext from '../../context/taskContext';

export const TaskList = ({ estado }) => {
  const { taskList } = useContext(TaskContext);
  console.log(taskList);

  return (
    <div className="list-container">
        <h2>{estado[0].toUpperCase() + estado.slice(1)}</h2>
        <ul className="task-list">
          {taskList.filter(task => task.estado === estado)
          .map(task => <TaskItem key={task.id} nombre={task.nombre}/>
          )}
        </ul>
        {estado === 'pendiente' && <TaskForm/>}
    </div>
  )
}
