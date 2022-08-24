export class Item {
    id: string
    title: string
    content: string
    image: string
    subjectId: string

    constructor(item: Item){
        this.id = item.id;
        this.title = item.title;
        this.content = item.content;
        this.image = item.image;
        this.subjectId = item.subjectId;
    }
}