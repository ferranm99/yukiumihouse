import { LayoutGridDemo } from "@/components/hero-grid";
import { HeroHighlightDemo } from "@/components/hero-highlight";

export default function Test() {
  return (
    <section className="flex h-[90vh] p-8  ">
      <div className="w-[45%] flex items-center">
        <HeroHighlightDemo />
      </div>
      <div className="w-[55%]">
        <LayoutGridDemo />
      </div>
    </section>
  );
}
