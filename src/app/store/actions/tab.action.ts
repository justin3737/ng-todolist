import { createAction, props } from '@ngrx/store';

export const changeTab =
  createAction(
    '[TAB] CHANGE TAB',
    props<{ id: number }>()
  );