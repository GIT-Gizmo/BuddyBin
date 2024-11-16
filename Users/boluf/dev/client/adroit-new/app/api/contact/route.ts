import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { fullName, email, description } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: '465',
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD
      }
    } as nodemailer.TransportOptions)

    const mailOption = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL, // Recipient email
      subject: `${fullName} Has Submitted A New Enquiry/Feedback`,
      html: `
      <p>Full Name: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${description}</p>`,
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Thanks for contacting ADROIT HANDYMAN SERVICES. We received your feedback and will get back to you in a short while." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}