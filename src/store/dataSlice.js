import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API Fetch 
export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const response = await fetch("https://amiraabdelhameed.github.io/Data/data/db.json");
    return response.json(); 
});

const dataSlice = createSlice({
    name: "data",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; 
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch data!";
            });
    },
});

export default dataSlice.reducer;