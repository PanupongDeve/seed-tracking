import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menu.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu']   
}

const rootReducer = combineReducers({
    menu: menuReducer
})

export default persistReducer(persistConfig, rootReducer)

