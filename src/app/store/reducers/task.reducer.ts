import { createReducer, on } from '@ngrx/store';
import { addItem } from '../actions/task.action';
import { Task } from '../models/task.model';

export const initialState: Array<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(addItem, (state, { ...props }) => {
    console.log(props);
    return state;
  })
);