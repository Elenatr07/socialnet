import React from "react";
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
        {withCredentials:true,
        headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
        })
      },
      unfollow(userId)  {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {withCredentials:true,
       headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
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
   },
   savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file)
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, formData,
    {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab", 
                "Content-Type": 'multipart/form-data'
    }          
      }) 
   },
   saveProfile(profile) {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, profile,
    {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"
               
    }          
      }) 
   },

}

export const authAPI = {
  meAuth () {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
     {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    })
     
  },
  //email, password, rememberMe, captcha требования с backend при отправлении post запроса
  login(email, password, rememberMe=false, captcha = null) {
    return  axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe, captcha},
    {withCredentials:true,
     headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
  })
},
  logout() {
    return  axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`,
    {withCredentials:true,
    headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
  })
}
}

export const securityAPI = {
  getCaptchaUrl () {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/security/get-captcha-url`,
     {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    })
     
  },

}

export const dialogsAPI = {
  getListMessages (friendId) {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/dialogs/${friendId}/messages`,
     {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    })
  },
  getChating () {
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/dialogs`,
     {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    })
  },
  sendMessage (friendId, body) {
    return  axios.post(`https://social-network.samuraijs.com/api/1.0/dialogs/${friendId}/messages`, ({body}),
     {withCredentials:true,
      headers: {"API-KEY": "0d1f131a-af70-4463-84c0-a73c20105bab"}
    } )
  },
 

}