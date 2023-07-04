export class Post {
    id:number;
    content:string;
    username:string;
    creationTime:Date;

    constructor(obj?: any){
        this.id = obj && obj.id || null;
        this.username = obj && obj.username || null;
        this.content = obj && obj.content || null;
        this.creationTime = obj && obj.creationTime || null;
    }
}

