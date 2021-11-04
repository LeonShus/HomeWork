import React, {ChangeEvent, useState, KeyboardEvent} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value
        setName(val)

        val.trim() ? setError("") : setError("Incorrect name")
    }

    let trimName = name.trim()
    const addUser = () => {
        if(trimName){
            alert(`Hello ${trimName}!`)
            addUserCallback(trimName)
            setName("")
        }

    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
