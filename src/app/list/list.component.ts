import { Component,  Input } from '@angular/core';
import { TaskStatus, StatusName } from '../enum/enum';
import { Task } from '../store/models/task.model';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() tasks: Array<Task> = [];
  @Input() currentTabId!: number;

  constructor() {}

  taskfilter(tasks: Array<Task>): Array<Task> {
    let arr = tasks.filter((task) => {
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

  getDoingCount(): number {
    return this.tasks.filter((task) => {
      return (task.status === TaskStatus.Active);
    }).length;
  }

  removeTask(task: Task){
    let index = this.tasks.findIndex((item) => item['id'] == task.id);
    this.tasks.splice(index, 1);
  }

  removeDoneTasks(): void {
    this.tasks = this.tasks.filter((task) => {
      return (task.status === TaskStatus.Active);
    });
  }
}