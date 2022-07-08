import * as requestButtonTypes from './request-button.type'

export const handleRequestClick = () => {
    return ({
        type: requestButtonTypes.REQUEST_BUTTON_CLICK
    })
}