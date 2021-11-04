import React from 'react'
import classes from './Affair.module.css'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    return (
        <div className={classes.container}>
            <div>
                { props.affair.name }
            </div>
            <div className={ `${props.affair.priority === "low" ? classes.low 
                                                                : props.affair.priority === "middle"
                                                                ? classes.middle
                                                                : classes.high}` }>
                { props.affair.priority }
            </div>

            <SuperButton onClick={deleteCallback}>&#10006;</SuperButton>
        </div>
    )
}

export default Affair
