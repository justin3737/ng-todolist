import { Component,  Input } from '@angular/core';
import { TaskStatus } from '../enum/enum';
import { Task } from '../model/task';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html'
})

export class ListComponent {
  @Input() tasks: any;

  changeStatus(task : Task){
    if(task.status == TaskStatus.Active){
      task.status = TaskStatus.Done;
    } else {
      task.status = TaskStatus.Active;
    }
  }

  removeItem(item: object){
    console.log(item)
    //this.list.filter(item => item.id !== id);
  }
}