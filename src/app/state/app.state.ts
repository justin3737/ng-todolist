import { Task, filterEnum }  from "./data-types";

export interface AppState {
  tasks: Array<Task>;
  tabsfilter: filterEnum
}