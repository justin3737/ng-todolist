import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Task, filterEnum } from './state/task.model';
import { Observable } from "rxjs";
import { AppState } from './state/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks$: Observable<Array<Task>>;
  tabsfilter$: Observable<filterEnum>;

  constructor(store: Store<AppState>) {
    this.tasks$ = store.select('tasks');
    this.tabsfilter$ = store.select('tabsfilter');
  }
}
