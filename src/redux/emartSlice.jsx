 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData : [],
    userInfo : null,
};

export const emartSlice = createSlice({
    name : "emart" ,
    initialState ,
    reducers: {
        addToCart: (state,action) =>{
           const item = state.productData.find((item) => 
            item._id === action.payload._id
           );
           
           if(item){
            item.quantity += action.payload.quantity
           } else{
               state.productData.push(action.payload) ;
           }
        },
        deleteItem : (state,action) =>{
            state.productData = state.productData.filter(
                (item) =>  item._id !== action.payload
            )
        },
        resetItem : (state) =>{
            state.productData = [];
        },
        increamentQuantity : (state,action) => {
           const item = state.productData.find(
                (item) =>  item._id === action.payload._id
            )
            if(item){
                item.quantity++ ;
            }
        },
        decreamentQuantity : (state,action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if(item.quantity === 1){
                item.quantity = 1;
            } else {
                item.quantity-- ;
            }
        }
    },
});

export const {addToCart ,deleteItem , resetItem, increamentQuantity, decreamentQuantity} = emartSlice.actions ;
export default  emartSlice.reducer ;