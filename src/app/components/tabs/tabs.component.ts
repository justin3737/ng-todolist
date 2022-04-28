import { Component, Input } from "@angular/core";
import { changeFilter } from "../../state/tabsfilter.action";
import { Store } from '@ngrx/store';
import  { filterEnum } from '../../state/task.model';
import { AppState } from '../../state/app.state';


@Component({
  selector: "tabs-component",
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  filterEnum = filterEnum;
  store: Store<AppState>;
  @Input() tabsfilter:any = [];

  constructor(store: Store<AppState>) {
    this.store = store;
  }

  onFilter(filter: filterEnum) {
    this.store.dispatch(changeFilter({filter}));
  }
}