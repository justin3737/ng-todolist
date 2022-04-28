import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "textbox-component",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"]
})

export class TextBoxComponent {
  value: string = ''
  @Output() addTask= new EventEmitter<string>();

  constructor() {}

  onAddTodo(): void {
    if (!this.value.length) return;

    this.addTask.emit(this.value);
    this.value = '';
  }
}