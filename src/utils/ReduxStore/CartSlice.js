import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        additems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeitems:(state,action)=>{
            state.items.pop();

        },
        clearcart:(state,action)=>{
            state.items.length = 0;

        },
    }
})

// console.log(CartSlice);


export const{additems,removeitems,clearcart}= CartSlice.actions;

export default CartSlice.reducer;