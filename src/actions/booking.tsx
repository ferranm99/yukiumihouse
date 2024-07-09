"use server";

import * as z from "zod";
import { QuestionnaireSchema } from "@schemas";
import { sendBookingEmail } from "@lib/mail";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

export const booking = async (
  data: z.infer<typeof QuestionnaireSchema>,
  selectedSlot: string,
  tour: Tours
) => {
  const validatedData = QuestionnaireSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid questionnaire!" };
  }

  try {
    await sendBookingEmail(validatedData.data, selectedSlot, tour);
    return {
      success:
        "Your answers have been submitted! We will review them and get back to you as soon as possible. You can close this now.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Something went wrong. Please try again!" };
  }
};
