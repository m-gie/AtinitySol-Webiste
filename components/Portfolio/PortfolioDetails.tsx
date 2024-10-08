"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { portfolio } from "@/data";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

const PortfolioDetails = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      {portfolio.map(({ id, title, des, img, iconLists, link }) => (
        <div
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={id}
        >
          <PinContainer title={title} href={link}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <Image src="/bg.png" alt="bgimg" width={400} height={400} />
              </div>
              <Image
                src={img}
                alt="cover"
                className="z-10 absolute bottom-0 "
                width={400}
                height={400}
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {title}
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <Image
                      src={icon}
                      alt="icon5"
                      className="p-2"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default PortfolioDetails;
