import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        trail_name: "Trail Name",
        nearby_city: "Nearby City",
        trail_length: "Trail Length",
        trail_condition: "Trail Condition",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseTrail_name: (state, action) => { state.trail_name = action.payload }, 
        chooseNearby_city: (state, action) => { state.nearby_city = action.payload }, 
        chooseTrail_length: (state, action) => { state.trail_length = action.payload }, 
        chooseTrail_condition: (state, action) => { state.trail_condition = action.payload }, 
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTrail_name, chooseNearby_city, chooseTrail_length, chooseTrail_condition } = rootSlice.actions