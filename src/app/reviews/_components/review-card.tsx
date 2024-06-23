import React from "react";

type Review = [
  string, // name
  string, // date
  string, // rating (as string)
  string | null | undefined, // serviceRating
  number | null | undefined, // roomRating
  number | null | undefined, // locationRating
  string | null | undefined // reviewText
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <article className="md:gap-8 sm:grid sm:grid-cols-3 2xl:ml-20 2xl:mr-80">
      <div className="col-span-1 mt-6 md:mt-0 mr-16 flex flex-col items-center justify-start">
        <div className=" mb-6 w-full">
          <div className="font-medium">
            <p>{review[0]}</p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    aria-hidden="true"
                    className={`w-5 h-5 ${
                      i < review[2] ? "text-yellow-400" : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{`${i + 1} star`}</title>
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.135 3.495h3.692a1 1 0 01.594 1.81l-2.986 2.173 1.135 3.495a1 1 0 01-1.537 1.11L10 12.347l-2.986 2.173a1 1 0 01-1.537-1.11l1.135-3.495-2.986-2.173a1 1 0 01.594-1.81h3.692L9.049 2.927z" />
                  </svg>
                ))}
                <h3 className="ml-2 text-sm font-semibold text-gray-90">
                  {review[2]}/5
                </h3>
              </div>
            </div>
            <div>
              <dl>
                <dt className="text-sm font-medium text-gray-500">Service</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div
                      className={`bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[${
                        review[3] * 2 * 10
                      }%]`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {review[3]}
                  </span>
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-medium text-gray-500">Room</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div
                      className={`bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[${
                        review[4] * 2 * 10
                      }%]`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {review[4]}
                  </span>
                </dd>
              </dl>

              <dl>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="flex items-center">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div
                      className={`bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[${
                        review[5] * 2 * 10
                      }%]`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {review[5]}
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
                Reviewed: <time>{review[1]}</time>
              </p>
            </footer>
          </div>
        </div>
        <p className="mb-2 text-gray-500">{review[6]}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
