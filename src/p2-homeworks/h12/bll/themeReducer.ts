import {ThemeType} from "../HW12";

const CHANGE_THEME = "CHANGE-THEME"

type InitStateType = {
    theme: ThemeType
}

const initState: InitStateType = {
    theme: 'red'
};

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default: return state;
    }
};

export type ChangeThemeType = {
    type: typeof CHANGE_THEME,
    theme: ThemeType
}
export const changeThemeC = (theme: ThemeType): ChangeThemeType => ({ type: "CHANGE-THEME", theme }) // fix any