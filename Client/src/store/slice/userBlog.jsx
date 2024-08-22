import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const userBlog=createAsyncThunk('userBlog',async ()=>{
 const response=await axios.get('http://localhost:8080/userBlog');
 return response.data.blog;
});


const userBlogs=createSlice({
    name: 'userBlogs',
    initialState:{
        status:"pending",
        data:[],
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(userBlog.fulfilled,(state,action)=>{
           state.status="fulfilled";
           state.data=action.payload;
        })
        .addCase(userBlog.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(userBlog.rejected,(state,action)=>{
            state.error=true;
            state.status="rejected";
            console.log(action.error.message);
        })
    }
})
export default userBlogs.reducer;