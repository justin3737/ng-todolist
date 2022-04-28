import { createReducer, on } from '@ngrx/store';
import { changeFilter } from '../../state/tabsfilter.action';
import { filterEnum } from '../data-layer/types';

export const initialState = filterEnum.SHOW_ALL;

export const tabsfilterReducer = createReducer(
  initialState,
  on(changeFilter, (state, { ...payload }) => {
    return payload.filter;
  })
);