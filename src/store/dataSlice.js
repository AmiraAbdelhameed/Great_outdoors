import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API Fetch Action
export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const response = await fetch("https://amiraabdelhameed.github.io/Data/data/db.json");
    // const response = await fetch("http://localhost:5000/Portofolio");
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
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to fetch data!";
            });
    },
});

export default dataSlice.reducer;