import { TaskList } from "./TaskList"

export const TaskApp = () => {
  return (
    <main>
      <div className="container app">
        <TaskList estado="pendiente"/>
        <TaskList estado="ejecutandose"/>
        <TaskList estado="completada"/>
      </div>
    </main>
  )
}
