import React from "react";
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

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <article className="md:gap-4 sm:grid sm:grid-cols-3 2xl:ml-2 2xl:mr-4">
      <div className="col-span-1 mt-6 md:mt-0 mr-6 ml-4 flex flex-col items-center justify-start">
        <div className="w-full">
          <div className="font-medium">
            <p>{review[0]}</p>
            <div className="text-sm">
              <div className="flex items-center mb-4">
                <StarRating rating={review[2]} />
                <h3 className="ml-2 text-sm font-semibold">{review[2]}/5</h3>
              </div>
            </div>
            <div>
              <dl>
                <dt className="text-sm font-medium">Service</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div
                      style={{
                        width: `${review[3] ? review[3] * 2 * 10 : 0}%`,
                      }}
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {review[3] ? review[3] : "NA"}
                  </span>
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-medium">Room</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div
                      style={{
                        width: `${review[4] ? review[4] * 2 * 10 : 0}%`,
                      }}
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {review[4] ? review[4] : "NA"}
                  </span>
                </dd>
              </dl>

              <dl>
                <dt className="text-sm font-medium">Location</dt>
                <dd className="flex items-center">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div
                      style={{
                        width: `${review[5] ? review[5] * 2 * 10 : 0}%`,
                      }}
                      className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {review[5] ? review[5] : "NA"}
                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-6 md:mt-0">
        <div className="flex items-start mb-5">
          <div className="pe-4">
            <footer>
              <p className="mb-2 text-sm text-gray-500">
                <i>
                  Reviewed: <time>{review[1]}</time>
                </i>
              </p>
            </footer>
          </div>
        </div>
        <p className="mb-2">
          {review[6]
            ? review[6]
            : "There are no comments available for this review"}
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
