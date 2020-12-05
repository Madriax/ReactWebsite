import * as nodemailer from "nodemailer";
import * as mg from "nodemailer-mailgun-transport"

import config from "../config/app.config";

export default nodemailer.createTransport(mg(config.MAILGUN));