import "../tasks.css"
import TaskItem from "./task-item/taskItem";

const Task = (props) => {
    debugger;

    return (
        <div className="task">
            <h3>{props.list.title}</h3>
            <ul className="task_list">
                <TaskItem list={props.list.list} />
            </ul>
        </div>
    );
}

export default Task;