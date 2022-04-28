import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../state/task.model'

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() tasks:any = [];
  @Input() filteredTasks:any = [];
  @Output() removeTask = new EventEmitter<Task>();
  @Output() clearAll = new EventEmitter<void>();
  @Output() toggleTask = new EventEmitter<Task>();

  constructor() {}

  onRemoveTask(task: Task): void {
    this.removeTask.emit(task);
  }

  onToggle(task: Task): void {
    this.toggleTask.emit(task);
  }

  onClear(): void {
    this.clearAll.emit();
  }

}