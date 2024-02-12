import React from 'react'
import style from './Post.module.css'

export default function Post(props) {
  return (
    <div className={style.post}>
        <img className={style.post_avatar} src='https://w7.pngwing.com/pngs/73/738/png-transparent-flower-graphy-flower-purple-violet-lilac.png' alt=''></img>
        <p className={style.postBody}>{props.message}</p>
        <div>Like {props.likesCount}</div>
        </div>
        
  )
}
