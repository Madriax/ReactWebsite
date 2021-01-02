import MailgunProvider from "../Provider/MailgunProvider";
import config from "../config/app.config";
import {MailValidation} from "../Validation/MailValidation";
import * as jf from "joiful";
import {CustomError} from "../utils/CustomError";

/**
 * Send a mail to myself
 * @param contact Information about contact form
 */
export async function sendMail(contact: MailValidation) {
    const { error } = jf.validateAsClass(contact, MailValidation);
    if (error) throw new CustomError(error.message, 400);

    const {firstName, lastName, email, subject, message} = contact
    return await MailgunProvider.sendMail({
        from: email,
        to: config.MAIL,
        subject,
        text: `Full name: ${firstName} ${lastName} \r\n \r\n${message}`
    });
}