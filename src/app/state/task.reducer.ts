import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, toggleItem, clearDoneItems } from './task.action';
import { Task } from "./task.model";

export const initialState: Array<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(addItem, (state, { ...payload }) => {
    return [
    ...state,
    {
      id: new Date().getTime().toString(),
      title: payload.title,
      completed: false
    }]
  }),
  on(removeItem, (state, { ...payload }) => {
    return state.filter((item) => item.id !== payload.id);
  }),
  on(toggleItem, (state, { ...payload }) => {
    return state.map((item) => {
      if(item.id === payload.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }else{
        return item;
      }
    });
  }),
  on(clearDoneItems, (state) => {
    return state.filter((item) => (item.completed === false));
  }),
);