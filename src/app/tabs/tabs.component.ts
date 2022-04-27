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
  tabsfilter$: Observable<filterEnum>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tabsfilter$ = this.store.select('tabsfilter');
  }

  onFilter(filter: filterEnum) {
    this.store.dispatch(changeFilter({filter}));
  }
}