import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { fullName, plan, phone, email, address } = await request.json();

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
      subject: `${fullName} Has Requested a Subscription Plan`,
      html: `
      <p>Full Name: ${fullName}</p>
      <p>Subscription Plan: ${plan}</p>
      <p>Phone Number: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Home Address: ${address}</p>`,
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Thank you for choosing ADROIT HANDYMAN SERVICES. Your request is being processed." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}