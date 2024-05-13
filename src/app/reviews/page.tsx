import { google } from "googleapis";

export default async function Page() {
  async function getReviews() {
    "use server";
    const auth = await google.auth.getClient({
      credentials: JSON.parse(process.env.GOOGLE_KEY!),
      // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const places = google.places({
      version: "v1",
      auth,
    });

    try {
      const placeData = await places.places.get({
        languageCode: "en",
        name: `places/${process.env.MAPS_PLACE_ID}`,
        // Does this get reviews directly?
        // name: `places/${process.env.MAPS_PLACE_ID}?fields=reviews`,
      });
      return placeData.data.reviews;
    } catch (error) {
      console.error("Error getching sheets data:", error);
      return [];
    }
  }

  const reviews = await getReviews();

  return (
    <div>
      {reviews &&
        reviews.map((review, index) => (
          <div key={index}>
            <strong>{review.name}</strong>: {review.rating},{" "}
            {review.relativePublishTimeDescription}
            <p>{review.text?.text}</p>
            <strong>Original Text</strong>
            <p>{review.originalText?.text}</p>
          </div>
        ))}
    </div>
  );
}
