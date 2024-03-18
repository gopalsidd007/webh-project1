import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  fname: "siddharthe",
  namechange:false,
  count:0,
  data:"",
  userdata:[],
  formdata:[],
  cartitem:[]
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
    },
    addcart:(state,action)=>{
      state.cartitem.push(action.payload)
    
    },
    rmvcart:(state,action)=>{
      state.cartitem=state.cartitem.filter((item)=>item.id !=action.payload)
    }
   
  },
});
// console.log("The cart item",cartitem);

export default Curdslice.reducer;
export const { postname,increment,decrement,fieldinput,userform,addcart,rmvcart } = Curdslice.actions;
