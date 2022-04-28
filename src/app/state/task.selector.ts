import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Task, filterEnum, TaskStatus } from './task.model';

const selectTasks = (state: AppState) => state.tasks;
const selectFilter = (state: AppState) => state.tabsfilter;

export const selectTabFilter = createSelector(
  selectTasks,
  selectFilter,
  (tasks:Task[], selectFilter) => {
    switch(selectFilter) {
      case filterEnum.SHOW_ALL:
        console.log(0)
        return tasks;
      case filterEnum.SHOW_ACTIVE:
        console.log(1)
        return tasks.filter(task => task.status === TaskStatus.Active);
      case filterEnum.SHOW_DONE:
        console.log(2)
        return tasks.filter(task => task.status === TaskStatus.Done);
      default:
        return tasks;
    }
  }
);