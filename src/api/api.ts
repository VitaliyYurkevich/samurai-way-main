import axios from "axios";
import {setUserProfileAC} from "../redux/profile-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "482cc18a-19a0-4ab1-be65-64dee4acdd40"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
                return response.data
            }
        )
    },
    follow(userId: number) {
        instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
     return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
return instance.get(`status/` + userId)
    },
    updateStatus(status: any) {
        return instance.put(`status`, {status: status})
    },
}


export const authAPI = {
    me () {
        return instance.get(`auth/me`, )
    }
}









