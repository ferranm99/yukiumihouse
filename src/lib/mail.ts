import { Resend } from "resend";
import * as z from "zod";
import { QuestionnaireSchema } from "@/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBookingEmail = async (
  data: z.infer<typeof QuestionnaireSchema>
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_ADDRESS!,
    subject: "Booking Request",
    html: `
      <h1>Booking Request</h1>
      <h3>Email del client</h3>
      <p><a href="mailto:${data.email}">${data.email}</a></p>
      <h3>País</h3>
      <p> ${data.country}</p>
      <h3>Edat</h3>
      <p> ${data.age}</p>
      <h3>Modalitat</h3>
      <p> ${data.modality}</p>
      <h3>Nivell</h3>
      <p> ${data.level}</p>
      <h3>Experiència</h3>
      <p> ${data.experience}</p>
      <h3>Desnivell</h3>
      <p> ${data.elevationGain}m</p>
      <p> ---------------------------------- </p>
      <p> Si vols acceptar la reserva recorda actualitzar l'excel: <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}/edit#gid=0">Google Sheets</a></p>
    `,
  });
};
