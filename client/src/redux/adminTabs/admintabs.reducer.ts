
import * as adminTabsType from './admintabs.type'

const INITIAL_STATE = {
    active: 0
}

const menuReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case adminTabsType.UPDATE_ADMINTABS:
            return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}

export default menuReducer;