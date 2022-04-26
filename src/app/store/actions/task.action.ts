import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const addItem = createAction('[TASK] ADD ITEM', props<{ title: String }>());
export const removeItem = createAction('[TASK] REMOVE ITEM');
export const clear = createAction('[TASK] CLEAR');
export const changeTab = createAction('[TASK] CHANGE TAB');
export const toggleItem = createAction('[TASK] TOGGLE ITEM');
