import { google } from "googleapis";

export default async function Page() {
  async function getSpots() {
    "use server";
    const auth = await google.auth.getClient({
      // credentials,
      credentials: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A2:B9",
      });

      return response.data.values;
    } catch (error) {
      console.error("Error getching sheets data:", error);
      return [];
    }
  }

  const spots = await getSpots();

  return (
    <div>
      <h1> Spots</h1>
      {spots &&
        spots.map((spot, index) => (
          <div key={index}>
            <h2>{spot[0]}</h2>
            <p>{spot[1]}</p>
          </div>
        ))}
    </div>
  );
}
