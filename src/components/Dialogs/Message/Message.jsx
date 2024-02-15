import React from 'react'
import style from './../Dialogs.module.css'

export default function Message (props) {
    return (
       
      <div className={style.message}>
        <p>Сообщение: {props.message}</p>
       
        
        </div>
    )

}