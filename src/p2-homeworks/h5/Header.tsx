import {Menu} from "@mui/icons-material"
import React from "react"
import {NavLink} from "react-router-dom"
import {PATH} from "./MyRoutes"
import classes from "./Styles.module.css"

function Header() {
    return (
        <div className={classes.navContainer}>
            <NavLink to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <div className={classes.nav}><Menu fontSize={"large"}/></div>
        </div>
    )
}

export default Header
