import { configureStore } from "@reduxjs/toolkit";
import rootreducer from './createSlice'

export const store=configureStore({
    reducer:{
        data:rootreducer
    }
})