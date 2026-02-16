import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Async thunk to fetch spells with pagination support
 * Fetches 6 spells per page from the API
 * @param {number} page - The page number to fetch
 */
export const fetchSpells=createAsyncThunk("spells/fetchSpells",async( page )=>{
    console.log("Fetching spells for page:", page);
    const res=await fetch(`https://potterapi-fedeperin.vercel.app/en/spells/?max=6&page=${page}`);
    const data=await res.json();
    return data;
})

/**
 * Spells slice manages the state for Harry Potter spells with pagination
 * State includes: spells array, loading status, and error messages
 */
const SpellSlice=createSlice({
    name:"spells",
    initialState:{
        spells:[],
        loading:false,
        error:null
    },
    reducers:{},
    // Handle async thunk lifecycle states
    extraReducers:(builder)=>{
        // When fetch starts, set loading to true
        builder.addCase(fetchSpells.pending,(state)=>{
            state.loading=true;
        })
        // When fetch succeeds, store spells data and stop loading
        builder.addCase(fetchSpells.fulfilled,(state,action)=>{
            state.loading=false;
            state.spells=action.payload;
        })
        // When fetch fails, store error message and stop loading
        builder.addCase(fetchSpells.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default SpellSlice.reducer;