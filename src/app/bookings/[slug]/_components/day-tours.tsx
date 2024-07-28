import React from "react";
import Image from "next/image";
import BookCustomTourButton from "./book-custom-tour";

const DayTours: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-4">
      <h2 className="text-3xl font-semibold text-black">CUSTOM DAY TOUR</h2>
      <h3 className="text-2xl font-semibold text-black">
        Choose when and where you want to go!
      </h3>
      <section className="flex flex-col lg:flex-row gap-10 xl:gap-12 2xl:gap-16 w-[100%] md:w-[90%] lg:w-[100%] 2xl:w-[85%] mx-auto items-center justify-center pt-8">
        {" "}
        <div className="w-full lg:w-[60%] 2xl:w-[80%] order-2 lg:order-1">
          {/* <h2 className="text-2xl font-bold text-black pb-6">Price</h2> */}
          <div className="flex items-end justify-center pb-6">
            <p className="text-2xl font-medium">Price:&nbsp;&nbsp;</p>
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
        <div className="relative aspect-[16/9] w-full rounded-lg mx-auto order-1 lg:order-2">
          <Image
            src="https://yukiumihouse.files.wordpress.com/2023/04/caldera-1.jpg"
            alt="Furano"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </section>
      <BookCustomTourButton />
    </div>
  );
};

export default DayTours;
