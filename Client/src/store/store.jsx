import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slice/blogSlice.jsx";
import userSlice from "./slice/userSlice.jsx";

const store=configureStore({
    reducer:{
        blogs:blogSlice,
        user:userSlice
    }
});

export default store;