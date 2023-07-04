export class UpdatePost{
    id:number;
    content: string;
    constructor(obj?: any){
        this.id = obj && obj.id || null;
        this.content = obj && obj.content || null;
    }
}