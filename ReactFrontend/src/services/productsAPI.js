import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi=createApi({
    reducerPath:'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/products'}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=> '/'
        }),
        getProductById:builder.query({
            query:(id)=>`/${id}`
        })
          
        
    })
})
export const {useGetAllProductsQuery,useGetProductByIdQuery}=productsApi;