import React from "react";
import "./header.css"

const Header = (props) => {
    return (
        <header className="header">
            <div className="logo"><img src="./pngegg.png" alt="logo" /></div>
            <div className="add_task">
                <input type="text" />
                <button className="add_btn">Добавить</button>
            </div>
        </header>
    );
} 

export default Header;