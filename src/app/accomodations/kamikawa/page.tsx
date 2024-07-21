import PhotoAlbum from "../_components/photo-album";

export const photos = [
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0000.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0006.jpg",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0015.jpg",
    width: 3120,
    height: 4160,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0016.jpg",
    width: 3872,
    height: 2903,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0018.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0019.jpg",
    width: 2894,
    height: 3880,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0020.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0021.jpg",
    width: 3120,
    height: 4160,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0022.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0024.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0025.jpg",
    width: 2957,
    height: 2928,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0026.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0027.jpg",
    width: 3120,
    height: 4160,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0028.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0031.jpg",
    width: 3120,
    height: 4160,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0034.jpg",
    width: 3120,
    height: 4160,
  },
  {
    src: "/images/yukihouse_kamikawa/IMG-20240717-WA0035.jpg",
    width: 4160,
    height: 3120,
  },
  {
    src: "/images/yukihouse_kamikawa/PXL_20240130_024019134.jpg",
    width: 2268,
    height: 4032,
  },
];

const Page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        Yukiumi House Kamikawa
      </h1>
      <div className="my-8">
        <PhotoAlbum photos={photos} />
      </div>
    </div>
  );
};

export default Page;
