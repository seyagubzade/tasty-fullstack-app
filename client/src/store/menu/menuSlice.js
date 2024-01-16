import { createSlice, nanoid } from "@reduxjs/toolkit";
import { AddNew, DeleteById, GetAll, GetById } from "./api_actions";
import toast from "react-hot-toast";

const initialState = {
  menu: [],
  loading: false,
  error: null,
  currentMenuItem: null,
};

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      // GetAll
      .addCase(GetAll.fulfilled, (state, action) => {
        state.menu = action.payload;
        state.loading = false;
      })
      .addCase(GetAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //   GetById
      .addCase(GetById.fulfilled, (state, action) => {
        state.currentMenuItem = action.payload;
        state.loading = false;
      })
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //   AddNew
      .addCase(AddNew.fulfilled, (state, action) => {
        state.menu = [...state.menu, action.payload];
        state.loading = false;
        toast.success("New item added")
      })
      .addCase(AddNew.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddNew.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //   DeleteById
      .addCase(DeleteById.fulfilled, (state, action) => {
        state.menu = action.payload;
        state.loading = false;
      })
      .addCase(DeleteById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const menuReducer = menuSlice.reducer;
