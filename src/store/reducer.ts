import * as actionTypes from "./actionTypes"

const initialState = {
    thilla: 0,
    fredrik: 0,
    eirik: 0,
    silje: 0,
}


const reducer = (
    state: any = initialState,
    action: any
    ) => {
    switch (action.type) {
        case actionTypes.UPDATE_EIRIK:
            return {
                ...state,
                eirik: action.payload,
            }
        case actionTypes.UPDATE_SILJE:
            return {
                ...state,
                silje: action.payload,
            }
        case actionTypes.UPDATE_THILLA:
            return {
                ...state,
                thilla: action.payload,
            }
        case actionTypes.UPDATE_FREDRIK:
            return {
                ...state,
                fredrik: action.payload,
            }
    }
    return state
}
  
export default reducer;