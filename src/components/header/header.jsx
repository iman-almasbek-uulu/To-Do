import React from "react";
import "./header.css"

const Header = (props) => {

    const inputRef = React.useRef(); 


    const addTask = () => {
        const text = inputRef.current.value;
        props.addText(text);
        inputRef.current.value = '';
    }

    return (
        <header className="header">
            <div className="logo"><img src="./pngegg.png" alt="logo" /></div>
            <div className="add_task">
                <input type="text" ref={inputRef} />
                <button className="add_btn" onClick={() => {addTask()}} >Добавить</button>
            </div>
        </header>
    );
} 

export default Header;