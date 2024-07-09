import * as z from "zod";

export const QuestionnaireSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  country: z
    .string({
      required_error: "Country is required.",
    })
    .min(2, { message: "Invalid country." })
    .max(200, { message: "Invalid country." }),
  age: z.string({ required_error: "Age is required." }),
  modality: z.enum(["Snowboard", "Ski"], {
    required_error: "Please select modality",
  }),
  level: z.enum(["Medium", "Advance", "Expert"], {
    required_error: "Please select level",
  }),
  experience: z
    .string({ required_error: "Experience is required." })
    .min(5, { message: "Please tell us more about your experience" })
    .max(2500, { message: "You exceeded the maximum characters limit." }),
  elevationGain: z.string({ required_error: "Elevation gain is required." }),
});

export const ContactUsSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  message: z.string().min(5, { message: "Message is required." }),
});
