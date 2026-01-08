import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#039;";
      default:
        return char;
    }
  });

export async function POST(request: Request) {
  if (!resend) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  }

  let payload: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  try {
    payload = await request.json();
  } catch (error) {
    console.error("Invalid JSON payload:", error);
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const subject = (payload.subject ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!email || !message) {
    return NextResponse.json(
      { error: "Email and message are required." },
      { status: 400 }
    );
  }

  try {
    const textBody = [
      `New contact form submission from Glow Bharat website`,
      "",
      `Name: ${name || "N/A"}`,
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const htmlBody = `
      <p><strong>New contact form submission from Glow Bharat website</strong></p>
      <p><strong>Name:</strong> ${escapeHtml(name || "N/A")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${
        subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""
      }
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    await resend.emails.send({
      from: "Glow Bharat <onboarding@resend.dev>",
      to: ["sahil@stacx24.com"],
      subject: subject
        ? `[Glow Bharat] ${subject}`
        : "New message from Glow Bharat website",
      text: textBody,
      html: htmlBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
