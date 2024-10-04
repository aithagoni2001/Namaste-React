import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./CartSlice"


const AppStore = configureStore({
    reducer:{
        cart:cartreducer,
    }
})


export default AppStore;