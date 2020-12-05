import {config} from "dotenv";
config();

const mailConfig = {
    MAILGUN: {
        auth: {
            api_key: process.env.API_KEY,
            domain: process.env.DOMAIN,
        },
        host: "api.eu.mailgun.net"
    },
    MAIL: process.env.MAIL
}

const appConfig = {
    ...mailConfig
}
export default appConfig;