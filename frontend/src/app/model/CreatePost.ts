export class CreatePost{
    username:string;
    content:string;

    constructor(obj?: any){
        this.username = obj && obj.username || null;
        this.content = obj && obj.content || null;
    }
}