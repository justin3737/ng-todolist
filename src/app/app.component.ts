import { Component } from '@angular/core';
import { Task } from './model/task';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '../app/enum/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  // ngOnInit() {
  //   document
  //     .querySelectorAll<HTMLElement>('.def-btn')
  //     .forEach(node => node.click())
  // }

  tasks : Task[];

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

  addItem(item:String){
    this.tasks.push({
      id: uuidv4(),
      title: item,
       status: TaskStatus.Active
    });
  }

  // removeItem(id:number){
  //   this.list = this.list.filter(item => item.id !== id);
  // }
}
