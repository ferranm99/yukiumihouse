"use server";

import * as z from "zod";
import { QuestionnaireSchema } from "@schemas";
import { sendBookingEmail } from "@lib/mail";

export const booking = async (data: z.infer<typeof QuestionnaireSchema>) => {
  const validatedData = QuestionnaireSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid questionnaire!" };
  }

  try {
    await sendBookingEmail(validatedData.data);
    return {
      success:
        "Your answers have been submitted! We will review them and get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Something went wrong. Please try again!" };
  }
};
