import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, toggleItem, clearDoneItems } from './task.action';
import { Task, TaskStatus, filterEnum } from './data-types';

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
  }),
  // on(changeFilter, (state, { ...payload }) => {
  //   switch(payload.filter){
  //     case filterEnum.SHOW_ALL:
  //       return state;
  //     case filterEnum.SHOW_ACTIVE:
  //       return state.filter((item) => (item.status === TaskStatus.Active));
  //     case filterEnum.SHOW_DONE:
  //       return state.filter((item) => (item.status === TaskStatus.Done));
  //     default:
  //       return state;
  //   }
  // }),
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