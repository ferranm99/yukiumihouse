import { HeroLayoutGrid } from "@/components/hero-layout-grid";
import { HeroInfo } from "@/components/hero-info";

export default function Test() {
  return (
    <section className="flex flex-col md:flex-row h-[85rem] xs:h-[60rem] md:h-[90vh] p-6 md:p-8 gap-4">
      <div className="w-full md:w-[45%] flex items-start md:items-center mt-4 md:mt-0">
        <HeroInfo />
      </div>
      <div className="w-full md:w-[55%] h-full">
        <HeroLayoutGrid />
      </div>
    </section>
  );
}
