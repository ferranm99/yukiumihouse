import React from "react";
// import ImageCarousel from "./image-carousel";
import Image from "next/image";
import IncludedNotIncluded from "./included-not-included";

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
      <p>
        Hokkaido Northside is a multi-day tour where clients can explore beyond
        what Hokkaido's best mountains have to offer. We will locate you in the
        northern side of Daisetsuzan National Park. We will use Kurodake ropeway
        to access the mountain and get to a huge backcountry paradise. During
        the high season, we will also hike from the road, as there are many
        secret spots where we can ski for a great day. We will need to be
        versatile and adapt to different situations to make the most of the day
        and the conditions we deserve.
      </p>
      <IncludedNotIncluded
        includedItems={includedItems}
        notIncludedItems={notIncludedItems}
        notes={notes}
      />
    </div>
  );
};

export default KamikawaTour;
