import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalToDo: false,
  },
  reducers: {
    isModalToDo(state, { payload }) {
      state.modalToDo = payload;
    },
  },
});

export const { isModalToDo } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
