import React, {useState} from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import styles from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let stringTime = ""
    let stringDate = ""
    if (date) {
        stringTime = [date.getHours(), date.getMinutes(), date.getSeconds()].map(el => el < 10 ? "0" + el : el).join(":")
        stringDate = [date.getDate(), date.getMonth(), date.getFullYear()].map(el => el < 10 ? "0" + el : el).join(".")
    }


    return (
        <div
            className={styles.container}
        >
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
