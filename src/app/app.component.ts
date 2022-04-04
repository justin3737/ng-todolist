import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Todo List';
  list:any[]=[];

  addItem(item:string){
    this.list.push({
      id: uuidv4(),
      name: item
    });
  }

  removeItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
