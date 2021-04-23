import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuItem from "../../data/menuItem";
import "./Dropdown.css";

function DropDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {menuItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}> {item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropDown;