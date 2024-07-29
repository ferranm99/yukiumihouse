"use client";
import { useQuery } from "react-query";

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
  if (tour === Tours.DayTours || tour === Tours.SurfTour) {
    return <p>Invalid tour</p>;
  }
  const {
    data: slots = [],
    isLoading,
    isError,
  } = useQuery<Slot[], Error>(
    [tour === Tours.Kamikawa ? "kamikawaSlots" : "furanoSlots", tour],
    () => fetchSlots(tour)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading slots</p>;

  return (
    <div className="flex flex-col gap-5 pb-6">
      <h3>Choose a date and time for your tour:</h3>
      {slots.map((slot, index) => (
        <div
          className="flex gap-2 items-end justify-center sm:px-10"
          key={index}
        >
          <button
            className="w-full h-16 sm:h-14 disabled:cursor-not-allowed bg-slate-100 text-black p-2 rounded-md hover:bg-slate-200 font-semibold border-black border-[1px] relative flex items-center justify-center"
            disabled={slot.availableSpots === 0}
            onClick={() => onSlotSelect(slot.period)}
          >
            <span
              className={`absolute inset-0 pb-1 sm:pb-0 flex items-center justify-center ${
                slot.availableSpots === 0 ? "line-through" : ""
              }`}
            >
              {slot.period}
            </span>
            <span
              className={`absolute bottom-1 right-1 text-sm italic font-semibold ${
                slot.availableSpots === 0 ? "text-red-500" : "text-green-600"
              }`}
            >
              {slot.availableSpots === 0
                ? "Sold out"
                : `${slot.availableSpots} spots left`}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AvailableSlots;
