import * as adminTabsType from './admintabs.type'

export const touchTab = ( value: number) => {
    return ({
        type: adminTabsType.UPDATE_ADMINTABS,
        payload: value
    })
}