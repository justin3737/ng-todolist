import { createAction, props } from '@ngrx/store';
import { filterEnum } from '../store/data-layer/types';

export const changeFilter =
  createAction(
    '[FILTER] CHANGE FILTER',
    props<{ filter: filterEnum }>()
  );
