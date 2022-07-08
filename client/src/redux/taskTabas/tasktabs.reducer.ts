
import * as taskTabsType from './tasktabs.type'

const INITIAL_STATE = {
    active: 0
}

const menuReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case taskTabsType.UPDATE_TABTASKS:
            return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}

export default menuReducer;