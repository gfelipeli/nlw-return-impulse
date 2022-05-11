import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3a25ec8ab49fa7",
    pass: "dff7fffb5f101e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: 'Feedget Team <feedback@feedget.com>',
    to: 'Giovane Felipeli <gfelipeli@proton.me>',
    subject,
    html: body,
    });
  }
}