import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const blogs=createAsyncThunk('blogs',async (req,res)=>{
    const response=await axios.get('http://localhost:8080/get');
    // console.log(response);
    return response.data.result;
});

const blogSlice=createSlice({
    name:'blog',
    initialState:{
        status:"pending",
        data:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(blogs.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.data=action.payload;
        })
        .addCase(blogs.pending,(state,action)=>{
          state.status="pending";
        })
        .addCase(blogs.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }


})
export default blogSlice.reducer;