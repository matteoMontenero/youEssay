import { configureStore } from "@reduxjs/toolkit";
import VisibilitySlice from './VisibilitySlice'

const store = configureStore({
    reducer:{
visibility : VisibilitySlice
    },
});

export default store;