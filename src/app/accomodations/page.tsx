import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        We have 2 incredible accomodations for you!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] xl:w-[50%] mx-auto h-fit my-16">
        <Link
          className="h-fit relative  flex items-center justify-center cursor-pointer"
          href="/accomodations/kamikawa"
        >
          <DirectionAwareHover
            imageUrl={
              "https://yukiumihouse.files.wordpress.com/2023/04/psx_20230225_053505.jpg"
            }
          >
            <p className="font-bold text-xl">Yukiumi House Kamikawa</p>
            <p className="font-normal text-sm">$60 / night</p>
          </DirectionAwareHover>
        </Link>
        <Link
          className="h-fit relative  flex items-center justify-center cursor-pointer"
          href="/accomodations/furano"
        >
          <DirectionAwareHover
            imageUrl={
              "https://yukiumihouse.files.wordpress.com/2023/04/psx_20230225_053505.jpg"
            }
          >
            <p className="font-bold text-xl">Yukiumi House Furano</p>
            <p className="font-normal text-sm">$60 / night</p>
          </DirectionAwareHover>
        </Link>
      </div>
    </div>
  );
}
