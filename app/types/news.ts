export interface INewsFeed {
    [key: number]: INews;
}

interface INewsBlock {
    tag: 'text' | 'heading' | 'table' | 'image' | 'list' | 'quote';
}

export interface INewsImage extends INewsBlock {
    tag: 'image';
    src: string;
    alt: string;
}

export interface INewsTableColumn {
    key: string;
    shownName: string;
}

export interface INewsTableData {
    [key: string]: string;
}

export interface INewsTable extends INewsBlock {
    tag: 'table';
    caption? : string
    columns: INewsTableColumn[];
    data: INewsTableData[];
}

export interface INewsText extends INewsBlock {
    tag: 'text';
    heading?: string;
    paragraph: string;
}

export interface INews {
    title: string;
    description: string;
    newsBlocks: (INewsText | INewsImage | INewsTable)[];
    date: string;
    imgSrc: string;
    tags: string[];
    listIndex: number;
}