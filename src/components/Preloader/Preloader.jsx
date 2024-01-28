import React from 'react'
import loading from './../../img/loading.gif'
import style from './Preloader.module.css'

export default function Preloader(props) {
  return (
    <div>
            <img src={loading} alt="" className={style.preload}/> 
        </div>
  )
}
