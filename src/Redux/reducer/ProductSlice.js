import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products:[],
    carts:[],
};

//fetch products

export const fetchAllProducts = createAsyncThunk(
    "products/fetchProducts",
    async ()=>{
        const res= await axios.get("https://fakestoreapi.com/products");
        return res.data;
    }
);

const ProductSlice = createSlice({
    name:"products/allproducts",
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
            const cartItem = state.products.find((item)=>{
                return item.id === action.payload;
            });
           state.carts = [state.carts,cartItem];
        },

    },
    extraReducers:{
        [fetchAllProducts.fulfilled]:(state,action)=>{
            state.products = action.payload;
    },
    },
});

export const{AddToCart} = ProductSlice.actions;
export default ProductSlice.reducer; 