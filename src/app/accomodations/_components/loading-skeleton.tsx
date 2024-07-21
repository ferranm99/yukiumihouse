/* const LoadingSkeleton = () => {
  return (
    <div className="w-full">
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex mb-1 w-full">
          {[...Array(4)].map((_, colIndex) => (
            <div
              key={colIndex}
              className="flex items-center justify-center bg-gray-300 animate-pulse w-[25%] h-40 m-1 rounded-md"
            >
              Loading Image...
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
 */
const LoadingSkeleton = () => {
  return (
    <div className="w-full h-60 flex items-center justify-center bg-gray-300 animate-pulse m-1 rounded-md">
      Loading Images...
    </div>
  );
};

export default LoadingSkeleton;
