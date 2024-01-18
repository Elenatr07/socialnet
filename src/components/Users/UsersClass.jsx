import React from "react";
import style from './Users.module.css';





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
                        <img className={style.user_avatar} src={user.photos.small !== null ? user.photos.small :url } alt='' />
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
export default UsersClass;