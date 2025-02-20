import { IconSearch } from "@tabler/icons-react";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full  mx-auto bg-background/60 pt-[80px]">
      <div className="max-w-4xl min-h-[300px]  mx-auto py-2 text-center flex flex-col items-center justify-center gap-12 px-4">
        <h1 className="text-2xl  font-bold leading-[1.5] md:text-4xl ">
          <span className="text-primary"> Electrify your journey</span>:
          Discover the latest in EV innovations and drive the sustainable
          revolution.
        </h1>

        <div className=" flex gap-2 items-center bg-white rounded-md text-black p-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Posts"
            className="flex-1 p-2 text-black outline-none rounded-md md:text-lg "
          />
          <IconSearch size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
