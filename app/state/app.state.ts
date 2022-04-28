import { Task, filterEnum } from "./task.model";

export interface AppState {
  tasks: Array<Task>;
  tabsfilter: filterEnum
}