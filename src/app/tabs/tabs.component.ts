import { Component } from "@angular/core";

@Component({
  selector: "tabs-component",
  templateUrl: "./tabs.component.html",
  styleUrls: ['./tabs.css']
})

export class TabsComponent {
  constructor() {}

  ngOnInit() {
    document.querySelectorAll<HTMLElement>('.tabs-button')[0].classList.add('active');
  }

  changeTab(id: number) {
    for(let i=0; i<document.querySelectorAll<HTMLElement>('.tabs-button').length; i++) {
      document.querySelectorAll<HTMLElement>('.tabs-button')[i].classList.remove('active');
    }
    document.querySelectorAll<HTMLElement>('.tabs-button')[id].classList.add('active');
  }
}