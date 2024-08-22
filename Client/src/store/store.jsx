import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slice/blogSlice.jsx";
import userSlice from "./slice/userSlice.jsx";
import userBlogs from "./slice/userBlog.jsx";

const store=configureStore({
    reducer:{
        blogs:blogSlice,
        user:userSlice,
        userB:userBlogs
    }
});

export default store;