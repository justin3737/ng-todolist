import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  ngOnInit() {
    document
      .querySelectorAll<HTMLElement>('.def-btn')
      .forEach(node => node.click())
  }
  list:any[]=[
    {
      id: uuidv4(),
      name: 'Learn Angular',
      isFinished: false
    },
    {
      id: uuidv4(),
      name: 'Learn Angular, Learn Angular, Learn Angular, Learn Angular, Learn Angular, Learn Angular',
      isFinished: false
    }
  ];

  addItem(item:string){
    this.list.push({
      id: uuidv4(),
      name: item,
      isFinished: false
    });
  }

  removeItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
