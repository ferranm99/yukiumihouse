import ReviewCard from "./_components/review-card";
import { google } from "googleapis";

type Review = [
  string, // name
  string, // date
  number, // rating (as string)
  number | null, // serviceRating
  number | null, // roomRating
  number | null, // locationRating
  string | null // reviewText
];

export default async function Page() {
  async function getReviews() {
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

  const reviews: Review[] = await getReviews();

  const fiveStarPercentage =
    (reviews.reduce((acc, review) => {
      return review[2] === 5 ? acc + 1 : acc;
    }, 0) /
      reviews.length) *
    100;
  const fourStarPercentage =
    (reviews.reduce((acc, review) => {
      return review[2] === 4 ? acc + 1 : acc;
    }, 0) /
      reviews.length) *
    100;
  const threeStarPercentage =
    (reviews.reduce((acc, review) => {
      return review[2] === 3 ? acc + 1 : acc;
    }, 0) /
      reviews.length) *
    100;
  const twoStarPercentage =
    (reviews.reduce((acc, review) => {
      return review[2] === 2 ? acc + 1 : acc;
    }, 0) /
      reviews.length) *
    100;
  const oneStarPercentage =
    (reviews.reduce((acc, review) => {
      return review[2] === 1 ? acc + 1 : acc;
    }, 0) /
      reviews.length) *
    100;

  return (
    <div>
      <div className="mb-20 pl-16 mt-20">
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 text-yellow-400 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-400 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-400 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-400 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {reviews.reduce((acc, review) => acc + review[2], 0) /
              reviews.length}
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {reviews.length} global ratings
        </p>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            5 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded w-[${fiveStarPercentage}%]`}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {fiveStarPercentage}%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            4 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded w-[${fourStarPercentage}%]`}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {fourStarPercentage}%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            3 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded w-[${threeStarPercentage}%]`}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {threeStarPercentage}%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            2 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded w-[${twoStarPercentage}%]`}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {twoStarPercentage}%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            1 star
          </a>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className={`h-5 bg-yellow-400 rounded w-[${oneStarPercentage}%]`}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {oneStarPercentage}%
          </span>
        </div>
      </div>
      <div className="px-16 w-full">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-300 p-8 rounded-xl shadow-md"
            >
              {" "}
              {/* Adjust margins and padding as needed */}
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
