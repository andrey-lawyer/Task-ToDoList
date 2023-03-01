import { createSlice, nanoid } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [],
  },
  reducers: {
    addToDo: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(newToDo) {
        return { payload: { ...newToDo, id: nanoid(), status: false } };
      },
    },
    toggleStatus(state, { payload }) {
      state.items = state.items.map(item => {
        item.status =
          item.id === payload ? (item.status = !item.status) : item.status;
        return { ...item, status: item.status };
      });
    },
  },
});

export const { addToDo, toggleStatus } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
