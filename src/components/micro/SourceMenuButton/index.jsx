import Link from "next/link";
import "animate.css";

const SourceMenuButton = ({ source }) => {
  return (
    <div className="z-10 animate__animated animate__fadeInUp">
      <Link href={`/channel/${source}`} className="relative">
        <p className="p-4 border-2 rounded-md text-center md:text-xl text-sm font-bold border-color-accent2 text-color-primary transition-colors before:absolute before:left-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left before:scale-y-0 before:bg-color-accent2 before:rounded-md before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:text-color-secondary before:hover:scale-y-100">
          {source.toUpperCase()}
        </p>
      </Link>
    </div>
  );
};

export default SourceMenuButton;
