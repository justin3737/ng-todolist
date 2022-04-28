import { Component } from "@angular/core";
import { addItem } from '../../state/task.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';

@Component({
  selector: "textbox-component",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.css"]
})

export class TextBoxComponent {
  value: string = ''
  store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.store = store;
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