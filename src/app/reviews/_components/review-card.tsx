import React from "react";

interface Review {
  name: string | null | undefined;
  rating: number | null | undefined;
  text: string | null | undefined;
  relativePublishTimeDescription: string | null | undefined;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <article className="md:gap-8 sm:grid sm:grid-cols-3 2xl:ml-20 2xl:mr-80">
      <div className="col-span-1 mt-6 md:mt-0 mr-16 flex flex-col items-center justify-start">
        <div className=" mb-6 w-full">
          <div className="font-medium">
            <p>Jese Leos</p>
            <div className="text-sm text-gray-500">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{`${i + 1} star`}</title>
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.135 3.495h3.692a1 1 0 01.594 1.81l-2.986 2.173 1.135 3.495a1 1 0 01-1.537 1.11L10 12.347l-2.986 2.173a1 1 0 01-1.537-1.11l1.135-3.495-2.986-2.173a1 1 0 01.594-1.81h3.692L9.049 2.927z" />
                  </svg>
                ))}
                <h3 className="ml-2 text-sm font-semibold text-gray-90">5/5</h3>
              </div>
            </div>
            <div>
              <dl>
                <dt className="text-sm font-medium text-gray-500">Service</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[88%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">8.8</span>
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-medium text-gray-500">Room</dt>
                <dd className="flex items-center mb-3">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[89%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">8.9</span>
                </dd>
              </dl>

              <dl>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="flex items-center">
                  <div className="w-full bg-gray-200 rounded h-2.5 me-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-[54%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">5.4</span>
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
                Reviewed: <time>January, 2022</time>
              </p>
            </footer>
          </div>
        </div>
        <p className="mb-2 text-gray-500">
          This is my third Invicta Pro Diver. They are just fantastic value for
          money. This one arrived yesterday and the first thing I did was set
          the time, popped on an exhibition case back, and observed the tick. It
          was already running smoothly and kept time perfectly during the day.
          The size is perfect, and the build quality and finish are exceptional
          for the price. I hope it will continue to perform as well as it has
          started.
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
