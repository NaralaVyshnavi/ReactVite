import { createStore,combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todolistReducer from './todolistReducer';
import productReducer from './productReducer';
 export const store=createStore(combineReducers(
    {
        counterReducer,todolistReducer,productReducer
    }
))
export default store;