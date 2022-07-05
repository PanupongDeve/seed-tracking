import * as MenuActionTypes from './menu.type'

export const touchMenu = ( value: number) => {
    return ({
        type: MenuActionTypes.UPDATE_MENU,
        payload: value
    })
}