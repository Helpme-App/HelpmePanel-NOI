import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = process.env.NEXT_PUBLIC_API

export const emergenciasApi = createApi({
    reducerPath: 'emergenciasApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API}`}),
    endpoints: (builder) => ({
    getEmergencias: builder.query<any, null >({
        query: () => '/reports',
    }),
    }),
});



export const { useGetEmergenciasQuery } = emergenciasApi;
