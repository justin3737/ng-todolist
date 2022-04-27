import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Task } from './store/enum/types';
import { Observable } from "rxjs";
import  { AppState } from './store/models/app-state.model';
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
