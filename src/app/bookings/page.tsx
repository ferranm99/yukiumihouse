import React from "react";
import TabSwitch from "./_components/tab-switch";
import ReactQueryProvider from "@/app/react-query-provider";

const BookingsPage: React.FC = () => {
  return (
    <ReactQueryProvider>
      <div className="flex flex-col items-center justify-start w-full pt-10">
        <TabSwitch />
      </div>
    </ReactQueryProvider>
  );
};

export default BookingsPage;
