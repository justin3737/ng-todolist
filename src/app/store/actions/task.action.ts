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

export const clearDoneItems =
  createAction('[TASK] CLEAR DONE ITEMS');

export const changeTab =
  createAction(
    '[TASK] CHANGE TAB',
    props<{ id: Number }>()
  );

export const toggleItem =
  createAction(
    '[TASK] TOGGLE ITEM',
    props<{ id: String }>()
  );
