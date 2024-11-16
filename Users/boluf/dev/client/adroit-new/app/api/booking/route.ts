import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { time, firstName, lastName, phone, email, address, state, service, description } = await request.json();

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
      subject: `${firstName} Has Submitted A New Booking Form`,
      html: `
      <p>Time Select: ${time}</p>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Phone Number: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Home Address: ${address}</p>
      <p>State: ${state}</p>
      <p>Class of Service: ${service}</p>
      <p>Brief description of services: ${description}</p>`,
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Thanks for choosing ADROIT HANDYMAN SERVICES. We received your request and will get back to you in a short while." }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}