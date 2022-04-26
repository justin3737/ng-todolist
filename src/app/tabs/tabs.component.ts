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

  ngOnInit() {
    document.querySelectorAll<HTMLElement>('.tabs-button')[0].classList.add('active');
  }

  changeTab(id: number) {
    for(let i=0; i<document.querySelectorAll<HTMLElement>('.tabs-button').length; i++) {
      document.querySelectorAll<HTMLElement>('.tabs-button')[i].classList.remove('active');
    }
    document.querySelectorAll<HTMLElement>('.tabs-button')[id].classList.add('active');
    this.store.dispatch(changeTab({id}));
  }
}