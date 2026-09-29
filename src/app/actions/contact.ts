"use server";

import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  need: z.enum(["software", "marketing", "both", "not-sure"], {
    error: "Please select what you need.",
  }),
  message: z.string().min(10, "Please share a bit more detail."),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const needLabels: Record<string, string> = {
  software: "Software",
  marketing: "Marketing",
  both: "Both",
  "not-sure": "Not sure",
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    need: formData.get("need"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, need, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.log("[contact] Submission (no RESEND_API_KEY configured):", {
      name,
      email,
      need,
      message,
    });
    return {
      success: true,
      message:
        "Thanks — your message was received. I'll get back to you within 1–2 business days.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "contact@usmansharif.com",
      to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
      replyTo: email,
      subject: `[usmansharif.com] ${needLabels[need]} inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Need: ${needLabels[need]}`,
        "",
        message,
      ].join("\n"),
    });

    return {
      success: true,
      message:
        "Thanks — your message was sent. I'll get back to you within 1–2 business days.",
    };
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return {
      success: false,
      message: "Something went wrong sending your message. Please try again or email me directly.",
    };
  }
}
