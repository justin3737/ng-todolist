import { Component,  Input } from '@angular/core';
import { Task } from '../store/models/task.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import  { AppState } from '../store/models/app-state.model';
import { removeItem, toggleItem, clearDoneItems } from '../store/actions/task.action';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  store: Store<AppState>;
  tasks$: Observable<Array<Task>>;
  @Input() currentTabId!: number;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tasks$ = store.select('tasks');
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

  // getStatusName(task: Task) {
  //   return StatusName[task.status];
  // }

  // getDoingCount(): number {
  //   return this.tasks.filter((task) => {
  //     return (task.status === TaskStatus.Active);
  //   }).length;
  // }

  removeTask(task: Task){
    this.store.dispatch(removeItem({
      id: task.id
    }));
  }

  clearDoneItems(){
    this.store.dispatch(clearDoneItems());
  }
}