"use client";
import { useState, useEffect } from "react";

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
  onSlotSelect: (tour: Tours) => void;
}

const AvailableSlots = ({ tour, onSlotSelect }: AvailableSlotsProps) => {
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    const fetchSlots = async () => {
      console.log("Fetching slots for tour:", tour);
      const res = await fetch(`/api/slots?tour=${encodeURIComponent(tour)}`, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      const formattedSlots = data.map((slot: [string, string]) => ({
        period: slot[0],
        availableSpots: parseInt(slot[1], 10),
      }));
      setSlots(formattedSlots);
    };
    fetchSlots();
  }, [tour]);

  useEffect(() => {
    console.log("Slots:", slots);
  }, [slots]);

  return (
    <div className="flex flex-col gap-5">
      <h3>Choose a date and time for your tour:</h3>
      {slots.map((slot, index) => (
        <div className="flex gap-2 items-end justify-center" key={index}>
          <button
            className="w-40 h-14 disabled:cursor-not-allowed bg-slate-100 text-black p-2 rounded-md hover:bg-slate-200 font-semibold border-black border-[1px]"
            disabled={slot.availableSpots === 0}
            onClick={() => onSlotSelect(tour)}
          >
            {slot.period}
          </button>
          <span
            className={`text-sm italic font-semibold w-24 ${
              slot.availableSpots === 0 ? "text-red-500" : "text-green-600"
            }`}
          >
            {slot.availableSpots === 0
              ? "booked out"
              : `${slot.availableSpots} spots left`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AvailableSlots;
