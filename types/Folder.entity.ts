export type MyFolder = {
    _id?: string,
    name: string,
    subfolders?: MyFolder[],
    metadata?: string;
};
