import React from "react";
import Image from "next/image";

const DayTours: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-4">
      <h2 className="text-3xl font-semibold text-black">CUSTOM DAY TOUR</h2>
      <h3 className="text-2xl font-semibold text-black">
        Choose when and where you want to go!
      </h3>
      <section className="w-[90%] mx-auto sm:text-lg flex gap-16 items-center justify-center py-7">
        <div className="w-[40%]">
          {/* <h2 className="text-2xl font-bold text-black pb-6">Price</h2> */}
          <div className="flex items-end justify-start pb-6">
            <p className="text-2xl font-medium">Price:&nbsp;&nbsp;&nbsp;</p>
            <p className="text-4xl font-medium"> ¥80.000</p>
            <p className="text-sm pb-3">/group</p>
          </div>
          <ul className="text-lg sm:text-xl/loose list-disc list-inside ml-6">
            <li>The price is for a group of up to 4 people.</li>
            <li>
              Additional people can be added for an extra ¥20,000 per person.
            </li>
            <li>
              The price includes a private driver and transportation to the
              destination of your choice.
            </li>
            <li>The price does not include meals, lift passes, or rentals.</li>
            <li>
              If we decide to go further, additional fuel expenses will be
              charged.
            </li>
            <li>
              Please let us know in advance if you need rentals or lift passes.
            </li>
          </ul>
        </div>
        <div className="relative aspect-[16/9] w-[55%] rounded-lg mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/caldera-1.jpg"
            alt="Furano"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </section>
      {/* <h4 className="text-xl font-semibold text-black">
        FURANO RESORT, TOKACHI RANGE
      </h4>
      <div className="flex gap-6 w-[85%] h-fit mb-8">
        <div className="relative aspect-[16/9] w-[100%] rounded-lg mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/dji_0260.jpg"
            alt="Furano"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div className="relative aspect-[3/2] w-[100%] rounded-lg mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/06/dji_0020.jpg"
            alt="Furano"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
      <h4 className="text-xl font-semibold text-black">
        KURODAKE ROPEWAY, ASAHIDAKE ROPEWAY
      </h4>
      <div className="flex gap-6 w-[85%] h-fit mb-8">
        <div className="relative aspect-[16/9] w-[100%] rounded-lg mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/caldera-1.jpg"
            alt="Furano"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div className="relative aspect-[73/41] w-[100%] rounded-lg mx-auto">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/vlcsnap-2022-12-05-15h57m47s4961.png"
            alt="Furano"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>
      <h4 className="text-xl font-semibold text-black">
        YUKIUMI HOUSE BACKYARD
      </h4>
      <div className="relative aspect-[2/1] w-[65%] rounded-lg mx-auto">
        <Image
          src="https://yukiumihouse.files.wordpress.com/2023/04/manekiiwa-sunrise.jpg"
          alt="Furano"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div> */}
    </div>
  );
};

export default DayTours;
