import { Component,  Input } from '@angular/core';
import { Task, TaskStatus } from '../../state/task.model'
import { Store } from '@ngrx/store';
import { removeItem, toggleItem, clearDoneItems } from '../../state/task.action';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  store: Store<AppState>;
  TaskStatus = TaskStatus;
  @Input() tasks:any = [];

  constructor(store: Store<AppState>) {
    this.store = store;
  }

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