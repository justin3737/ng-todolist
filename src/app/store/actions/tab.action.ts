import { createAction, props } from '@ngrx/store';
import { filterEnum } from '../data-layer/types';

export const changeFilter =
  createAction(
    '[TAB] CHANGE FILTER',
    props<{ filter: filterEnum }>()
  );
