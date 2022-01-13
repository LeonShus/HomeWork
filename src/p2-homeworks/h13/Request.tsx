import React, {useState} from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {hwApi} from "./api/api";


export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [request, setRequest] = useState("")
    const [error, setError] = useState("")

    //Must transfer to thunk
    const sendRequest = () => {
        hwApi.postData(checked)
            .then(res => {
                console.log(res.data.errorText)
                setError("")
                setRequest(res.data.errorText)
            })
            .catch(err => {
                console.log({...err})
                setError(err.request.response)
            })
    }

    const checkCallBack = (e: boolean) => {
        setChecked(e)
    }
    return (
        <div>
            <SuperButton onClick={sendRequest}>
                Send
            </SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={checkCallBack}/>
            <div>
                {error
                    ? error
                    : request
                }
            </div>
        </div>
    )
}