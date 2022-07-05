
import * as MenuActionTypes from './menu.type'

const INITIAL_STATE = {
    active: 0
}

const menuReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case MenuActionTypes.UPDATE_MENU:
            return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}

export default menuReducer;