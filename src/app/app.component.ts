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
    this.tasks = [
      {
        id: uuidv4(),
        title: 'Learn Angular',
        status: TaskStatus.Active
      },
      {
        id: uuidv4(),
        title: 'Learn Angular, Learn Angular, Learn Angular, Learn Angular, Learn Angular, Learn Angular',
        status: TaskStatus.Active
    }];
  }

  getCurrId(tabID: number) {
    this.currentTabId = tabID;
  }

  addItem(item:String){
    this.tasks.push({
      id: uuidv4(),
      title: item,
       status: TaskStatus.Active
    });
  }
}
