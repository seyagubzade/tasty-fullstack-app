import { createSlice, nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action)=>{
        console.log("addToWishlist>>", action.payload)
        console.log("wishlist>>", state.wishlist)
        const target = [...state.wishlist].find((item)=>item._id==action.payload._id)
        if(target){
            toast.error("item already exists in wishlist!")
        }else{
            state.wishlist = [...state.wishlist, action.payload];
            toast.success("item added to wishlist")
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
        }
    },
    removeFromWishlist: (state, action)=>{
        let newArr = JSON.parse(JSON.stringify(state.wishlist))
        const target = state.wishlist.find(item=>item._id==action.payload)
        const indexOfTarget = state.wishlist.indexOf(target)
        newArr.splice(indexOfTarget, 1)
        state.wishlist = newArr
        toast.success("item removed from wishlist")
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    }
  },
});


export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export const wishlistReducer = wishlistSlice.reducer;
