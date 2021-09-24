export interface IPost {
    _id: string;
    content: string;
    heading: string;
    createdAt: string;
    tags: Array<string>;
    updatedAt: string;
}