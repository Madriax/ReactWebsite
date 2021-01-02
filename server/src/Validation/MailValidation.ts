import * as jf from "joiful";

export class MailValidation {
    @jf
        .string()
        .required()
    firstName: string;

    @jf
        .string()
        .required()
    lastName: string;

    @jf
        .string()
        .email()
        .required()
    email: string;

    @jf
        .string()
        .required()
    subject: string;

    @jf
        .string()
        .required()
    message: string;
}