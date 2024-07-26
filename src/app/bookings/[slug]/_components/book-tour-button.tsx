"use client";
import { useState, useEffect } from "react";
// import { useQueryClient } from "react-query";
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

/* const tourNames = {
  [Tours.Kamikawa]: "Kamikawa Tour",
  [Tours.Furano]: "Furano Tour",
  [Tours.SurfTour]: "Surf Tour",
}; */

/* const fetchSlots = async (tour: Tours) => {
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
}; */

const BookTourButton = ({ tour }: { tour: Tours }) => {
  if (tour === Tours.DayTours || tour === Tours.SurfTour) {
    return <p>Invalid tour</p>;
  }
  const [showQuestionnaire, setShowQuestionnaire] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  // const queryClient = useQueryClient();

  /*  useEffect(() => {
    // Prefetch data when the component mounts
    if (tourNames[tour] === "Kamiakawa Tour") {
      queryClient.prefetchQuery(["kamikawaSlots", tour], () =>
        fetchSlots(tour)
      );
    } else if (tourNames[tour] === "Furano Tour") {
      queryClient.prefetchQuery(["furanoSlots", tour], () => fetchSlots(tour));
    }
  }, [queryClient, tour]); */

  return (
    <Dialog>
      <DialogTrigger className="mx-auto w-[30%] md:w-[20%] xl:w-[17%] text-2xl h-16 font-medium bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-md">
        Book Now
      </DialogTrigger>
      <DialogContent className="p-5 w-[80%] lg:w-[50%] 2xl:w-[30%] h-[82.5%] bg-white border-none overflow-x-hidden">
        <DialogTitle className="mx-auto mt-5 text-3xl">
          {tour === Tours.Kamikawa ? "Kamikawa Tour" : "Furano Tour"}
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
                  onSlotSelect={(slot) => {
                    setShowQuestionnaire(true);
                    setSelectedSlot(slot);
                  }}
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
                <Questionnaire
                  selectedSlot={selectedSlot!}
                  tour={tour}
                  onBack={() => setShowQuestionnaire(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookTourButton;
