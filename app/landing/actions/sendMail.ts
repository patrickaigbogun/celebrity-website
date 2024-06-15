"use server";
import nodemailer, { SentMessageInfo } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // Add the email which will send the message to you
    // It should be your email
    user: process.env.NEXT_EMAIL,
    pass: process.env.NEXT_PASSWORD,
  },
});

export async function handleSubmit(formData: FormData): Promise<SentMessageInfo> {
  const info = {
    // Add your email here. This email will receive the message
    to: "bigtechdomain@gmail.com",
    subject: "Contact Form Submission",
    text: `
      Name: ${formData.get("name")} 
      Email: ${formData.get("email")}
      ${formData.get("message")}
    `,

    // You can also send HTML. Just uncomment the below line and comment the above line
    // html: `<h1>Hello, World</h1>`
  };

  return await new Promise((resolve, reject) => {
    transporter.sendMail(info, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
