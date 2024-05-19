"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import StarRating from "./star-rating"; // Import the StarRating component

interface Review {
  name: string | null | undefined;
  rating: number | null | undefined;
  text: string | null | undefined;
  relativePublishTimeDescription: string | null | undefined;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <Card className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md w-[18rem]">
      <CardHeader className="mb-2">
        <h3 className="text-lg font-semibold">{review.name}</h3>
        <div className="flex items-center text-gray-600">
          {review.rating ? <StarRating rating={review.rating} /> : "No rating"}
          <span className="ml-2">{review.relativePublishTimeDescription}</span>
        </div>
      </CardHeader>
      <CardContent className="mb-2">
        <p className="text-black">{review.text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
