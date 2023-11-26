import { TaskList } from "./TaskList"

export const TaskApp = () => {
  return (
    <main>
      <div className="container app">
        <TaskList estado="pendiente"/>
        <TaskList estado="enProgreso"/>
        <TaskList estado="completada"/>
      </div>
    </main>
  )
}
