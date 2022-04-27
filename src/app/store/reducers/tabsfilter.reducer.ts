import { createReducer, on } from '@ngrx/store';
import { changeFilter } from '../actions/tab.action';
import { filterEnum } from '../data-layer/types';

export const initialState = filterEnum.SHOW_ALL;

export const tabsfilterReducer = createReducer(
  initialState,
  on(changeFilter, (state, { ...payload }) => {
    return payload.filter;
  })
);