import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html'
})

export class ListComponent {
  @Input() list: any;
  @Output() remove = new EventEmitter();

  @Output() removeItem(id:number){
    console.log(id)
    //this.list.filter(item => item.id !== id);
  }
}