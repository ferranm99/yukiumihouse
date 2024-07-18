import StarRating from "@components/star-rating";

type Review = [
  string, // name
  string, // date
  number, // rating
  number | null, // serviceRating
  number | null, // roomRating
  number | null, // locationRating
  string | null // reviewText
];

interface ReviewStatsProps {
  reviews: Review[];
}

export default function ReviewStats({ reviews }: ReviewStatsProps) {
  // Initialize an array with 5 elements, all set to 0
  const starCounts = Array(5).fill(0);

  reviews.forEach((review) => {
    starCounts[review[2] - 1] += 1; // Subtract 1 to match index (0-4 for 1-5 stars)
  });

  const totalReviews = reviews.length;
  const ratingAvg =
    Math.round(
      (reviews.reduce((acc, review) => acc + review[2], 0) / reviews.length) *
        100
    ) / 100;
  const fiveStarPercentage = (starCounts[4] / totalReviews) * 100;
  const fourStarPercentage = (starCounts[3] / totalReviews) * 100;
  const threeStarPercentage = (starCounts[2] / totalReviews) * 100;
  const twoStarPercentage = (starCounts[1] / totalReviews) * 100;
  const oneStarPercentage = (starCounts[0] / totalReviews) * 100;

  /*   const getStarColor = (index: number): string => {
    // Round to nearest 0.5
    const roundedRating = Math.round(ratingAvg * 2) / 2;
    if (index < roundedRating) {
      if (index + 0.5 === roundedRating) {
        return "half";
      }
      return "full";
    }
    return "empty";
  };
 */
  return (
    <div className="mt-12 mb-16 w-[45%] mx-auto">
      <div className="flex items-center w-full mb-2">
        <StarRating rating={ratingAvg} />
        <p className="ms-1 text-sm font-medium">{ratingAvg}</p>
        <p className="ms-1 text-sm font-medium">out of</p>
        <p className="ms-1 text-sm font-medium">5</p>
      </div>
      <p className="text-sm font-medium">{reviews.length} global ratings</p>
      <div className="flex items-center mt-4">
        <div className="w-fit whitespace-nowrap text-sm font-medium hover:underline">
          5 star
        </div>
        <div className="w-full mx-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${fiveStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="w-[5%] text-sm font-medium">
          {fiveStarPercentage}%
        </span>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-fit whitespace-nowrap text-sm font-medium hover:underline">
          4 star
        </div>
        <div className="w-full mx-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${fourStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="w-[5%] text-sm font-medium">
          {fourStarPercentage}%
        </span>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-fit whitespace-nowrap text-sm font-medium hover:underline">
          3 star
        </div>
        <div className="w-full mx-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${threeStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="w-[5%] text-sm font-medium">
          {threeStarPercentage}%
        </span>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-fit whitespace-nowrap text-sm font-medium hover:underline">
          2 star
        </div>
        <div className="w-full mx-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${twoStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="w-[5%] text-sm font-medium">{twoStarPercentage}%</span>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-fit whitespace-nowrap text-sm font-medium hover:underline">
          1 star
        </div>
        <div className="w-full mx-2 h-5 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${oneStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="w-[5%] text-sm font-medium">{oneStarPercentage}%</span>
      </div>
    </div>
  );
}
