import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSpells=createAsyncThunk("spells/fetchSpells",async( page )=>{
    console.log("Fetching spells for page:", page);
    const res=await fetch(`https://potterapi-fedeperin.vercel.app/en/spells/?max=6&page=${page}`);
    const data=await res.json();
    return data;
})

const SpellSlice=createSlice({
    name:"spells",
    initialState:{
        spells:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSpells.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchSpells.fulfilled,(state,action)=>{
            state.loading=false;
            state.spells=action.payload;
        })
        builder.addCase(fetchSpells.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default SpellSlice.reducer;