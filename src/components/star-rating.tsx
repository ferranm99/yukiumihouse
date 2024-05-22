// components/StarRating.tsx
import React from "react";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-xl">
          &#9733;
        </span>
      ); // Filled star
    } else {
      stars.push(
        <span key={i} className="text-xl">
          &#9734;
        </span>
      ); // Empty star
    }
  }
  return <div className="text-yellow-500">{stars}</div>;
};

export default StarRating;
