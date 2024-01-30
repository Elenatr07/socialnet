import React from 'react'
import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const usersAPI = {
    getUsers (currentPage, pageSize)  {
   return  axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then(res => {
        return res.data;
      });
    },
       follow(userId) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, 
        {withCredentials:true
        //headers: {"API-KEY: "0d1f131a-af70-4463-84c0-a73c20105bab"}
        })
      },
      unfollow(userId)  {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {withCredentials:true,
       //headers: {"API-KEY: "0d1f131a-af70-4463-84c0-a73c20105bab"}
     })
      }
} 

     





