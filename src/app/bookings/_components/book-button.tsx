"use client";
import { useState } from "react";
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

const BookButton = ({ tour }: { tour: Tours }) => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

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
