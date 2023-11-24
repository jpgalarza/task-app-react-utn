import { FaEdit, FaTrashAlt, FaArrowUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const TaskItem = ({ nombre }) => {
  return (
    <li className="task">
      <form className="form-style">
        <input type="text" value={nombre} className="input-component input-task" readOnly/>
        <button type="button" className="arrow-btn up"><FaArrowUp/></button>
        <button type="button" className="arrow-btn left"><FaArrowLeft/></button>
        <button type="button" className="arrow-btn right"><FaArrowRight/></button>
        <button type="button" className="btn-component"><FaEdit /></button>
        <button type="button" className="btn-component"><FaTrashAlt /></button>
      </form>
    </li>
  )
}
