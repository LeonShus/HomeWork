import React from "react"
import classes from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={classes.container}>
            <div className={classes.first}>
                <img className={classes.avatar} src={props.avatar} alt="avatar"/>
            </div>
            <div className={classes.second}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <span className={classes.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
