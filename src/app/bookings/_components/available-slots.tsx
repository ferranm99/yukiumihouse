import { useState, useEffect } from "react";

enum Tours {
  Kamikawa,
  Furano,
  DayTours,
  SurfTour,
}

const AvailableSlots = ({ tour }: { tour: Tours }) => {
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    const fetchSlots = async () => {
      console.log("Fetching slots for tour:", tour);
      const res = await fetch(`/api/slots?tour=${encodeURIComponent(tour)}`, {
        method: "GET",
      });
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Something went wrong!");
      }
      setSlots(await res.json());
    };
    fetchSlots();
  }, []);

  return (
    <div>
      <p>Available slots</p>
    </div>
  );
};

export default AvailableSlots;
