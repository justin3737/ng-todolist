import { Task } from '../enum/types';

export interface AppState {
  tasks: Array<Task>;
  tabs: number;
}