import Task from "./task-dir/task";
import "./tasks.css"

const Tasks = (props) => {
    return (
        <div className="tasks">
            <Task list={props.state.listToDo} doing={props.doing}  />
            <Task list={props.state.listDoing} complete={props.complete} />
            <Task list={props.state.listCompleted} />
        </div>
    );
} 

export default Tasks;