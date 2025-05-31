"use server";

import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

interface SubmitEmailResult {
  success: boolean;
  message: string;
  email?: string;
}

export async function submitEmailAction(
  prevState: SubmitEmailResult | null,
  formData: FormData
): Promise<SubmitEmailResult> {
  const email = formData.get("email") as string;

  const validationResult = emailSchema.safeParse({ email });

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors[0].message,
    };
  }

  const validatedEmail = validationResult.data.email;

  // Simulate sending email to vicky.rai1@hotmail.com
  // In a real application, you would use an email service provider (e.g., SendGrid, AWS SES)
  console.log(`Email received for early access: ${validatedEmail}`);
  console.log(`This email would be forwarded to vicky.rai1@hotmail.com`);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for signing up! We'll be in touch.",
    email: validatedEmail,
  };
}
