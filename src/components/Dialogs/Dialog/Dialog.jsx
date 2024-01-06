import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../Dialogs.module.css'

export default function Dialog (props) {
  return (
  <div >

  <NavLink className={navData=> navData.isActive ? style.active : style.dialog} to={"/dialogs/"+ props.id}>{props.name}</NavLink> 
  </div>
  )
}