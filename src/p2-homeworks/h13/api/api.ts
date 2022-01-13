import axios from "axios"

export const hwApi = {
    postData(val: boolean) {
        return axios.post<RequestType>("https://neko-cafe-back.herokuapp.com/auth/test", {success: val})
    }
}

export type RequestType = {
    errorText: string
    info : string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}