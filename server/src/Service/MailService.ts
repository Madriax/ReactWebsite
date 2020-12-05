import MailgunProvider from "../Provider/MailgunProvider";
import config from "../config/app.config";

export interface IContact {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: string
}

/**
 * Send a mail to myself
 * @param contact Information about contact form
 */
export async function sendMail(contact: IContact) {
    const {firstName, lastName, email, subject, message} = contact
    return await MailgunProvider.sendMail({
        from: email,
        to: config.MAIL,
        subject,
        text: `Full name: ${firstName} ${lastName} \r\n \r\n${message}`
    });
}