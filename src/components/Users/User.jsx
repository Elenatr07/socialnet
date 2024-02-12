import React from "react";
import style from './Users.module.css';
import { NavLink } from "react-router-dom";







const User = ({user, followingInProgress, unFollowThunk, followThunk}) => {
  let url = 'https://buzookod.ru/media/2816616767_vubrbeJ.jpg'

   return (
                        
            <div>
                    <div className={style.user_block}>
                      <div className={style.avatar_block}>
                        <NavLink to={'/profile/' + user.id} >
                          <img className={style.user_avatar} src={user.photos.small || url } alt='' /> 
                        </NavLink>
                        
                        <div className={style.button_follow}>
                          {user.followed ?
                           <button disabled={followingInProgress.some(id => id === user.id)} onClick={()=> {
                            unFollowThunk(user.id)
                       
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
                           <button disabled={followingInProgress.some(id=> id === user.id)} onClick={()=> {
                          followThunk(user.id)
                          
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
                
   )}           
export default User;