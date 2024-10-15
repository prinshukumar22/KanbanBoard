import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  dataSelected: [],
  user: null,
  tickets: [],
  users: [],
  message: null,
};

export const dataSlice = createReducer(initialState, (builder) => {
  builder
    .addCase('dataRequest', (state) => {
      state.loading = true;
    })
    .addCase('dataSuccess', (state, action) => {
      state.loading = false;
      state.tickets = action.payload.tickets;
      state.users = action.payload.users;
    })
    .addCase('dataFailure', (state) => {
      state.loading = false;
      state.tickets = [];
      state.users = [];
    })
    .addCase('dataSelectRequest', (state) => {
      state.loading = true;
      state.dataSelected = [];
      state.user = null;
      state.message = null;
    })
    .addCase('dataSelectSuccess', (state, action) => {
      state.loading = false;
      state.dataSelected = action.payload.dataSelected;
      state.user = action.payload.user;
      state.message = null;
    })
    .addCase('dataSelectFailure', (state, action) => {
      state.loading = false;
      state.dataSelected = [];
      state.user = null;
      state.message = action.payload.message;
    });
});
