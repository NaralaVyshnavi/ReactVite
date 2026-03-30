import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/TodoList/todolistSlice'
import { productsApi } from '../services/productsAPI'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todosApi } from '../services/todosAPI'
import { studentsApi } from '../services/studentsAPI'


export const store=configureStore({
        reducer:{
                counterReducer,
                todolistReducer,
                [productsApi.reducerPath]:productsApi.reducer,
                [todosApi.reducerPath]:todosApi.reducer,
                [studentsApi.reducerPath]:studentsApi.reducer
        },
        middleware:(getDefaultMiddleware)=>{
                return getDefaultMiddleware().concat(productsApi.middleware,todosApi.middleware,studentsApi.middleware)
        }
})
export default store
setupListeners(store.dispatch)