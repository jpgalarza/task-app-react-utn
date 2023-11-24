import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { TaskApp } from "./components/tasks-components/TaskApp";
import TaskProvider from "./components/providers/taskProvider";

export const App = () => {
  return (
    <TaskProvider>
      <Header/>
      <TaskApp/>
      <Footer/>
    </TaskProvider>
  )
}
