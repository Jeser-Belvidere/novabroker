export interface INews {
    title: string;
    description: string;
    texts: {
        heading: string;
        paragraph: string;
    }[];
    date: string;
    imgSrc: string;
    tags: string[];
    listIndex: number;
}