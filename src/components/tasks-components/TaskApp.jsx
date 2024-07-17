import { useContext } from "react"
import { TaskList } from "./TaskList"
import TaskContext from "../../context/taskContext"

export const TaskApp = () => {
  const { taskStatuses: { PENDING, PROGRESS, COMPLETED } } = useContext(TaskContext);
  return (
    <main>
      <div className="container app">
        <TaskList estado={PENDING}/>
        <TaskList estado={PROGRESS}/>
        <TaskList estado={COMPLETED}/>
      </div>
    </main>
  )
}
