import React from "react";
import style from './Users.module.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";





const UsersClass = (props) => {
  let url = 'https://buzookod.ru/media/2816616767_vubrbeJ.jpg'
  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize) //определение кол-ва страниц
  let pages= [];
  for (let i=1; i <= pagesCount; i++) {
       pages.push(i)
   
  }
   return (
            <div>
                  <div>
                    {pages.map(p => {
                        if (p === 1 || p === pagesCount || (p >= props.currentPage - 2 && p <= props.currentPage + 2)) {
                            return (
                                <span
                                    key={p}
                                    className={props.currentPage === p ? style.select_page : ''}
                                    onClick={(e) => {
                                        props.onPageChanged(p)
                                    }}>{p} </span>
                            );
                        } else if (p === props.currentPage - 3 || p === props.currentPage + 3) {
                            return <span key={p}>... </span>;
                        } else {
                            return null;
                        }
                    })}
            </div>
             {
                props.users.map((user) => (
                  <div key={user.id}>
                    <div className={style.user_block}>
                      <div className={style.avatar_block}>
                        <NavLink to={'/profile/' + user.id} >
                          <img className={style.user_avatar} src={user.photos.small !== null ? user.photos.small :url } alt='' /> 
                        </NavLink>
                        
                        <div className={style.button_follow}>
                          {user.followed ?
                           <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={()=> {
                            props.unFollowThunk(user.id)
                       
                            /*    перенос в usersReduser и замена всего на props.unFollowThunk
                        props.toggleFollowingInProgress(true, user.id);
                           usersAPI.unfollow(user.id)
                           
                                (перенос в API)
                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                  {withCredentials:true,
                                  //headers: {"API-KEY: "0d1f131a-af70-4463-84c0-a73c20105bab"}
                                  })
                            .then(res => {
                              if (res.data.resultCode ===0) {
                                 props.unfollow(user.id)
                              }
                              props.toggleFollowingInProgress(false, user.id)
                            }) */
                            }}>unfollow</button> :
                           <button disabled={props.followingInProgress.some(id=> id === user.id)} onClick={()=> {
                          props.followThunk(user.id)
                          
                         /* перенос в usersReduser и замена всего на props.followThunk
                            props.toggleFollowingInProgress(true, user.id)
                           usersAPI.follow(user.id)
                           
                         (перенос в API)
                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, 
                            {withCredentials:true
                            //headers: {"API-KEY: "0d1f131a-af70-4463-84c0-a73c20105bab"}
                            })
                                .then(res => {
                                   //resultCoвe это инфа с сервера о том что авторизация состоялась, название и код зависит от настроек сервера
                                if(res.data.resultCode ===0) {
                                    props.follow(user.id)
                                }
                                props.toggleFollowingInProgress(false, user.id)
                                  }); */
                           
                           }}>follow</button>}
                          
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
export default UsersClass;