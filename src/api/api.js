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
        //headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
        })
      },
      unfollow(userId)  {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {withCredentials:true,
       //headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
     })
      },
    
} 

export const profileAPI = {
  getProfile(profileId) {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)

   },
   getStatus(profileId) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${profileId}`, 
    {withCredentials:true,
    headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    })
   },

   updateStatus(status) {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status},
    {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
      }) //первый status требование от backend при put запросе, второй название переменной
   }
}

export const authAPI = {
  meAuth () {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
     {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    })
     
  },
  //email, password, rememberMe, captcha требования с backend при отправлении post запроса
  login(email, password, rememberMe=false) {
    return  axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe},
    {withCredentials:true,
     headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
  })
},
  logout() {
    return  axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`,
    {withCredentials:true,
    //headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
  })
}
}