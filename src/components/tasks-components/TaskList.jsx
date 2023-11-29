import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm'
import { useContext } from 'react';
import TaskContext from '../../context/taskContext';

export const TaskList = ({ estado }) => {
  const { taskList, statusTypes: { status1 } } = useContext(TaskContext);

  return (
    <div className="list-container">
        <h2>{estado}</h2>
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
        {estado === status1 && <TaskForm/>}
    </div>
  )
}
