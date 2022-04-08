import { Component,  Input } from '@angular/core';
import { TaskStatus, StatusName } from '../enum/enum';
import { Task } from '../model/task';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() tasks: any;
  @Input() currentTabId!: number;

  constructor() {}

  taskfilter(tasks: any): any {
    let arr = tasks.filter((task: any) => {
        return (this.currentTabId === 0 || task.status === this.currentTabId);
    });
    return arr;
  }

  changeStatus(task: Task){
    if (task.status == TaskStatus.Active){
      task.status = TaskStatus.Done;
    } else {
      task.status = TaskStatus.Active;
    }
  }

  getStatusName(task: Task) {
    return StatusName[task.status];
  }

  removeTask(task: Task){
    let index = this.tasks.findIndex((item: { [x: string]: string; }) => item['id'] == task.id);
    this.tasks.splice(index, 1);
  }
}