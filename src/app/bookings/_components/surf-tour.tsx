import React from "react";
import ImageCarousel from "./image-carousel";

const images = [
  "https://yukiumihouse.files.wordpress.com/2023/04/img_4184.jpg?w=1024",
  "https://yukiumihouse.files.wordpress.com/2022/12/vlcsnap-2022-11-13-14h25m09s320-2-4.jpg?w=1024",
  "https://yukiumihouse.files.wordpress.com/2023/04/dji_0072.jpg?w=1024",
  "https://yukiumihouse.files.wordpress.com/2022/12/dji_0797.jpg?w=1024",
];

const SurfTour: React.FC = () => {
  return <ImageCarousel images={images} />;
};

export default SurfTour;
