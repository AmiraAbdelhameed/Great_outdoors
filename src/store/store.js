import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"; // Import the slice

export const store = configureStore({
    reducer: {
        data: dataReducer, // Register the reducer
    },
});

export default store;