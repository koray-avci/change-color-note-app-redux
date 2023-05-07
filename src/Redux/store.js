import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./note/noteSlice"

export const store = configureStore({
    reducer: {
        note: noteReducer,
    }
})