import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urlDomain = 'http://localhost:3001';

export const agentesApi = createApi({
    reducerPath: 'agentesApi',
    baseQuery: fetchBaseQuery({ baseUrl:`${urlDomain}/api` }),
    endpoints: (builder) => ({
        getAgentes: builder.query({
            query: () => '/agentes',
        }),
        createAgentes: builder.mutation({
            query: (newAgent) => ({
                url: '/agentes',
                method: 'POST',
                body: newAgent,
            }),
        }),
        modifyAgentes: builder.mutation({
            query: (id, ...newAgent) => ({
                url: `/agentes/${id}`,
                method: 'PUT',
                body: newAgent,
            }),
        }),
        deleteAgentes: builder.mutation({
            query: (id) => ({
                url: `/agentes/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetAgentesQuery, useCreateAgentesMutation, useModifyAgentesMutation, useDeleteAgentesMutation } = agentesApi;
