import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IncludedNotIncludedProps {
  includedItems: string[];
  notIncludedItems: string[];
}

const IncludedNotIncluded: React.FC<IncludedNotIncludedProps> = ({
  includedItems,
  notIncludedItems,
}) => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 gap-6 sm:gap-3 lg:gap-16 justify-center w-[95%] lg:w-[80%] xl:w-[70%] 2xl:w-[56%] mx-auto">
      <Card className="h-[20rem] sm:h-[22rem]">
        <CardHeader className="justify-center bg-slate-200 rounded-t-xl h-[22.5%]">
          <CardTitle className="text-center text-2xl font-semibold p-4 w-full">
            Included
          </CardTitle>
        </CardHeader>
        <div className="h-[77.5%] flex items-center justify-center">
          <CardContent className="w-[90%] h-auto mx-auto p-0">
            <ul className="w-full rounded-bl-xl sm:text-lg">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 gap-2">
                  <div className="flex-shrink-0">
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
                  </div>
                  <div className="flex-grow">{item}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </Card>
      <div className="flex flex-col">
        <Card className="h-[20rem] sm:h-[22rem]">
          <CardHeader className="justify-center bg-slate-200 rounded-t-xl h-[22.5%]">
            <CardTitle className="text-center text-2xl font-semibold p-4 w-full">
              Not Included
            </CardTitle>
          </CardHeader>
          <div className="h-[77.5%] flex items-center justify-center">
            <CardContent className="w-[90%] h-auto mx-auto p-0">
              <ul className="w-full p-4 rounded-br-xl sm:text-lg">
                {notIncludedItems.map((item, index) => (
                  <li key={index} className="flex items-center p-1 gap-3">
                    <div className="flex-shrink-0">
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
                    </div>
                    <div className="flex-grow">{item}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        </Card>
        <CardFooter className="px-1">
          <CardDescription className="text-sm pt-1">
            * We can provide rental equipment or sell equipment if requested
            with time
          </CardDescription>
        </CardFooter>
      </div>
    </div>
  );
};

export default IncludedNotIncluded;
