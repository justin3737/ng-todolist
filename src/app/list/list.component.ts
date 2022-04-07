import { Component,  Input } from '@angular/core';
import { TaskStatus } from '../enum/enum';
import { Task } from '../model/task';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})

export class ListComponent {
  @Input() tasks: any;

  changeStatus(task: Task){
    if (task.status == TaskStatus.Active){
      task.status = TaskStatus.Done;
    } else {
      task.status = TaskStatus.Active;
    }
  }

  removeTask(task: Task){
    let index = this.tasks.findIndex((item: { [x: string]: string; }) => item['id'] == task.id);
    this.tasks.splice(index, 1);
  }
}