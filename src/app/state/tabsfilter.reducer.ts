import { createReducer, on } from '@ngrx/store';
import { changeFilter } from './tabsfilter.action';
import { filterEnum } from './data-types';

export const initialState = filterEnum.SHOW_ALL;

export const tabsfilterReducer = createReducer(
  initialState,
  on(changeFilter, (state, { ...payload }) => {
    return payload.filter;
  })
);