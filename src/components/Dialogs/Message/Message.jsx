import React from 'react'
import style from './../Dialogs.module.css'
import img from './../../../img/logo.png'

let url = "https://buzookod.ru/media/2816616767_vubrbeJ.jpg";
export default function Message (props) {
  const owner = () => {
   
    if(props.senderId !== props.friend)
    return owner
  }
    return (
       
      <div className={style.message}>
        <div className={style.photoBlock}>
          {owner ? <img className={style.dialogsPhoto} src={img} alt=''></img> 
          : <img className={style.dialogsPhoto} src={props.photo || url} alt=''></img>}
          
        </div>
        
        <p className={style.messageBody}> {props.message}</p>

       
        
        </div>
    )

}