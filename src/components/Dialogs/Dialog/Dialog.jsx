import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../Dialogs.module.css'

export default function Dialog (props) {
  return (
  <div >
    

  <div >{props.name}</div> 
  <div>New messages: {props.newMessages}</div>
  <img src={props.photos.small} alt=''/>

  </div>
  ) 
}