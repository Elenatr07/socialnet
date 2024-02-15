import React from "react";


import Paginator from "../FormControls/Paginator/Paginator";
import User from "./User";





const UsersClass = (props) => {


   return (
            <div>
                <Paginator 
                currentPage={props.currentPage} 
                onPageChanged={props.onPageChanged} 
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                />

             {
                props.users.map((user) => ( 
                
                <User user={user}
                followingInProgress= {props.followingInProgress}
                unFollowThunk={props.unFollowThunk}
                followThunk={props.followThunk}
                key={user.id}
                />
                
                ))
              }
        
        
        
            </div>
   )
}
export default UsersClass;