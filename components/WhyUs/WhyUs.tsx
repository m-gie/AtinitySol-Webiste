"use client";

import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { whyus } from "@/data";

const WhyUs = () => {
  return (
    <div className="py-20">
      <h1
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Why Us!
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <StickyScroll whyus={whyus} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
