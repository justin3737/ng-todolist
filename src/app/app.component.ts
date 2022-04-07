import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    document
      .querySelectorAll<HTMLElement>('.def-btn')
      .forEach(node => node.click())
  }
  list:any[]=[
    {
      id: 1234,
      name: 'Learn Angular',
    },
    {
      id: 5678,
      name: 'Learn Angular, Learn Angular, Learn Angular, Learn Angular, Learn Angular, Learn Angular',
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
