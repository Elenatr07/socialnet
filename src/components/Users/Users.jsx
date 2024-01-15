import React from 'react';
import style from './Users.module.css'

export default function Users(props) {
  if (props.users.length === 0) { //проверка на то что в state нет users, иначе они будут добавляться бесконечно
    props.setUsers([
    {id:1, followed: false, photoUrl: 'https://www.pngarts.com/files/5/Avatar-Face-PNG-Image-Transparent.png', fullName: 'Jon Smit', status: 'I am a manager', location: {city: 'London', country: 'GB'}},
    {id:2, followed: true, photoUrl: 'https://yt3.googleusercontent.com/ytc/AOPolaRK7v_FObprr4rC8tb5Hk--FaJ_LWJdw2VPnyHSEg=s900-c-k-c0x00ffffff-no-rj', fullName: 'Antonio Sanches', status: 'I am a student', location: {city: 'Madrid', country: 'Spain'}},
    {id:3, followed: false, photoUrl: 'https://avatars.mds.yandex.net/i?id=95da2fc50308afdfabdc575282da0a04f8218c2b-9181167-images-thumbs&ref=rim&n=33&w=200&h=200', fullName: 'Li Chang', status: 'I am a disigner', location: {city: 'Beijing', country: 'China'}},

  ])
  }
  
  return (
    <div>
      {
        props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img className={style.user_avatar} src={user.photoUrl} alt='' />
              </div>
              <div>
                {user.followed ? <button onClick={()=> {props.unfollow(user.id)}}>unfollow</button> : <button onClick={()=> {props.follow(user.id)}}>follow</button>}
                
              </div>
            </span>
            <span>
              <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </span>
            </span>

          </div>
        ))
      }



    </div>
  )
}
