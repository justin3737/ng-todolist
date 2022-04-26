import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, toggleItem } from '../actions/task.action';
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
  }),
  on(removeItem, (state, { ...payload }) => {
    return state.filter((task) => task.id !== payload.id);
  }),
  on(toggleItem, (state, { ...payload }) => {
    return state;
  }),
);


// const tooglefunction = (object:any)=>{
//   return {
//     ...object,
//     status: object.status === TaskStatus.Active ? TaskStatus.Done : TaskStatus.Active
//   }
// }