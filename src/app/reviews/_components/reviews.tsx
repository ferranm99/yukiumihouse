"use client";
import ReviewCard from "./review-card";
import ReviewStats from "./review-stats";
import { useQuery } from "react-query";

type Review = [
  string, // name
  string, // date
  number, // rating
  number | null, // serviceRating
  number | null, // roomRating
  number | null, // locationRating
  string | null // reviewText
];

const fetchReviews = async (): Promise<Review[]> => {
  const res = await fetch("/api/reviews");
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

const ReviewsSection: React.FC = () => {
  const { data, error, isLoading } = useQuery<Review[], Error>(
    "reviews",
    fetchReviews
  );

  const reviews = data || [];

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-4xl font-bold text-black">
        What Our Guests Say About Yukiumi House?
      </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong loading the reviews</p>}
      {!isLoading && !error && (
        <div>
          <ReviewStats reviews={reviews} />
          <div className="px-6 sm:px-16 2xl:px-24 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-8 rounded-xl shadow-md"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;