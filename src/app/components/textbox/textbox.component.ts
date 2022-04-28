import { Component } from "@angular/core";
import { Task } from "../../store/data-layer/types";
import { addItem } from '../../store/actions/task.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';

@Component({
  selector: "textbox-component",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"]
})

export class TextBoxComponent {
  tasks$: Observable<Array<Task>>;
  value: string = ''
  store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.store = store;
    this.tasks$ = store.select('tasks');
  }

  addItem(){
    if (this.value.length > 0) {
      this.store.dispatch(addItem({
        title: this.value
      }));
      this.value = '';
    }
  }
}