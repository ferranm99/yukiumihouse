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
          className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95
        </p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          out of
        </p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          5
        </p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          5 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-yellow-400 rounded width-[70%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          70%
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
          <div className="h-5 bg-yellow-400 rounded w-[17%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          17%
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
          <div className="h-5 bg-yellow-400 rounded w-[8%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          8%
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
          <div className="h-5 bg-yellow-400 rounded w-[4%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          4%
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
          <div className="h-5 bg-yellow-400 rounded w-[1%]"></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          1%
        </span>
      </div>
    </div>
    /*     <div>
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
    </div> */
  );
}
