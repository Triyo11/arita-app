"use client";

import { ArrowUUpLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderCategoryList = ({ name }) => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // "window" only run on client side, and next js always try to run on server side
    // to force it run on client side, we can use "useEffect"
    // useEffect only run on client side
    const mediumScreen = window.matchMedia("(min-width: 768px)").matches;
    if (mediumScreen) {
      setIsMediumScreen(true);
    }
  }, []);

  return (
    <div className="md:py-8 py-4 md:px-32 px-6">
      <Link href={`/`}>
        <ArrowUUpLeft
          size={48}
          weight="bold"
          className={`text-color-secondary bg-color-accent2 rounded-3xl p-2 fixed bottom-10 right-10 z-10 ${
            isMediumScreen ? "hidden" : "block"
          }`}
        />
      </Link>
      <div className="text-center font-semibold md:text-3xl text-lg flex md:flex-row md:gap-2` flex-col justify-center text-color-primary">
        <div>Kategori Berita</div>
        <div>"{name.toUpperCase()}"</div>
      </div>
    </div>
  );
};

export default HeaderCategoryList;
