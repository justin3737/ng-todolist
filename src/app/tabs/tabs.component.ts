import { Component } from "@angular/core";
import { changeTab } from "../store/actions/tab.action";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import  { AppState } from '../store/models/app-state.model';


@Component({
  selector: "tabs-component",
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  store: Store<AppState>;
  tabs$: Observable<number>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tabs$ = this.store.select('tabs');
  }

  changeTab(id: number) {
    this.store.dispatch(changeTab({id}));
  }
}