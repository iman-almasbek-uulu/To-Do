import "../../tasks.css"

const TaskItem = (props) => {
    // debugger;
    const addText = (text,i,state) => {
        if (state === "todo") {
            props.doing(text,i);

        }
        if (state === "doing") {
            props.complete(text,i);
        }
        console.log(props);
    }

    return (
        props.list.map((item,i) => {
            return (
                <li key={i} className="item">
                    <div>
                        <button className="btns" onClick={() => {addText(item.text,i,item.state)}}> <img src="./add.png" alt="add" /> </button>
                        <button className="btns"><img src="./repaire.png" alt="repaire" /></button>
                    </div>
                    <span>{item.text}</span>
                    <button className="btns"> <img src="./delete.png" alt="delete" /></button>
                </li>
            )
        })

    );
}

export default TaskItem;