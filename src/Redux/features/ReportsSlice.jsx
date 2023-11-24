import { createSlice} from "@reduxjs/toolkit";


const inicialState = {
    reports: [],
};

export const reportsSlice = createSlice({
    name: "reports",
    initialState: inicialState,
    
    reducers: {
        setReports: ( state, action) => {
            state.reports = action.payload;
        },
    },
});


const { setReports } = reportsSlice.actions;
export { setReports };