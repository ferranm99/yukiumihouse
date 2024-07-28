"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import Questionnaire from "./questionnaire";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
}

const BookCustomTourButton = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState<boolean>(false);
  const [date, setDate] = useState<Date>();

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
                // className="absolute inset-0"
                className="flex flex-col w-full h-full"
              >
                <h3 className="text-xl font-normal text-black pt-5 pl-2">
                  Choose when you want to go:
                </h3>
                <div className="h-[50%] w-fit mx-auto pt-8">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-[50%] h-[50%] pb-8 pr-4 ml-auto flex flex-col">
                  <Button
                    onClick={() => setShowQuestionnaire(true)}
                    disabled={!date}
                    className="w-full text-2xl h-16 font-medium bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-md mt-auto"
                  >
                    Next
                  </Button>
                </div>
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
                  selectedSlot={date!.toString()}
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
