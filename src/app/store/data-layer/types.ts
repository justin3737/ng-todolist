export enum TaskStatus {
  Active = 1,
  Done = 2
}

export enum filterEnum {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE
}

export class Task {
  title : String;
  status : TaskStatus;
  id: String;
  constructor(title: String){
      this.title = title;
      this.status = TaskStatus.Active;
      this.id = '';
  }
}

export interface AppState {
  tasks: Array<Task>;
  tabs: number;
  tabsfilter: filterEnum;
}
