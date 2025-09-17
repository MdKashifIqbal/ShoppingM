import { jwtDecode } from "jwt-decode";

export function checkValidToken(){
    const token = localStorage.getItem("token")

    if(!token) return false

    try {
        const decoded = jwtDecode(token)

        if(decoded.exp && decoded.exp*1000 < Date.now()){
            localStorage.removeItem("token")
            return false

        }
        return true
    } catch (error) {
        localStorage.removeItem("token")
        console.log(error.message)
        return false
    }
}