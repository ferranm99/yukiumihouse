/* "use server";

import { google } from "googleapis";

type Review = [
  string, // name
  string, // date
  number, // rating
  number | null, // serviceRating
  number | null, // roomRating
  number | null, // locationRating
  string | null // reviewText
];

export async function fetchReviews() {
  "use server";
  const auth = await google.auth.getClient({
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
      range: "Sheet1!A22:G",
    });
    const values = response.data.values;
    if (!values) return [];
    const reviews: Review[] = [];
    values.map((review) => {
      if (
        review.length >= 3 &&
        review[0] !== "" &&
        review[1] !== "" &&
        review[2] !== ""
      ) {
        for (let i = 0; i < 7; i++) {
          if (i < review.length) {
            if (i === 2) {
              review[i] = Number(review[i]);
            } else if (i >= 3 && i <= 5) {
              review[i] = review[i] !== "" ? Number(review[i]) : null;
            } else {
              review[i] = review[i] !== "" ? review[i] : null;
            }
          } else {
            review.push(null);
          }
        }
        reviews.push(review as Review);
      }
    });
    return reviews;
  } catch (error) {
    console.error("Error getching sheets data:", error);
    return [];
  }
}
 */
