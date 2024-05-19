import { google } from "googleapis";

export async function GET() {
  const auth = await google.auth.getClient({
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const places = google.places({
    version: "v1",
    auth,
  });

  try {
    const placeData = await places.places.get({
      languageCode: "en",
      // name: `places/${process.env.MAPS_PLACE_ID}`,
      // Does this get reviews directly?
      name: `places/${process.env.MAPS_PLACE_ID}?fields=reviews`,
    });
    return Response.json(placeData.data.reviews);
  } catch (error) {
    console.error("Error fetching reviews data:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
