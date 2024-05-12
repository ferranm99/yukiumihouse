import { google } from "googleapis";

export default async function Page() {
  async function getSpots() {
    "use server";
    const auth = await google.auth.getClient({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
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

      console.log(response.data.values);

      return response.data.values;
    } catch (error) {
      console.error("Error getching sheets data:", error);
      return [];
    }
  }

  const spots = await getSpots();

  return (
    <div>
      {spots &&
        spots.map((spot) => (
          <div>
            <h2>{spot[0]}</h2>
            <p>{spot[1]}</p>
          </div>
        ))}
    </div>
  );
}
