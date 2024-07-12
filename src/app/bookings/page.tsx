import React from "react";
import TabSwitch from "./_components/tab-switch";

const BookingsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full pt-10">
      <TabSwitch />
    </div>
  );
};

export default BookingsPage;
