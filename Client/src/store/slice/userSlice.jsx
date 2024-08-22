import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const user=createAsyncThunk('user',async (req,res)=>{
    const response=await axios.get('http://localhost:8080/logUser');
    //console.log(response);
    return response.data.user;
});

const userSlice=createSlice({
    name:'user',
    initialState:{
        status:"pending",
        data:null,
        error:null,
        loading:true
    },
    extraReducers:(builder)=>{
        builder.addCase(user.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(user.pending,(state,action)=>{
          state.status="pending";
          state.loading=true;
        })
        .addCase(user.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            state.loading=false;
        });
    }


})
export default userSlice.reducer;