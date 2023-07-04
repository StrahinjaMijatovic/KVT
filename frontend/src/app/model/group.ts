export class Group{
    id:number;
    name:string;
    description:string;
    creationTime:Date;

    constructor(obj?:any){
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.creationTime = obj && obj.creationTime || null;
    }
}