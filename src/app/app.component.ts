import { Component } from '@angular/core';
import { Task } from './model/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks : Task[];
  currentTabId: number = 0;

  constructor(){
    this.tasks = [];
  }

  getCurrId(tabID: number) {
    this.currentTabId = tabID;
  }
}
