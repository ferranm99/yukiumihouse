"use client";
import { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import AvailableSlots from "./available-slots";
import { AnimatePresence, motion } from "framer-motion";
import Questionnaire from "./questionnaire";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

const tourNames = {
  [Tours.Kamikawa]: "Kamikawa Tour",
  [Tours.Furano]: "Furano Tour",
  [Tours.DayTours]: "Day Tours",
  [Tours.SurfTour]: "Surf Tour",
};

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

const BookButton = ({ tour }: { tour: Tours }) => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    // Prefetch data when the component mounts
    queryClient.prefetchQuery(["slots", tour], () => fetchSlots(tour));
  }, [queryClient, tour]);

  return (
    <Dialog>
      <DialogTrigger>
        <button className="ml-auto w-[10%] h-14 bg-orange-400 text-white p-2 rounded-md">
          Book Now
        </button>
      </DialogTrigger>
      <DialogContent className="p-5 w-[80%] lg:w-[50%] 2xl:w-[30%] h-[82.5%] bg-white border-none overflow-x-hidden">
        <DialogTitle className="mx-auto mt-5 text-3xl">
          {tourNames[tour]}
        </DialogTitle>
        <div className="relative w-full h-full">
          <AnimatePresence initial={false}>
            {!showQuestionnaire ? (
              <motion.div
                key="slots"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <AvailableSlots
                  tour={tour}
                  onSlotSelect={() => setShowQuestionnaire(true)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="questionnaire"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Questionnaire onBack={() => setShowQuestionnaire(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookButton;
