import ReviewCard from "./_components/review-card";

interface Review {
  name: string | null | undefined;
  rating: number | null | undefined;
  text: string | null | undefined;
  originalText: string | null | undefined;
  relativePublishTimeDescription: string | null | undefined;
}

async function getReviews() {
  const res = await fetch("/api/reviews");

  if (!res.ok) {
    // This will activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  // const reviews = await getReviews();
  const reviews: Review[] = [
    {
      name: "John Doe",
      rating: 4.5,
      text: "This is a great product!",
      originalText: "Ceci est un excellent produit!",
      relativePublishTimeDescription: "1 week ago",
    },
    {
      name: "Jane Smith",
      rating: 5,
      text: "Absolutely loved it!",
      originalText: "Absolutamente me encantó!",
      relativePublishTimeDescription: "2 weeks ago",
    },
    // Add more reviews as needed
  ];

  return (
    <div>
      {reviews ? (
        reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={{
              name: review.name,
              rating: review.rating,
              text: review.text,
              relativePublishTimeDescription:
                review.relativePublishTimeDescription,
            }}
          />
        ))
      ) : (
        <div>There was an error fetching the reviews</div>
      )}
    </div>
  );
}
