 import { configureStore } from "@reduxjs/toolkit";
 import { setReports } from "./features/ReportsSlice";
 import { reportsAPI } from "./services/ReportAPI";
 import { setupListeners } from '@reduxjs/toolkit/dist/query'
 import markReducer from "./features/MapSlice";


 const store = configureStore({
     reducer: {
        markReducer,
        setReports,
        [reportsAPI.reducerPath]: reportsAPI.reducer
     },

     middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware()
     .concat([reportsAPI.middleware]),
 })

 setupListeners(store.dispatch)

 export default store; 
 
 export const RootState = store.getState
 export const AppDispatch = store.dispatch