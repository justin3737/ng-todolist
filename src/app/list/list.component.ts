import { Component,  Input } from '@angular/core';
import { AppState, Task, filterEnum } from '../store/data-layer/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeItem, toggleItem, clearDoneItems } from '../store/actions/task.action';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  store: Store<AppState>;
  tasks$: Observable<Array<Task>>;
  tabsfilter$: Observable<filterEnum>;


  constructor(store: Store<AppState>) {
    this.store = store;
    this.tasks$ = store.select('tasks');
    this.tabsfilter$ = store.select('tabsfilter');
  }

  // taskfilter(tasks: Array<Task>): Array<Task> {
  //   let arr = tasks.filter((task) => {
  //       return (this.currentTabId === 0 || task.status === this.currentTabId);
  //   });
  //   return arr;
  // }

  changeStatus(task: Task){
    this.store.dispatch(toggleItem({
      id: task.id
    }));
  }

  removeTask(task: Task){
    this.store.dispatch(removeItem({
      id: task.id
    }));
  }

  clearDoneItems(){
    this.store.dispatch(clearDoneItems());
  }
}