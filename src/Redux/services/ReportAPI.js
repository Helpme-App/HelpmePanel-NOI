import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const reportsAPI = createApi({

    reducerPath: 'reportsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://helpmeappco.onrender.com/'
    }),

     endpoints: (builder)=>({
       getReports: builder.query({
           query: ()=>`reports`
       })
    })
})

export const {useGetReportsQuery} = reportsAPI