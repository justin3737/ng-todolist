import { createAction, props } from '@ngrx/store';
import { filterEnum } from './task.model';

export const changeFilter =
  createAction(
    '[FILTER] CHANGE FILTER',
    props<{ filter: filterEnum }>()
  );
