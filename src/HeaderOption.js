import React from "react";
import './HeaderOption.css';
//import { Avatar } from "@mui/material";

function HeaderOption({Avatar, Icon, title, onClick}) {
    return <div onClick={onClick} className="headerOption">
        {Icon && <Icon className='headerOption__icon'/>}
        {Avatar && <Avatar className='headerOption_icon' src={Avatar}/>}
        <h3 className="headerOption__title">{title}</h3>
    </div>
}

export default HeaderOption;