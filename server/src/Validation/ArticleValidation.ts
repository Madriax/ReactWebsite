import * as jf from 'joiful';

export class ArticleValidation {
    @jf
        .string()
        .required()
    title: string;

    @jf
        .string()
        .required()
    imagePath: string;

    @jf
        .string()
        .required()
    content: string;
}