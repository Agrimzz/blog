import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full py-0 h-[100px] md:py-4">
      <div className="bg-background/80 mx-auto rounded-md p-4 flex justify-between items-center max-w-4xl">
        <Link href="/" className="text-2xl font-bold">
          EV<span className="text-primary">Blog</span>
        </Link>

        <ul className="flex gap-8 items-center text-lg font-semibold">
          <li className="cursor-pointer hover:text-primary">Cars</li>
          <li className="cursor-pointer hover:text-primary">Bikes</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
