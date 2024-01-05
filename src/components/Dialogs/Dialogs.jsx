import React from 'react'
import style from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom'

export default function Dialogs(props) {
  return (
    <div className={style.dialogs}>
        <div className={style.dialog_items}>
            <h2>Dialogs</h2>
            <div className={style.dialog + ' ' + style.active}>
               <NavLink to="/dialogs/1">Elena</NavLink> 

            </div>
            <div className={style.dialog}>
              <NavLink to="/dialogs/2" >Jon</NavLink>  
            </div>
            <div className={style.dialog}>
              <NavLink to="/dialogs/3">Sam</NavLink>  
            </div>

        </div>
<div className={style.messages}>
            <div className={style.message}>Hi</div>
            <div className={style.message}>Hello</div>
            <div className={style.message}>Hola</div>
        </div>
    </div>
  )
}
