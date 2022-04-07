import { Component } from '@angular/core';
import { Task } from './model/task';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '../app/enum/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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

  addItem(task:String){
    this.tasks.push({
      id: uuidv4(),
      title: task,
       status: TaskStatus.Active
    });
  }
}
