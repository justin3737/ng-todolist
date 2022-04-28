export enum filterEnum {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE
}

export class Task {
  title : String;
  completed : Boolean;
  id: String;
  constructor(title: String){
      this.title = title;
      this.id = '';
      this.completed = false;
  }
}
