import React from "react";

interface IncludedNotIncludedProps {
  includedItems: string[];
  notIncludedItems: string[];
  notes?: string[];
}

const IncludedNotIncluded: React.FC<IncludedNotIncludedProps> = ({
  includedItems,
  notIncludedItems,
  notes,
}) => {
  return (
    <div className="mx-auto w-[70%] flex flex-col">
      <div className="container p-0 border border-black rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl">
          <div className="flex flex-col items-center justify-center rounded-l-xl border-r border-black">
            <h2 className="text-center text-2xl font-semibold p-4 bg-slate-300 w-full rounded-tl-xl border-b border-black">
              Included
            </h2>
            <ul className="bg-slate-100 w-full p-4 rounded-bl-xl">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      fill="#398f00"
                    />
                    <path
                      d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#398f00"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-center text-2xl font-semibold p-4 bg-slate-300 w-full rounded-tr-xl border-b border-black">
              Not Included
            </h2>
            <ul className="bg-slate-100 w-full p-4 rounded-br-xl">
              {notIncludedItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 gap-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      fill="#db0000"
                    />
                    <line
                      x1="8.5"
                      y1="8.5"
                      x2="15.5"
                      y2="15.5"
                      stroke="#db0000"
                      strokeWidth="2"
                    />
                    <line
                      x1="8.5"
                      y1="15.5"
                      x2="15.5"
                      y2="8.5"
                      stroke="#db0000"
                      strokeWidth="2"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {notes && notes.length > 0 && (
        <div className="pt-1 italic">
          {notes.map((note, index) => (
            <p key={index}>
              {"*".repeat(index + 1)} {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncludedNotIncluded;
