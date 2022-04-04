import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Todo List';
  items = [
    {
      id: 0,
      name: 'Item 1',
    },
    {
      id: 1,
      name: 'Item 2',
    }
  ]
}
