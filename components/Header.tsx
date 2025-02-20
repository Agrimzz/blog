import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full py-0 h-[100px] md:py-4">
      <div className="bg-background/80 mx-auto rounded-md p-4 flex justify-between items-center max-w-4xl">
        <Link href="/" className="text-2xl font-bold">
          EV<span className="text-primary">Blog</span>
        </Link>

        <IconMenu2 size={28} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
