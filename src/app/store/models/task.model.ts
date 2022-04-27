import { TaskStatus } from '../enum/types';

export class Task{
    title : String;
    status : TaskStatus;
    id: String;
    constructor(title: String){
        this.title = title;
        this.status = TaskStatus.Active;
        this.id = '';
    }
}