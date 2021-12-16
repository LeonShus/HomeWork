const initState = {
    isLoading: false
}
export type LoadingInitStateType = typeof initState
export const loadingReducer = (state: LoadingInitStateType = initState, action: loadingAT): LoadingInitStateType => { // fix any
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