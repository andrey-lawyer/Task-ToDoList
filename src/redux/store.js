import { configureStore } from '@reduxjs/toolkit';

import { toDoReducer } from './toDo/toDoSlice';
import { modalReducer } from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
    modal: modalReducer,
  },
});
