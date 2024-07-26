"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import Questionnaire from "./questionnaire";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
}

const BookCustomTourButton = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <Dialog>
      <DialogTrigger className="mx-auto w-[30%] md:w-[20%] xl:w-[17%] text-2xl h-16 font-medium bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-md">
        Book Now
      </DialogTrigger>
      <DialogContent className="p-5 w-[80%] lg:w-[50%] 2xl:w-[30%] h-[82.5%] bg-white border-none overflow-x-hidden">
        <DialogTitle className="mx-auto mt-5 text-3xl">
          Custom Day Tour
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
              ></motion.div>
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
                  tour={Tours.DayTours}
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

export default BookCustomTourButton;
