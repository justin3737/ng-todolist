import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Task } from './store/data-layer/types';
import { Observable } from "rxjs";
import { AppState } from './state/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks$: Observable<Array<Task>>;

  constructor(store: Store<AppState>) {
    this.tasks$ = store.select('tasks');
  }
}
