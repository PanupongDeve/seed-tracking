
import * as requestButtonTypes from './request-button.type'

const INITIAL_STATE = {
    isCancel: false
}

const menuReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case requestButtonTypes.REQUEST_BUTTON_CLICK:
            return {
                ...state,
                isCancel: !state.isCancel
            }
        default:
            return state;
    }
}

export default menuReducer;