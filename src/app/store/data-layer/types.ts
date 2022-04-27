const enum TaskStatus {
  Active = 1,
  Done = 2
}

const enum TodoFilterEnum {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE
}

class Task {
  title : String;
  status : TaskStatus;
  id: String;
  constructor(title: String){
      this.title = title;
      this.status = TaskStatus.Active;
      this.id = '';
  }
}

interface AppState {
  tasks: Array<Task>;
  tabs: number;
  tabsfilter: TodoFilterEnum;
}

export { AppState, Task, TaskStatus, TodoFilterEnum }