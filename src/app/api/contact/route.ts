import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/db";
import { messages } from "@/db/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !subject?.trim() ||
    !message?.trim()
  ) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 }
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look quite right." },
      { status: 400 }
    );
  }

  try {
    await db.insert(messages).values({ name, email, subject, message });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anou_web@hotmail.com",
      subject: `Portfolio contact: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}