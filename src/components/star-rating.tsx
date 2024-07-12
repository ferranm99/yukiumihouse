import React from "react";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const getStarColor = (index: number): string => {
    // Round to nearest 0.5
    const roundedRating = Math.round(rating * 2) / 2;
    if (index < roundedRating) {
      if (index + 0.5 === roundedRating) {
        return "half";
      }
      return "full";
    }
    return "empty";
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        const starType = getStarColor(index);
        return (
          <svg
            key={index}
            className={`w-[1.4rem] h-[1.4rem] ${
              starType === "full" ? "text-yellow-400" : "text-gray-300"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
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
              d="M9.049 2.927a1 1 0 011.902 0l1.135 3.495h3.692a1 1 0 01.594 1.81l-2.986 2.173 1.135 3.495a1 1 0 01-1.537 1.11L10 12.347l-2.986 2.173a1 1 0 01-1.537-1.11l1.135-3.495-2.986-2.173a1 1 0 01.594-1.81h3.692L9.049 2.927z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
