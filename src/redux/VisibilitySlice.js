import { createSlice } from "@reduxjs/toolkit";

const VisibilitySlice = createSlice({
    name: "visibility",
    initialState: {
        isVisible: false
    },
    reducers: {
        changeVisibility: (state) => {
            state.isVisible = true;
        },
    }
})

export const { changeVisibility } = VisibilitySlice.actions;
export default VisibilitySlice.reducer;