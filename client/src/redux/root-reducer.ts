import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menu.reducer';
import tasktabsReducer from './taskTabas/tasktabs.reducer';
import admintabsReducer from './adminTabs/admintabs.reducer';
import requestButtonReducer from './requestButton/request-button.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu', 'tasktabs', 'adminTabs', 'requestButton']   
}

const rootReducer = combineReducers({
    menu: menuReducer,
    tasktabs: tasktabsReducer,
    adminTabs: admintabsReducer,
    requestButton: requestButtonReducer
})

export default persistReducer(persistConfig, rootReducer)

