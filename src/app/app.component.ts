import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Task } from './store/models/task.model';
import { Observable } from "rxjs";
import  { AppState } from './store/models/app-state.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks$: Observable<Array<Task>>;
  currentTabId: number = 0;

  constructor(store: Store<AppState>) {
    this.tasks$ = store.select('tasks');
  }

  getCurrId(tabID: number) {
    this.currentTabId = tabID;
  }
}
