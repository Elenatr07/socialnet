import React from "react";
import style from './Header.module.css'
import { NavLink } from "react-router-dom";

function Header (props) {
  // debugger
    return(
        <header className='header' >
       <NavLink to={'/home'}><img src= "https://w7.pngwing.com/pngs/73/738/png-transparent-flower-graphy-flower-purple-violet-lilac.png"alt=''></img></NavLink>
        
         <h1 className='header_title'>Шапка</h1>
         <div className={style.login_block}>
            {props.isAuth 
            ? <div className={style.headerButton}> <NavLink to={'/profile'}>{props.login} </NavLink>   <button  onClick={props.logout}>Logout</button> </div> 
            : <NavLink to={'/login'}>Login</NavLink>}
            

         </div>
         </header >

    )
}

export default Header;