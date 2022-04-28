import { Component,  Input } from '@angular/core';
import { Task, filterEnum } from '../../state/task.model'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeItem, toggleItem, clearDoneItems } from '../../state/task.action';
import { AppState } from '../../state/app.state';
import { selectTabFilter } from '../../state/task.selector';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  store: Store<AppState>;
  tasks$: Observable<Array<Task>>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tasks$ = store.select('tasks');
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