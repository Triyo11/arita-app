import { ArrowUUpLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderNewsCard = ({ headerTitle, source }) => {
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
    <header className="px-20 sticky top-14 z-10 bg-color-primary">
      <div className="md:px-8 md:py-2 p-4">
        <Link href={`/channel/${source}`}>
          <ArrowUUpLeft
            size={48}
            className={`text-color-primary bg-color-secondary rounded-3xl p-2 fixed bottom-10 right-10 z-10 ${
              isMediumScreen ? "hidden" : "block"
            }`}
          />
        </Link>
        <h2 className="flex justify-center font-bold md:text-3xl sm:text-2xl text-md text-color-secondary">
          {headerTitle}
        </h2>
      </div>
    </header>
  );
};

export default HeaderNewsCard;
