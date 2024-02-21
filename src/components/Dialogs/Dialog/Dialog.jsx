import React from 'react'

import style from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


let url = "https://buzookod.ru/media/2816616767_vubrbeJ.jpg";
export default function Dialog (props) {
  return (
  <div >
    <div className={style.friendBlock}>
      <NavLink to={"/profile/" + props.id}> <div className={style.photoBlock}>
          <img className={style.dialogsPhoto} 
           src={props.photos.small || url} alt=''/>
      </div>
      </NavLink>
      
    <div className={style.nameFriend}  >
      <div>{props.name} </div>
        <div className={style.newMessages} >{props.newMessages}</div>
    </div> 
    
    </div>
      
      

  

  </div>
  ) 
}