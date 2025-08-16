export interface IPost {
    id: string;
    title: string;
} 
export interface IPostWithAuthor extends IPost {
    author: string;
}