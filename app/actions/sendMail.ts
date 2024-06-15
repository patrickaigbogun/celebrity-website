"use server";
import nodemailer, { SentMessageInfo } from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_EMAIL,
    pass: process.env.NEXT_PASSWORD,
  },
});

export async function handleSubmit(formData: FormData): Promise<SentMessageInfo> {
  const info = {
    to: "bigtechdomain@gmail.com",
    subject: "Contact Form Submission",
    text: `
      Name: ${formData.get("name")} 
      Email: ${formData.get("email")}
      ${formData.get("message")}
    `,
    html: `
      <p><strong>Name:</strong> ${formData.get("name")}</p>
      <p><strong>Email:</strong> ${formData.get("email")}</p>
      <p>${formData.get("message")}</p>
    `,
  };

  try {
    const result = await transporter.sendMail(info);
    console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
