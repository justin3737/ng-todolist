import { createAction, props } from '@ngrx/store';
import { filterEnum } from './data-types';

export const changeFilter =
  createAction(
    '[FILTER] CHANGE FILTER',
    props<{ filter: filterEnum }>()
  );
