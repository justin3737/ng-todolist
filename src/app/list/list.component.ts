import { Component,  Input } from '@angular/core';
import { TaskStatus, StatusName } from '../enum/enum';
import { Task } from '../model/task';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})

export class ListComponent {
  @Input() tasks: any;
  @Input() currentTabId!: number;

  taskfilter(tasks: any): any {
    let arr = tasks.filter((task: any) => {
      if (this.currentTabId === 0){
        return task;
      } else {
        return task.status === this.currentTabId;
      }
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