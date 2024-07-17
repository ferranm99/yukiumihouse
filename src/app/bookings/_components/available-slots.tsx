"use client";
import { useQuery } from "react-query";
// import ReactQueryProvider from "@/app/react-query-provider";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

interface Slot {
  period: string;
  availableSpots: number;
}

interface AvailableSlotsProps {
  tour: Tours;
  onSlotSelect: (slot: string) => void;
}

const fetchSlots = async (tour: Tours) => {
  const res = await fetch(`/api/slots?tour=${encodeURIComponent(tour)}`, {
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

const AvailableSlots = ({ tour, onSlotSelect }: AvailableSlotsProps) => {
  const {
    data: slots = [],
    isLoading,
    isError,
  } = useQuery<Slot[], Error>(["slots", tour], () => fetchSlots(tour));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading slots</p>;

  return (
    // <ReactQueryProvider>
    <div className="flex flex-col gap-5">
      <h3>Choose a date and time for your tour:</h3>
      {slots.map((slot, index) => (
        <div className="flex gap-2 items-end justify-center" key={index}>
          <button
            className="w-40 h-14 disabled:cursor-not-allowed bg-slate-100 text-black p-2 rounded-md hover:bg-slate-200 font-semibold border-black border-[1px]"
            disabled={slot.availableSpots === 0}
            onClick={() => onSlotSelect(slot.period)}
          >
            {slot.period}
          </button>
          <span
            className={`text-sm italic font-semibold w-24 ${
              slot.availableSpots === 0 ? "text-red-500" : "text-green-600"
            }`}
          >
            {slot.availableSpots === 0
              ? "Sold out"
              : `${slot.availableSpots} spots left`}
          </span>
        </div>
      ))}
    </div>
    // </ReactQueryProvider>
  );
};

export default AvailableSlots;
