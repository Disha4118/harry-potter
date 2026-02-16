import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Async thunk to fetch Harry Potter books from the API
 * Automatically handles loading states and errors
 */
export const fetchBooks=createAsyncThunk("books/fetchBooks",async()=>{
    const res=await fetch("https://potterapi-fedeperin.vercel.app/en/books/");
    const data=await res.json();
    return data;
})

/**
 * Books slice manages the state for Harry Potter books
 * State includes: books array, loading status, and error messages
 */
const booksSlice=createSlice({
    name:"books",
    initialState:{
        books:[],
        loading:false,
        error:null
    },
    reducers:{},
    // Handle async thunk lifecycle states
    extraReducers:(builder)=>{
        // When fetch starts, set loading to true
        builder.addCase(fetchBooks.pending,(state)=>{
            state.loading=true;
        })
        // When fetch succeeds, store books data and stop loading
        builder.addCase(fetchBooks.fulfilled,(state,action)=>{
            state.loading=false;
            state.books=action.payload;
        })
        // When fetch fails, store error message and stop loading
        builder.addCase(fetchBooks.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default booksSlice.reducer;