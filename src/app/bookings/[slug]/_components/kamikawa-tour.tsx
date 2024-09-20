import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import IncludedNotIncluded from "./included-not-included";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookTourButton from "./book-tour-button";

interface Slot {
  period: string;
  availableSpots: number;
}

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
}

const fetchSlots = async () => {
  const res = await fetch(`/api/slots?tour=${encodeURIComponent(0)}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data.map((slot: [string, string]) => ({
    period: slot[0],
    availableSpots: parseInt(slot[1], 10),
  }));
};

const includedItems = [
  "6 Nights Accommodation at Yukiumi House Kamikawa",
  "Breakfast each morning",
  "5 Days of Guide",
  "Kurodake Ropeway pass",
  "Transport for the duration of the trip including airport pickup and drop off",
];

const notIncludedItems = [
  "Flights",
  "Travel and medical insurance",
  "Ski rental, avy equipment *",
  "Lunch, drinks",
  "Ski passes different from Kurodake",
];

const KamikawaTour: React.FC = () => {
  const {
    data: slots = [],
    isLoading,
    isError,
  } = useQuery<Slot[], Error>([Tours.Kamikawa], () => fetchSlots());

  return (
    <div className="flex flex-col gap-8 items-center mt-4">
      <h2 className="text-3xl font-semibold text-black">KURODAKE KAMIKAWA</h2>
      <div className="relative aspect-[1719/967] w-[100%] xl:w-[90%] 2xl:w-[80%] rounded-lg mx-auto">
        <Image
          src="https://yukiumihouse.files.wordpress.com/2022/12/dji_0945.jpg"
          alt="Kurodake Kamikawa"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-bold text-black pt-6">HOKKAIDO NORTHSIDE</h2>
      <section className="w-[100%] xl:w-[90%] 2xl:w-[80%] mx-auto sm:text-lg flex flex-col lg:flex-row gap-12 items-center justify-center pb-7">
        <p className="w-full text-lg sm:text-xl/loose">
          Hokkaido Northside is a multi-day tour where clients can explore
          beyond what Hokkaido's best mountains have to offer. We will locate
          you in the northern side of Daisetsuzan National Park. We will use
          Kurodake ropeway to access the mountain and get to a huge backcountry
          paradise. During the high season, we will also hike from the road, as
          there are many secret spots where we can ski for a great day. We will
          need to be versatile and adapt to different situations to make the
          most of the day and the conditions we deserve.
        </p>
        <div className="relative aspect-[379/252] w-full rounded-lg">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/img_3940.jpg"
            alt="Hokkaido Northside"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </section>
      <IncludedNotIncluded
        includedItems={includedItems}
        notIncludedItems={notIncludedItems}
      />
      <section className="flex flex-col md:flex-row gap-4 xl:gap-12 2xl:gap-16 w-[100%] 2xl:w-[85%] mx-auto items-center justify-center">
        <div className="relative aspect-[512/341] w-full rounded-lg">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2022/12/img_7564.jpg"
            alt="Daisetzusan National park"
            style={{ objectFit: "cover" }}
            fill
            className="rounded-lg"
          />
        </div>
        <Card className="w-full md:w-[60%] lg:w-[55%] xl:w-[60%] 2xl:w-[80%] h-fit shadow-xl">
          <CardHeader className="rounded-t-xl pb-2">
            <CardTitle className="text-center text-2xl font-semibold w-full pb-2">
              Destinations
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
      <section className="flex flex-col md:flex-row gap-4 xl:gap-12 2xl:gap-16 w-[100%] 2xl:w-[85%] mx-auto items-center justify-center pt-8">
        <Card className="w-full md:w-[60%] lg:w-[55%] xl:w-[60%] 2xl:w-[80%] h-fit shadow-xl order-2 md:order-1">
          <CardHeader className="rounded-t-xl pb-2">
            <CardTitle className="text-center text-2xl font-semibold w-full pb-2">
              Tour Diary
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
        <div className="relative aspect-[3/2] w-full rounded-xl order-1 md:order-2">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/dsc_5595.jpg"
            alt="Diary"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="w-[100%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-8">
        <h2 className="text-2xl font-bold text-black text-center pb-6">
          Weather Reports
        </h2>
        <p className="text-lg sm:text-xl/loose">
          Our team it's always tracking the forecast, the snow stability and the
          mountain conditions to ensure we are having a safe day on the
          mountain. We will make sure to adequate terrain to the group level and
          to keep safety as 1st priority in the backcountry. During dinner time,
          our best choices would be discussed within the group and in the
          morning last decisions would be taken according to the weather
          situation.
        </p>
      </section>
      <section className="w-[100%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-8">
        <h2 className="text-2xl font-bold text-black text-center pb-6">
          Ability
        </h2>
        <p className="text-lg sm:text-xl/loose pb-6">
          Good riding skills on all types of slopes are required and some
          previous backcountry experience too. Healthy cardio form is one of the
          most important things to be able to enjoy the tour. The guides running
          the trip will adjust the level at the client's desire and skills
          ability.
        </p>
        <div className="relative aspect-[276/155] w-full lg:w-[75%] 2xl:w-[55%] mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/06/pxl_20230204_030604118-edited.jpg"
            alt="Ability"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="w-[100%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-8">
        <h2 className="text-2xl font-bold text-black text-center pb-6">
          Equipment
        </h2>
        <p className="text-lg sm:text-xl/loose  pb-6">
          Self equipment as touring gear, touring skis, splitboard or snowshoes,
          are the preferable option. As well as safety equipment is required. In
          terms of skis we recommend wide and large set up as we are going to go
          through the deepest snow, for snowboarders we recommend to be on a
          splitboard
        </p>
        <div className="relative aspect-[524/294] w-full lg:w-[75%] 2xl:w-[55%] mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/06/img_20230326_164710-edited.jpg"
            alt="Equipment"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="w-[100%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-8">
        <h2 className="text-4xl font-bold text-black text-center pb-6">
          Tour Dates 2024-25
        </h2>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading slots</p>}
        <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          {slots.map((slot, index) => (
            <div
              className="w-full flex items-center justify-center py-4"
              key={index}
            >
              <div className="relative flex items-center justify-center text-lg w-[80%] md:w-[95%] lg:w-[80%] h-14 shadow-lg text-black p-2 rounded-md border-gray-300 border-[1px]">
                <div
                  className={`flex items-center justify-center ${
                    slot.availableSpots === 0 ? "line-through" : ""
                  }`}
                >
                  {slot.period}
                </div>
                {slot.availableSpots === 0 && (
                  <span className="absolute bottom-0 right-0 text-base italic font-semibold pr-2 text-red-500">
                    Sold out
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[100%] xl:w-[90%] 2xl:w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-black text-center pb-6">
          Price and Duration
        </h2>
        <div className="flex items-end justify-center">
          <p className="text-xl">6 Nights, 7 Days&nbsp;</p>
          <p className="text-4xl font-medium"> $3000</p>
          <p className="text-sm pb-3">/person</p>
        </div>
      </section>
      <BookTourButton tour={Tours.Kamikawa} />
    </div>
  );
};

export default KamikawaTour;
