import { Component, Input } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '../enum/enum';

@Component({
  selector: "textbox-component",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"]
})

export class TextBoxComponent {
  @Input() tasks: any;

  constructor() {}

  addItem(task:String){
    this.tasks.push({
      id: uuidv4(),
      title: task,
       status: TaskStatus.Active
    });
  }
}