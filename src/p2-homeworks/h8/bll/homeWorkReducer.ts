import {UserType} from "../HW8";

type ActionType = SortType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case "sort": {
            const copyState = [...state]
            if (action.payload === "up") {
                copyState.sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === "down") {
                copyState.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return copyState
        }
        case "check": {
            return [...state.filter(el => el.age >= action.payload)]
        }
        default:
            return state
    }
}

type SortType = {
    type: "sort"
    payload: "up" | "down"
}
type CheckType = {
    type: "check"
    payload: number
}