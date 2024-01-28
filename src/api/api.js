import React from 'react'
import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage, pageSize) => {
   return  axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then(res => {
        return res.data;
      })
}



