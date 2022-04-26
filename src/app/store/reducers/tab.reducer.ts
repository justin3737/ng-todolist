import { createReducer, on } from '@ngrx/store';
import { changeTab } from '../actions/tab.action';

export const initialState = 0;

export const tabReducer = createReducer(
  initialState,
  on(changeTab, (state, { ...payload }) => {
    return payload.id;
  })
);