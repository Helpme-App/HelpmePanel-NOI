import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Marker: {
        lat: 6.2637199,
        lng: -75.5688782,
    },
};

export const MapSlice = createSlice({
    name: "marker",
    initialState,
    reducers: {
       setMark(state, action) {
        const { lat, lng } = action.payload
        return {
            Marker: {
                lat: lat,
                lng: lng
            }
        }
      }
   }
});

export const { setMark } = MapSlice.actions;
export default MapSlice.reducer;