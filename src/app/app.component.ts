import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Task, filterEnum } from './state/task.model';
import { Observable } from "rxjs";
import { AppState } from './state/app.state';
import { changeFilter } from './state/tabsfilter.action';
import { addItem, toggleItem, removeItem, clearDoneItems } from './state/task.action';
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
        case filterEnum.SHOW_ALL:
          return tasks;
        case filterEnum.SHOW_ACTIVE:
          return tasks.filter((t) => t.completed === false);
        case filterEnum.SHOW_DONE:
          return tasks.filter((t) => t.completed === true);
        default:
          return tasks;
      }
    });
  }

  filter(filter: filterEnum): void {
    this.store.dispatch(changeFilter({filter}));
  }

  addTask(text: string): void {
    this.store.dispatch(addItem({
      title: text
    }));
  }

  removeTask(task: Task): void{
    this.store.dispatch(removeItem({
      id: task.id
    }));
  }

  toggleTask(task: Task): void{
    this.store.dispatch(toggleItem({
      id: task.id
    }));
  }

  onClear(): void{
    this.store.dispatch(clearDoneItems());
  }
}
