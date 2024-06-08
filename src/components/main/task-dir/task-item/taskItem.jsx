import "../../tasks.css"

const TaskItem = (props) => {
    debugger;

    return (
        props.list.map((item,i) => {
            return (
                <li className="item">
                    <div>
                        <button className="btns">+</button>
                        <button className="btns">-</button>
                    </div>
                    <span>{item}</span>
                    <button className="btns">x</button>
                </li>
            )
        })

    );
}

export default TaskItem;