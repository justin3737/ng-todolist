import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Task, filterEnum, TaskStatus } from './state/task.model';
import { Observable } from "rxjs";
import { AppState } from './state/app.state';
import { changeFilter } from './state/tabsfilter.action';
import { addItem } from './state/task.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks$: Observable<Array<Task>>;
  tabsfilter$: Observable<filterEnum>;
  filteredTasks$: Observable<Array<Task>>;
  store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tasks$ = store.select('tasks');
    this.tabsfilter$ = store.select('tabsfilter');
    this.filteredTasks$ = store.select(({ tasks, tabsfilter }) => {
      switch (tabsfilter) {
        case filterEnum.SHOW_ACTIVE:
          return tasks.filter((t) => t.status === TaskStatus.Active);
        case filterEnum.SHOW_DONE:
          return tasks.filter((t) => t.status === TaskStatus.Done);
        default:
          return tasks;
      }
    });
  }

  filter(filter: filterEnum): void {
    this.store.dispatch(changeFilter({filter}));
  }

  addTodo(text: string): void {
    this.store.dispatch(addItem({
      title: text
    }));
  }

}
