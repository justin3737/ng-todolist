import { createAction, props } from '@ngrx/store';

export const addItem =
  createAction(
    '[TASK] ADD ITEM',
    props<{ title: String }>()
  );

export const removeItem =
  createAction(
    '[TASK] REMOVE ITEM',
    props<{ id: String }>()
  );

export const clear =
  createAction('[TASK] CLEAR');

export const changeTab =
  createAction('[TASK] CHANGE TAB');

export const toggleItem =
  createAction(
    '[TASK] TOGGLE ITEM',
    props<{ id: String }>()
  );
