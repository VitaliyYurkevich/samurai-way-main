import axios from "axios";


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
    follow(userId = 1) {
        instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
    },
    unfollow(userId = 1) {
     return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}










