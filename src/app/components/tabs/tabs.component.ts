import { Component, Input, Output, EventEmitter, } from "@angular/core";
import  { filterEnum } from '../../state/task.model';


@Component({
  selector: "tabs-component",
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  filterEnum = filterEnum;
  @Input() tabsfilter:any = [];
  @Output() filter = new EventEmitter<filterEnum>();

  constructor() {}

  onFilter(filter: filterEnum) {
    this.filter.emit(filter);
  }
}