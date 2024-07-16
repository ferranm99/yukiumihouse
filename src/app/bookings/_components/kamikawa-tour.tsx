import React from "react";
// import ImageCarousel from "./image-carousel";
import Image from "next/image";
// import IncludedNotIncluded from "./included-not-included";
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
      <div className="w-[80%] mx-auto">
        <Image
          src="https://yukiumihouse.files.wordpress.com/2022/12/dji_0945.jpg"
          alt="Kurodake Kamikawa"
          width={1719}
          height={967}
          layout="responsive"
        />
      </div>
      <h2 className="text-2xl font-bold text-black pt-6">HOKKAIDO NORTHSIDE</h2>
      <section className="w-[90%] mx-auto sm:text-lg flex gap-16 justify-center pb-7">
        <p className="w-[43%] sm:text-lg">
          Hokkaido Northside is a multi-day tour where clients can explore
          beyond what Hokkaido's best mountains have to offer. We will locate
          you in the northern side of Daisetsuzan National Park. We will use
          Kurodake ropeway to access the mountain and get to a huge backcountry
          paradise. During the high season, we will also hike from the road, as
          there are many secret spots where we can ski for a great day. We will
          need to be versatile and adapt to different situations to make the
          most of the day and the conditions we deserve.
        </p>
        <div className="w-[35%]">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/img_3940.jpg"
            alt="Hokkaido Northside"
            width={379}
            height={252}
            layout="responsive"
          />
        </div>
      </section>
      <section className="grid grid-col-1 sm:grid-cols-2 gap-6 sm:gap-3 lg:gap-6 justify-center w-[95%] lg:w-[80%] xl:w-[70%] 2xl:w-[55%] mx-auto">
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
      </section>
      {/*  <IncludedNotIncluded
        includedItems={includedItems}
        notIncludedItems={notIncludedItems}
        notes={notes}
      /> */}
      <section className="flex flex-col sm:flex-row gap-8 sm:gap-20 w-[90%] sm:w-[70%] mx-auto items-center justify-center">
        <div className="w-full lg:w-[58%]">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2022/12/img_7564.jpg"
            alt="Daisetzusan National park"
            layout="responsive"
            width={512}
            height={341}
          />
        </div>
        <Card className="w-full lg:w-[60%] xl:w-[30%] h-fit shadow-xl">
          <CardHeader className="rounded-t-xl pb-2">
            <CardTitle className="text-center text-2xl font-semibold w-full pb-2">
              Diary
            </CardTitle>
            <hr className="w-2/3 mx-auto" />
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <ul className="sm:text-lg">
              <li className="py-4 flex gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"
                    fill="#213b91"
                  />
                  <path
                    d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z"
                    fill="#213b91"
                  />
                </svg>
                <p className="w-full mx-auto">Kurodake ropeway</p>
              </li>
              <li className="py-4 flex gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"
                    fill="#213b91"
                  />
                  <path
                    d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z"
                    fill="#213b91"
                  />
                </svg>
                <p className="w-full mx-auto">Asahidake backcountry</p>
              </li>
              <li className="py-4 flex gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"
                    fill="#213b91"
                  />
                  <path
                    d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z"
                    fill="#213b91"
                  />
                </svg>
                <p className="w-full mx-auto">
                  Yukiumi house backyard/Backcountry
                </p>
              </li>
              <li className="py-4 flex gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"
                    fill="#213b91"
                  />
                  <path
                    d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z"
                    fill="#213b91"
                  />
                </svg>
                <p className="w-full mx-auto">Pippu ski area</p>
              </li>
              <li className="py-4 flex gap-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"
                    fill="#213b91"
                  />
                  <path
                    d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z"
                    fill="#213b91"
                  />
                </svg>
                <p className="w-full mx-auto">Daisetzusan National park</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="flex flex-col sm:flex-row gap-8 sm:gap-20 w-[90%] mx-auto justify-center items-center pt-8">
        <Card className="w-full lg:w-[30%] h-fit shadow-xl">
          <CardHeader className="rounded-t-xl pb-2">
            <CardTitle className="text-center text-2xl font-semibold w-full pb-2">
              Diary
            </CardTitle>
            <hr className="w-2/3 mx-auto" />
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <ul className="sm:text-lg list-disc list-inside">
              <li className="px-1 py-4">
                We like to wake up early and have a{" "}
                <strong>good breakfast</strong>. While making a morning briefing
                we will decide where we will go.
              </li>
              <li className="px-1 py-4">
                <strong>Riding time</strong>! That is why we are here! Let's
                enjoy and be safe.
              </li>
              <li className="px-1 py-4">
                Go to the <strong>onsen</strong>! Nothing better than the
                Japanese hot springs to recover the tired body.
              </li>
              <li className="px-1 py-4">
                <strong>Dinner</strong> at yukiumi house or outside. Ready to
                sleep and ride again.
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="w-[48%]">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/dsc_5595.jpg"
            alt="Diary"
            width={3}
            height={2}
            layout="responsive"
          />
        </div>
      </section>
    </div>
  );
};

export default KamikawaTour;
