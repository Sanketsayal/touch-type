import { configureStore } from "@reduxjs/toolkit";
import typeReducer from "./TypeSlice";

const store=configureStore({
    reducer:{
        type:typeReducer,
    }
})

export default store