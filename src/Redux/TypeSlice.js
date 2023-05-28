import { createSlice } from "@reduxjs/toolkit";

const initial={
    timeStarted:false,
    timeRemaining: 60,
	detailsData: {
		words: 0,
		characters: 0,
		mistakes: 0,
	},
	selectedParagraph: ''
}

const typeSlice=createSlice({
    name:"type",
    initialState:initial,
    reducers:{
        setPara:(state,action)=>{
            state.selectedParagraph=action.payload;
        },
        start:(state)=>{
            state.timeStarted=true;
        },
        decreaseTime:(state)=>{
            state.timeRemaining-=1;
        },
        setDetails:(state,action)=>{
            state.detailsData=action.payload
        },
        reset:(state,action)=>{
            state=action.payload.initial;
        }
    }
})

export const {setPara, start,decreaseTime,setDetails,reset} =typeSlice.actions;

export default typeSlice.reducer;