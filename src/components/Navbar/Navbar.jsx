import React from "react";
import style from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={style.nav}>
        <div>
          <NavLink  to='/profile' className = {navData => navData.isActive ? style.active : style.nav_link}>Profile</NavLink>  
        </div>
        <div>
         <NavLink className={navData => navData.isActive ? style.active : style.nav_link} to='/dialogs'>Messages</NavLink>   
        </div>
        <div>
           <NavLink className={navData => navData.isActive ? style.active : style.nav_link} to='/news'>News</NavLink>  
        </div>
       <div>
        <NavLink className={navData => navData.isActive ? style.active : style.nav_link} to='/music'>Music</NavLink>
       </div>
        <div>
            <NavLink className={navData => navData.isActive ? style.active : style.nav_link} to='/settings'>Settings</NavLink>  
        </div>
      
    </nav>
    )
}

export default Navbar;