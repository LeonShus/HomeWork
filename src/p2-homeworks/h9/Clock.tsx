import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date)
    const [show, setShow] = useState<boolean>(true)

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
        // show
    }
    const onMouseLeave = () => {
        // close
    }

    const hours = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const stringTime = [hours, min, sec].map(el => el < 10 ? '0' + el : el).join(':') // fix with date
    const stringDate = [day, month, year].map(el => el < 10 ? '0' + el : el).join('.') // fix with date

    return (
        <div>
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
