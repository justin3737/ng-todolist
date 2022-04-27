import { Component } from "@angular/core";
import { changeFilter } from "../store/actions/tab.action";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import  { AppState, filterEnum } from '../store/data-layer/types';


@Component({
  selector: "tabs-component",
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  filterEnum = filterEnum;
  store: Store<AppState>;
  tabs$: Observable<number>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tabs$ = this.store.select('tabs');
  }

  onFilter(filter: filterEnum) {
    this.store.dispatch(changeFilter({filter}));
  }
}