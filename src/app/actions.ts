"use server";

import { z } from "zod";
import { db } from "@/lib/firebaseAdmin";

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

  try {
    await db.collection("earlyAccessSignups").add({
      email: validatedEmail,
      signedUpAt: new Date(),
    });
    console.log(`Email ${validatedEmail} saved to Firestore.`);

    return {
      success: true,
      message: "Thank you for signing up! We'll be in touch.",
      email: validatedEmail,
    };
  } catch (error) {
    console.error("Error saving email to Firestore:", error);
    // In a real app, you might want to log this error to a monitoring service
    return {
      success: false,
      message: "An error occurred while signing you up. Please try again later.",
    };
  }
}
