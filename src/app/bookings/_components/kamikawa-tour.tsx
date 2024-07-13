import React from "react";
// import ImageCarousel from "./image-carousel";
import Image from "next/image";
import IncludedNotIncluded from "./included-not-included";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const images = [
  "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg?w=1024",
  "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
  "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
  "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
];

const KamikawaTour: React.FC = () => {
  const includedItems = [
    "6 Nights Accommodation",
    "Breakfast each morning",
    "5 Days of Guide",
    "Kurodake Ropeway pass",
    "Transport for the duration of the trip including airport pickup and drop",
  ];

  const notIncludedItems = [
    "Flights",
    "Travel and medical insurance",
    "Ski rental, avy equipment *",
    "Lunch, drinks",
    "Ski passes different from Kurodake",
  ];
  const notes = [
    "We can provide rental equipment or sell equipment if requested with time",
  ];

  return (
    <div className="flex flex-col gap-8 items-center mt-4">
      <h1 className="text-4xl font-bold text-black">KURODAKE KAMIKAWA</h1>
      <div className="w-[90%] xl:w-[80%] 2xl:w-[70%]">
        <Image
          src="https://yukiumihouse.files.wordpress.com/2022/12/dji_0945.jpg"
          alt="Kurodake Kamikawa"
          width={1719}
          height={967}
          layout="responsive"
        />
      </div>
      <h2 className="text-2xl font-bold text-black">HOKKAIDO NORTHSIDE</h2>
      <p className="mx-32">
        Hokkaido Northside is a multi-day tour where clients can explore beyond
        what Hokkaido's best mountains have to offer. We will locate you in the
        northern side of Daisetsuzan National Park. We will use Kurodake ropeway
        to access the mountain and get to a huge backcountry paradise. During
        the high season, we will also hike from the road, as there are many
        secret spots where we can ski for a great day. We will need to be
        versatile and adapt to different situations to make the most of the day
        and the conditions we deserve.
      </p>
      <div className="flex gap-4 justify-center">
        <Card className="w-96 h-96">
          <CardHeader className="justify-center bg-slate-200 rounded-t-xl h-[22.5%]">
            <CardTitle className="text-center text-2xl font-semibold p-4 w-full">
              Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="w-full p-4 rounded-bl-xl">
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
        </Card>
        <Card className="w-96 h-96">
          <CardHeader className="justify-center bg-slate-200 rounded-t-xl h-[22.5%]">
            <CardTitle className="text-center text-2xl font-semibold p-4 w-full">
              Not Included
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[77.5%]">
            <ul className="w-full p-4 rounded-br-xl">
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
          <CardFooter className="px-1">
            <CardDescription className="text-sm pt-1">
              * We can provide rental equipment or sell equipment if requested
              with time
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
      {/*  <IncludedNotIncluded
        includedItems={includedItems}
        notIncludedItems={notIncludedItems}
        notes={notes}
      /> */}
    </div>
  );
};

export default KamikawaTour;
