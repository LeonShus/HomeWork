import React from "react"
import {HashRouter} from "react-router-dom"
import Header from "./Header"
import MyRoutes from "./MyRoutes"


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <MyRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
