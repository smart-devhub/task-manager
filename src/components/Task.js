import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Task = ({ tasks, onDelete, onEdit }) => {

    return (
      <div>
        <div className="task">
          <div>
            <p className="taskName">
              <span className="textBold">Task Name:</span> {tasks.text}
            </p>
        <p className="taskDate"><span className="textBold">Date of Completion:</span> {tasks.day}
            </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(tasks.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(tasks.id)} className="editIcon" /></p>
          </div>
        </div>
      </div>
    )
}
export default Task;