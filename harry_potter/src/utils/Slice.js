import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks=createAsyncThunk("books/fetchBooks",async()=>{
    const res=await fetch("https://potterapi-fedeperin.vercel.app/en/books/");
    const data=await res.json();
    return data;
})

const booksSlice=createSlice({
    name:"books",
    initialState:{
        books:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBooks.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchBooks.fulfilled,(state,action)=>{
            state.loading=false;
            state.books=action.payload;
        })
        builder.addCase(fetchBooks.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default booksSlice.reducer;