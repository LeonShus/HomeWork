import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

export type ThemeType = "dark" | "red" | "some" | "pink" | "purple"

const themes: Array<ThemeType> = ["dark", "red", "some", "pink", "purple"];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themeReducer.theme)
    const dispatch = useDispatch()

    const changeTheme = (theme: ThemeType) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + "-text"]}>
                homeworks 12
            </span>

            {/*SuperSelect or SuperRadio*/}

            <SuperSelect
                value={theme}
                options={themes}
                onChangeOption={changeTheme}
            />

            <SuperRadio
                radioColor={theme}
                value={theme}
                options={themes}
                onChangeOption={changeTheme}
            />
            <hr/>
        </div>
    );
}

export default HW12;
