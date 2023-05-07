import { createSlice } from "@reduxjs/toolkit";

const colors = [
    {
        id: 1,
        name: "pink",
        isChecked: false
    },
    {
        id: 2,
        name: "purple",
        isChecked: false
    },
    {
        id: 3,
        name: "red",
        isChecked: false
    },
    {
        id: 4,
        name: "blue",
        isChecked: false
    },
    {
        id: 5,
        name: "green",
        isChecked: false
    }
];

const initialState = {
    colors,
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
    selectedColor: null,
    search: "",
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("items", JSON.stringify(state.items));
        },
        deleteNote: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        findNote: (state, action) => {

            state.search = action.payload
        },
        changeColor: (state, action) => {
            const { id } = action.payload;
            const filtered = state.colors.find((color) => color.isChecked === true)
            if (typeof filtered != 'undefined') {
                filtered.isChecked = false;
            }
            const color = state.colors.find((color) => color.id === id);
            color.isChecked = true;
            state.selectedColor = color;
        }
    }
})

export const { addNote, deleteNote, findNote, changeColor } = noteSlice.actions;
export default noteSlice.reducer;