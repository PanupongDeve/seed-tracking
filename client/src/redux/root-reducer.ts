import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menu.reducer';
import tasktabsReducer from './taskTabas/tasktabs.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu', 'tasktabs']   
}

const rootReducer = combineReducers({
    menu: menuReducer,
    tasktabs: tasktabsReducer
})

export default persistReducer(persistConfig, rootReducer)

