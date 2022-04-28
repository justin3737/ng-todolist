import { Task, filterEnum }  from "../store/data-layer/types";

export interface AppState {
  tasks: Array<Task>;
  tabsfilter: filterEnum
}