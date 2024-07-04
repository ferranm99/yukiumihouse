import { google } from "googleapis";
import { NextResponse } from "next/server";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

// Helper function to convert column index to letter
function columnIndexToLetter(index: number): string {
  let letter = "";
  while (index >= 0) {
    letter = String.fromCharCode((index % 26) + 65) + letter;
    index = Math.floor(index / 26) - 1;
  }
  return letter;
}

function getRange(tour: Tours): string {
  const startColumnIndex = tour * 2;
  const startColumn = columnIndexToLetter(startColumnIndex);
  const endColumn = columnIndexToLetter(startColumnIndex + 1);
  // Construct the range string
  return `Tours!${startColumn}3:${endColumn}`;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tourParam = searchParams.get("tour");

  if (tourParam === null) {
    return NextResponse.json(
      { error: "Tour parameter is missing" },
      { status: 400 }
    );
  }

  const tour = parseInt(tourParam, 10) as Tours;

  const auth = await google.auth.getClient({
    // credentials,
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: getRange(tour),
    });

    return NextResponse.json(response.data.values);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
