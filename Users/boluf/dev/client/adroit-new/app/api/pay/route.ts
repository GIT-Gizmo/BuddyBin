import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { fullName, email, amount } = await request.json();

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
      subject: `${fullName} Has Initiated A Bank Transfer Payment For A Sum Of ${amount}`,
      html: `
      <p>Full Name: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Amount: ${amount}</p>`,
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Complete your payment by making a transfer to the provided account number. We will reach out to you once you complete the payment." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}