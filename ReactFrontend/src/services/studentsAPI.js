import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 export const studentsApi=createApi({
    reducerPath:'studentsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/students'}),
    tagTypes:['Students'],
    endpoints:(builder)=>({
        addStudent:builder.mutation({
            query:(data)=>({
                url:'/',
                method:"POST",
                body:data    
                
            }),
            invalidatesTags:['Students']
        })
    })
})
export const {useAddStudentMutation}=studentsApi;