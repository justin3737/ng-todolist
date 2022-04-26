import { createReducer, on } from '@ngrx/store';
import { addItem } from '../actions/task.action';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '../../enum/enum';

export const initialState: Array<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(addItem, (state, { ...payload }) => {
    return [
    ...state,
    {
      id: uuidv4(),
      title: payload.title,
      status: TaskStatus.Active
    }]
  })
);