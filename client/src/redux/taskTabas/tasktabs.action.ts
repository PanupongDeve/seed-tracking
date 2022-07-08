import * as taskTabsType from './tasktabs.type'

export const touchTab = ( value: number) => {
    return ({
        type: taskTabsType.UPDATE_TABTASKS,
        payload: value
    })
}