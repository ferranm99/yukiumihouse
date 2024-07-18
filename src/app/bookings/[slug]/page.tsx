import React from "react";
import TabSwitch from "./_components/tab-switch";

const BookingsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full pt-10">
      <h1 className="text-4xl font-bold text-center pb-8">Choose your tour!</h1>
      <TabSwitch tour={params.slug} />
    </div>
  );
};

export default BookingsPage;
