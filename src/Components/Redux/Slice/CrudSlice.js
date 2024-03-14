import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  fname: "siddharthe",
  namechange:false,
  count:0,
  data:"",
  userdata:[],
  formdata:[]
};



const Curdslice = createSlice({
  name: "curd",
  initialState,
  reducers: {
    // postname: (state) => {
    //   state.fname = "shankar";
    //   state.namechange=false;
    // },
    postname:(state)=>{
      if(state.fname=="siddhartha"){
        state.fname="shankar"
      }
      else{
        state.fname="siddhartha"
      }
    },
    increment:(state)=>{
      state.count=state.count+1
    },
    decrement:(state)=>{
      state.count=state.count-1
    },
    fieldinput:(state,actions)=>{
        // state.data=actions.payload;
        state.userdata.push(actions.payload)
    },
    userform:(state,action)=>{
      state.formdata.push(action.payload)
    }
  },
});

export default Curdslice.reducer;
export const { postname,increment,decrement,fieldinput,userform } = Curdslice.actions;
