import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { firstName, lastName, date, state, address, whatsapp, phone, lga, skill, email, qualifications, experience, rating, language } = await request.json();

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
      subject: `${firstName} Has Submitted A New Application Form`,
      html: `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Date of birth: ${date}</p>
      <p>State: ${state}</p>
      <p>Home Address: ${address}</p>
      <p>WhatsApp: ${whatsapp}</p>
      <p>Phone Number: ${phone}</p>
      <p>Local Govt area: ${lga}</p>
      <p>Skill: ${skill}</p>
      <p>Qualification: ${qualifications}</p>
      <p>Experience: ${experience}</p>
      <p>Rating: ${rating}</p>
      <p>Language: ${language}</p>
      `,
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Your application has been received. We will get back to you after a review. Thank you!!" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}