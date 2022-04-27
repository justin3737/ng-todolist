import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, toggleItem, clearDoneItems } from '../actions/task.action';
import { Task } from '../models/task.model';
import { TaskStatus } from '../enum/types';

export const initialState: Array<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(addItem, (state, { ...payload }) => {
    return [
    ...state,
    {
      id: new Date().getTime().toString(),
      title: payload.title,
      status: TaskStatus.Active
    }]
  }),
  on(removeItem, (state, { ...payload }) => {
    return state.filter((item) => item.id !== payload.id);
  }),
  on(toggleItem, (state, { ...payload }) => {
    return state.map((item) => {
      if(item.id === payload.id) {
        return toogleStatus(item);
      }else{
        return item;
      }
    });
  }),
  on(clearDoneItems, (state) => {
    return state.filter((item) => (item.status === TaskStatus.Active));
  })
);


const toogleStatus = (object:Task) => {
  if (object.status === TaskStatus.Active) {
    return {
      ...object,
      status: TaskStatus.Done
    }
  } else {
    return {
      ...object,
      status: TaskStatus.Active
    }
  }
}