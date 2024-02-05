import React from "react";
import style from './Header.module.css'
import { NavLink } from "react-router-dom";

function Header (props) {
  // debugger
    return(
        <header className='header' >
       
        <img src= "https://w7.pngwing.com/pngs/73/738/png-transparent-flower-graphy-flower-purple-violet-lilac.png"alt=''></img>
         <h1 className='header_title'>Шапка</h1>
         <div className={style.login_block}>
            {props.isAuth 
            ? <div className="headerButton">{props.login}   <button  onClick={props.logout}>Logout</button> </div> 
            : <NavLink to={'/login'}>Login</NavLink>}
            

         </div>
         </header >

    )
}

export default Header;