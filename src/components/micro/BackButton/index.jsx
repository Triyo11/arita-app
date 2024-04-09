import { ArrowUUpLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

const BackButton = () => {
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
    <Draggable allowAnyClick="true" axis="both" bounds="parent" scale={1}>
      <Link href={`/`} className="drag-handle">
        <ArrowUUpLeft
          size={48}
          weight="bold"
          className={`text-color-secondary bg-color-accent2 rounded-3xl p-2 fixed bottom-10 right-10 z-10 ${
            isMediumScreen ? "hidden" : "block"
          }`}
        />
      </Link>
    </Draggable>
  );
};

export default BackButton;
