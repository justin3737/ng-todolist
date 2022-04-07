import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '../enum/enum';

export class Task{
    title : String;
    status : TaskStatus;
    id;
    constructor(title: String){
        this.title = title;
        this.status = TaskStatus.Active;
        this.id = uuidv4();
    }
}