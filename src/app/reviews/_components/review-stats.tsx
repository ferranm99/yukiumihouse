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

  const getStarColor = (index: number): string => {
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

  return (
    <div className="my-20 pl-16 2xl:pl-24 w-full">
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => {
          const starType = getStarColor(index);
          return (
            <svg
              key={index}
              className={`w-4 h-4 me-1 ${
                starType === "full" ? "text-yellow-400" : "text-gray-300"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              {starType === "half" && (
                <defs>
                  <linearGradient
                    id={`half-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="50%" stopColor="#facc15" />
                    <stop offset="50%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
              )}
              <path
                fill={
                  starType === "half" ? `url(#half-${index})` : "currentColor"
                }
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          );
        })}
        <p className="ms-1 text-sm font-medium">{ratingAvg}</p>
        <p className="ms-1 text-sm font-medium">out of</p>
        <p className="ms-1 text-sm font-medium">5</p>
      </div>
      <p className="text-sm font-medium">{reviews.length} global ratings</p>
      <div className="flex items-center mt-4">
        <div className="text-sm font-medium hover:underline">5 star</div>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${fiveStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="text-sm font-medium">{fiveStarPercentage}%</span>
      </div>
      <div className="flex items-center mt-4">
        <div className="text-sm font-medium hover:underline">4 star</div>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${fourStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="text-sm font-medium">{fourStarPercentage}%</span>
      </div>
      <div className="flex items-center mt-4">
        <div className="text-sm font-medium hover:underline">3 star</div>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${threeStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="text-sm font-medium">{threeStarPercentage}%</span>
      </div>
      <div className="flex items-center mt-4">
        <div className="text-sm font-medium hover:underline">2 star</div>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${twoStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="text-sm font-medium">{twoStarPercentage}%</span>
      </div>
      <div className="flex items-center mt-4">
        <div className="text-sm font-medium hover:underline">1 star</div>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={{ width: `${oneStarPercentage}%` }}
            className="h-5 bg-yellow-400 rounded"
          />
        </div>
        <span className="text-sm font-medium">{oneStarPercentage}%</span>
      </div>
    </div>
  );
}
