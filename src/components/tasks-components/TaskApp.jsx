import { useContext } from "react"
import { TaskList } from "./TaskList"
import TaskContext from "../../context/taskContext"

export const TaskApp = () => {
  const { statusTypes: { status1, status2, status3 } } = useContext(TaskContext);
  return (
    <main>
      <div className="container app">
        <TaskList estado={status1}/>
        <TaskList estado={status2}/>
        <TaskList estado={status3}/>
      </div>
    </main>
  )
}
