const initState = {
    isLoading: false
}
type InitStateType = typeof initState
export const loadingReducer = (state: InitStateType = initState, action: loadingAT): InitStateType => { // fix any
    switch (action.type) {
        case "LOADING-STATUS": {
            return {
                ...state,
                isLoading: action.status
            }
        }
        default:
            return state
    }
}

type loadingAT = ReturnType<typeof loadingAC>
export const loadingAC = (status: boolean) => ({type: "LOADING-STATUS", status} as const)