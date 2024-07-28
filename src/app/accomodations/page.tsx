import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">
        We have 2 incredible accomodations for you!
      </h1>
      <h3 className="text-center mt-8 text-lg w-[95%] md:w-[80%] xl:w-[70%] mx-auto">
        Yukiumi has two lodges, one in Furano town and one in Kamikawa village.
        Both places are at the bed of the biggest National park in Japan,
        Daisetsusan National Park. Both of the lodges are cataloged as Japanese
        Ryokan, being just simply austere cozy and comfortable japanese houses
        opened for our guests. During winter we operate our Backcountry tours in
        these two locations, and in summer the guest houses are open to receive
        all the guests and travelers that come through.
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto h-fit my-16">
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
