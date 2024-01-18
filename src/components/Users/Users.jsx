import React from 'react';
import style from './Users.module.css';
import axios from "axios";

const url = 'https://buzookod.ru/media/2816616767_vubrbeJ.jpg'


export default function Users(props) {
  const getUsers =() => {
    if (props.users.length === 0) { //проверка на то что в state нет users, иначе они будут добавляться бесконечно
   
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(res => {
      props.setUsers(res.data.items)
    });
  }
  
   
 /*   props.setUsers([
    {id:1, followed: false, photoUrl: 'https://yt3.googleusercontent.com/ytc/AGIKgqNQ3LA0hXHEgql7bVbGcOq8aojneLJc6YJfqKyl=s900-c-k-c0x00ffffff-no-rj', fullName: 'Jon Smit', status: 'I am a manager', location: {city: 'London', country: 'GB'}},
    {id:2, followed: true, photoUrl: 'https://yt3.googleusercontent.com/ytc/AOPolaRK7v_FObprr4rC8tb5Hk--FaJ_LWJdw2VPnyHSEg=s900-c-k-c0x00ffffff-no-rj', fullName: 'Antonio Sanches', status: 'I am a student', location: {city: 'Madrid', country: 'Spain'}},
    {id:3, followed: false, photoUrl: 'https://avatars.mds.yandex.net/i?id=95da2fc50308afdfabdc575282da0a04f8218c2b-9181167-images-thumbs&ref=rim&n=33&w=200&h=200', fullName: 'Li Chang', status: 'I am a disigner', location: {city: 'Beijing', country: 'China'}},

  ])*/
  }
  
  return (
    <div>
      <button onClick={getUsers}>get users</button>
      {
        props.users.map((user) => (
          <div key={user.id}>
            <div className={style.user_block}>
              <div className={style.avatar_block}>
                <img className={style.user_avatar} src={user.photos.small !== null ? user.photos.small : url } alt='' />
                <div className={style.button_follow}>
                  {user.followed ? <button onClick={()=> {props.unfollow(user.id)}}>unfollow</button> : <button onClick={()=> {props.follow(user.id)}}>follow</button>}
                  
                </div>
             
              </div>
              
            <div className={style.userName_block}>
                <div className={style.userFullName}>{user.name}</div>
                <div className={style.userStatus}>{user.status}</div>
              </div>
        
            </div>
         
          </div>
        ))
      }



    </div>
  )
}
