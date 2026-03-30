import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const todosApi=createApi({
    reducerPath:'todosApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/todos'}),
    tagTypes:['Todos'],
    endpoints:(builder)=>({
        getAllTodos:builder.query({
            query:()=>'/',
            providesTags:['Todos']
        }),
        addTodo:builder.mutation({
            query:(ntd)=>({
                url:'/',
                method:'POST',
                body:{
                    task:ntd,
                    status:"Not completed"
                }
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodo:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['Todos']
        })
     
    })
})
export const {useGetAllTodosQuery,useAddTodoMutation,useDeleteTodoMutation}=todosApi;