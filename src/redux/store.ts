import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { emergenciasApi } from "./services/features/emergenciasApi";
import { agentesApi } from "./services/features/agentesApi";
import markReducer from "@/redux/services/features/MapSlice";

export const store = configureStore({
    reducer: {
    markReducer,
    [emergenciasApi.reducerPath]: emergenciasApi.reducer,
    [agentesApi.reducerPath]: agentesApi.reducer,
},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        emergenciasApi.middleware,
        agentesApi.middleware,),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
    