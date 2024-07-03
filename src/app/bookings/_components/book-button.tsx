import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AvailableSlots from "./available-slots";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

const BookButton = ({ tour }: { tour: Tours }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="ml-auto w-[10%] h-14 bg-orange-400 text-white p-2 rounded-md">
          Book Now
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 w-auto bg-transparent border-none">
        <AvailableSlots tour={tour} />
      </DialogContent>
    </Dialog>
  );
};

export default BookButton;
